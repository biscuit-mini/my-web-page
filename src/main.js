const $ = (id) => document.getElementById(id);

const profileCard = $("profileCard");
const displayName = $("displayName");
const nameInput = $("nameInput");
const nameBtn = $("nameBtn");
const avatarInput = $("avatarInput");
const avatarImg = $("avatarImg");
const musicBtn = $("musicBtn");
const bgmAudio = $("bgmAudio");

const visitorChoicesEl = $("visitorChoices");
const customVisitorInput = $("customVisitorInput");

const messageEl = $("message");
const actionsEl = $("actions");
const customActionInput = $("customActionInput");
const customActionBtn = $("customActionBtn");

const countEl = $("count");
const timelineEl = $("timeline");
const effectLayer = $("effectLayer");

const VISITORS = [
  { name: "Bamboo", avatar: "./assets/avatars/bamboo.png" },
  { name: "Venice", avatar: "./assets/avatars/venice.png" },
  { name: "Nut", avatar: "./assets/avatars/nut.png" },
  { name: "Custom", avatar: "./assets/avatars/custom.png" }
];

const ACTIONS = [
  { key: "chocolate", label: "Send me chocolate", emoji: "🍫" },
  { key: "hotpot", label: "Invite me to hotpot", emoji: "🍲" },
  { key: "pat", label: "Pat my head", emoji: "🤲" },
  { key: "kiss", label: "Kiss my cheek", emoji: "😘" },
  { key: "smellyFeet", label: "Smell my stinky feet", emoji: "🦶" },
  { key: "tickle", label: "Tickle me", emoji: "😂" },
  { key: "splash", label: "Splash water on me", emoji: "💦" },
  { key: "dance", label: "Make me dance", emoji: "💃" }
];

const MESSAGES = {
  chocolate: "Aww, sweet! Thanks for the chocolate 🍫💖",
  hotpot: "Yay! Hotpot time 🍲✨",
  pat: "That head pat feels warm 🥹",
  kiss: "Cheek kiss received 💕",
  smellyFeet: "Eww... but funny 😂🦶",
  tickle: "Hahaha stop! I’m ticklish 😂",
  splash: "Ahh! I’m wet now 💦😆",
  dance: "Woohoo~ I’m dancing now! 💃✨",
  custom: "Custom action received ✨"
};

let selectedVisitor = VISITORS[0];
let bgmOn = false;

// ---------- init ----------
const savedName = localStorage.getItem("sweetName");
if (savedName && displayName) displayName.textContent = savedName;

const savedAvatar = localStorage.getItem("sweetAvatar");
if (savedAvatar && avatarImg) avatarImg.src = savedAvatar;

// ---------- helpers ----------
function safeText(s = "", max = 180) {
  return String(s).trim().slice(0, max);
}

function getVisitorName() {
  if (selectedVisitor.name !== "Custom") return selectedVisitor.name;
  return safeText(customVisitorInput?.value, 40) || "Guest";
}

function playClickSound(freq = 560) {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  const ctx = new Ctx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.value = freq;
  gain.gain.value = 0.001;
  osc.connect(gain);
  gain.connect(ctx.destination);

  const t = ctx.currentTime;
  gain.gain.exponentialRampToValueAtTime(0.08, t + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
  osc.start(t);
  osc.stop(t + 0.22);
}

function popEmoji(emoji, x, y) {
  if (!effectLayer) return;
  for (let i = 0; i < 6; i++) {
    const el = document.createElement("span");
    el.className = "pop";
    el.textContent = emoji;
    el.style.left = `${x + (Math.random() * 80 - 40)}px`;
    el.style.top = `${y + (Math.random() * 24 - 12)}px`;
    effectLayer.appendChild(el);
    setTimeout(() => el.remove(), 900);
  }
}

function happyAnim() {
  if (!profileCard) return;
  profileCard.classList.remove("happy");
  void profileCard.offsetWidth;
  profileCard.classList.add("happy");
}

function danceAnim() {
  if (!profileCard) return;
  profileCard.classList.remove("dance");
  void profileCard.offsetWidth;
  profileCard.classList.add("dance");
}

async function tryAutoPlayBgm() {
  if (!bgmAudio || !musicBtn) return;
  bgmOn = true;
  bgmAudio.volume = 0.35;
  bgmAudio.muted = true;
  try {
    await bgmAudio.play();
    musicBtn.textContent = "🎵 BGM: On (tap to unmute)";
  } catch {
    bgmOn = false;
    musicBtn.textContent = "🎵 BGM: Off";
    return;
  }

  const unmuteOnce = () => {
    bgmAudio.muted = false;
    musicBtn.textContent = "🎵 BGM: On";
  };
  window.addEventListener("pointerdown", unmuteOnce, { once: true });
}

// ---------- render ----------
function renderVisitors() {
  if (!visitorChoicesEl) return;
  visitorChoicesEl.innerHTML = "";
  VISITORS.forEach((v) => {
    const card = document.createElement("button");
    card.className = `visitor-card ${selectedVisitor.name === v.name ? "active" : ""}`;
    card.innerHTML = `
      <img src="${v.avatar}" alt="${v.name}" onerror="this.src='./assets/avatars/michelle.png'" />
      <div class="name">${v.name}</div>
    `;
    card.addEventListener("click", () => {
      selectedVisitor = v;
      renderVisitors();
    });
    visitorChoicesEl.appendChild(card);
  });
}

function renderActions() {
  if (!actionsEl) return;
  actionsEl.innerHTML = "";
  ACTIONS.forEach((a) => {
    const btn = document.createElement("button");
    btn.className = "action-btn";
    btn.innerHTML = `<span class="action-emoji">${a.emoji}</span><span>${a.label}</span>`;
    btn.addEventListener("click", (e) => {
      submitAction({
        key: a.key,
        label: a.label,
        emoji: a.emoji,
        btn: e.currentTarget
      });
    });
    actionsEl.appendChild(btn);
  });
}

function renderTimeline(events) {
  if (!countEl || !timelineEl) return;
  countEl.textContent = String(events.length);
  timelineEl.innerHTML = events.map((e) => `
    <li>
      <div><strong>${e.visitor}</strong> → ${e.action}</div>
      <div style="font-size:12px;color:#666">${new Date(e.createdAt).toLocaleString()}</div>
      <div style="margin-top:6px;color:#7c3aed">${e.reply ? `Michelle replied: ${e.reply}` : "No reply yet"}</div>
      <div class="reply-row">
        <input id="reply-${e.id}" placeholder="Reply as Michelle..." />
        <button data-reply-id="${e.id}">Reply</button>
      </div>
    </li>
  `).join("");

  timelineEl.querySelectorAll("[data-reply-id]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.replyId;
      const input = $(`reply-${id}`);
      const reply = safeText(input?.value, 300);
      if (!reply) return;
      await fetch(`/api/events/${id}/reply`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply })
      });
      await loadEvents();
    });
  });
}

// ---------- api ----------
async function loadEvents() {
  const res = await fetch("/api/events");
  const events = await res.json();
  renderTimeline(events);
}

async function createEvent(payload) {
  const res = await fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error("Create event failed");
  return res.json();
}

// ---------- submit ----------
async function submitAction({ key, label, emoji, btn, customText = "" }) {
  const visitor = getVisitorName();
  const avatar = selectedVisitor.avatar;
  const action = customText || label;

  await createEvent({ visitor, avatar, action });

  if (messageEl) {
    messageEl.textContent = customText ? `You chose: "${customText}" ✨` : (MESSAGES[key] || MESSAGES.custom);
  }

  playClickSound(500 + Math.random() * 220);

  if (btn) {
    const rect = btn.getBoundingClientRect();
    popEmoji(emoji || "✨", rect.left + rect.width / 2, rect.top + 8);
  }

  if (key === "dance") danceAnim();
  happyAnim();
  await loadEvents();
}

// ---------- events ----------
nameBtn?.addEventListener("click", () => {
  const val = safeText(nameInput?.value, 40);
  if (!val || !displayName || !nameInput) return;
  displayName.textContent = val;
  localStorage.setItem("sweetName", val);
  nameInput.value = "";
});

avatarInput?.addEventListener("change", () => {
  const file = avatarInput.files?.[0];
  if (!file || !avatarImg) return;
  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = String(reader.result);
    avatarImg.src = dataUrl;
    localStorage.setItem("sweetAvatar", dataUrl);
  };
  reader.readAsDataURL(file);
});

musicBtn?.addEventListener("click", async () => {
  if (!bgmAudio) return;
  bgmOn = !bgmOn;
  if (bgmOn) {
    try {
      bgmAudio.muted = false;
      bgmAudio.volume = 0.35;
      await bgmAudio.play();
      musicBtn.textContent = "🎵 BGM: On";
    } catch {
      bgmOn = false;
      musicBtn.textContent = "🎵 BGM: Off";
    }
  } else {
    bgmAudio.pause();
    musicBtn.textContent = "🎵 BGM: Off";
  }
});

customActionBtn?.addEventListener("click", async () => {
  const text = safeText(customActionInput?.value, 120);
  if (!text || !customActionInput) return;
  await submitAction({
    key: "custom",
    label: "Custom action",
    emoji: "✨",
    btn: customActionBtn,
    customText: text
  });
  customActionInput.value = "";
});

// ---------- start ----------
renderVisitors();
renderActions();
loadEvents();
tryAutoPlayBgm();