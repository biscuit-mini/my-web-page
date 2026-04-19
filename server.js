import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT || 5500);

// Render 持久化磁盘目录（可被 env 覆盖）
const DB_DIR = process.env.DB_DIR || path.join(__dirname, "data");
const DB_FILE = process.env.DB_FILE || path.join(DB_DIR, "db.json");
const SEED_DB_FILE = process.env.SEED_DB_FILE || path.join(__dirname, "db.json");
const WEB_ROOT = path.join(__dirname, "src");

app.use(express.json({ limit: "1mb" }));
app.use(express.static(WEB_ROOT));

function ensureDb() {
  if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true });
  if (!fs.existsSync(DB_FILE)) {
    let initialDb = { events: [] };

    if (fs.existsSync(SEED_DB_FILE)) {
      try {
        const seedRaw = fs.readFileSync(SEED_DB_FILE, "utf-8");
        const seed = JSON.parse(seedRaw);
        if (seed && Array.isArray(seed.events)) {
          initialDb = { events: seed.events };
        }
      } catch {
        // Fallback to empty DB if seed is invalid.
      }
    }

    fs.writeFileSync(DB_FILE, JSON.stringify(initialDb, null, 2), "utf-8");
  }
}

function readDb() {
  ensureDb();
  return JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
}

function writeDb(db) {
  ensureDb();
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), "utf-8");
}

function clean(v, max = 200) {
  return String(v ?? "").trim().slice(0, max);
}

app.get("/healthz", (_req, res) => res.status(200).send("ok"));

app.get("/api/events", (_req, res) => {
  const db = readDb();
  res.json(db.events.sort((a, b) => b.createdAt - a.createdAt));
});

app.post("/api/events", (req, res) => {
  const db = readDb();
  const visitor = clean(req.body.visitor, 40);
  const avatar = clean(req.body.avatar, 300);
  const action = clean(req.body.action, 120);

  if (!visitor || !action) {
    return res.status(400).json({ error: "visitor/action required" });
  }

  const item = {
    id: Date.now().toString(36),
    visitor,
    avatar,
    action,
    reply: "",
    createdAt: Date.now()
  };

  db.events.push(item);
  writeDb(db);
  res.json(item);
});

app.patch("/api/events/:id/reply", (req, res) => {
  const db = readDb();
  const id = clean(req.params.id, 60);
  const reply = clean(req.body.reply, 300);

  const found = db.events.find((e) => e.id === id);
  if (!found) return res.status(404).json({ error: "not found" });

  found.reply = reply;
  writeDb(db);
  res.json(found);
});

app.delete("/api/events/batch", (req, res) => {
  const db = readDb();
  const ids = Array.isArray(req.body?.ids) ? req.body.ids : [];
  const cleanIds = ids.map((v) => clean(v, 60)).filter(Boolean);
  if (cleanIds.length === 0) return res.status(400).json({ error: "ids required" });

  const idSet = new Set(cleanIds);
  const before = db.events.length;
  db.events = db.events.filter((e) => !idSet.has(e.id));
  const removed = before - db.events.length;

  writeDb(db);
  res.json({ ok: true, removed });
});

app.delete("/api/events/:id", (req, res) => {
  const db = readDb();
  const id = clean(req.params.id, 60);
  const before = db.events.length;
  db.events = db.events.filter((e) => e.id !== id);
  if (db.events.length === before) return res.status(404).json({ error: "not found" });
  writeDb(db);
  res.json({ ok: true });
});

app.delete("/api/events", (_req, res) => {
  const db = readDb();
  db.events = [];
  writeDb(db);
  res.json({ ok: true, count: 0 });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(WEB_ROOT, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});