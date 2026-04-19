const $ = (id) => document.getElementById(id);

const profileCard = $("profileCard");
const avatarImg = $("avatarImg");
const messageEl = $("message");
const mainTitle = $("mainTitle");
const subtitle = $("subtitle");
const panelTitle = $("panelTitle");
const voicePanelTitle = $("voicePanelTitle");
const nameLabel = $("nameLabel");
const avatarLabel = $("avatarLabel");
const messageLabel = $("messageLabel");
const timelineTitle = $("timelineTitle");
const countLabel = $("countLabel");
const replyHint = $("replyHint");
const selectAllBtn = $("selectAllBtn");
const deleteSelectedBtn = $("deleteSelectedBtn");
const timelineCollapseBtn = $("timelineCollapseBtn");

const visitorNameInput = $("visitorNameInput");
const quickNamesEl = $("quickNames");
const visitorChoicesEl = $("visitorChoices");
const messageInput = $("messageInput");
const submitMessageBtn = $("submitMessageBtn");
const quickPhrasesEl = $("quickPhrases");
const actionsEl = $("actions");
const customActionInput = $("customActionInput");
const customActionBtn = $("customActionBtn");
const bgmAudio = $("bgmAudio");
const startVoiceBtn = $("startVoiceBtn");
const stopVoiceBtn = $("stopVoiceBtn");
const voiceHint = $("voiceHint");
const voicePreview = $("voicePreview");
const langEnBtn = $("langEnBtn");
const langZhBtn = $("langZhBtn");
const bgmToggleBtn = $("bgmToggleBtn");
const actionsTitle = $("actionsTitle");
const actionsSubtitle = $("actionsSubtitle");
const actionReplyBubble = $("actionReplyBubble");
const actionVideoWrap = $("actionVideoWrap");
const actionVideo = $("actionVideo");
const actionVideoCanvas = $("actionVideoCanvas");

const statusText = $("statusText");

const countEl = $("count");
const timelineEl = $("timeline");
const effectLayer = $("effectLayer");

const VISITORS = [
  { key: "bamboo", avatar: "./assets/avatars/bamboo.png" },
  { key: "venice", avatar: "./assets/avatars/venice.png" },
  { key: "nut", avatar: "./assets/avatars/nut.png" },
  { key: "custom", avatar: "./assets/avatars/custom.png" },
  { key: "avatar1", avatar: "./assets/avatars/avatar-1.png" },
  { key: "avatar2", avatar: "./assets/avatars/avatar-2.png" },
  { key: "avatar3", avatar: "./assets/avatars/avatar-3.png" },
  { key: "avatar4", avatar: "./assets/avatars/avatar-4.png" }
];

const QUICK_NAMES = ["Bamboo", "Venice", "Nut"];

const ACTIONS = [
  { key: "chocolate", emoji: "🍫" },
  { key: "hotpot", emoji: "🍲" },
  { key: "pat", emoji: "🤲" },
  { key: "kiss", emoji: "😘" },
  { key: "smellyFeet", emoji: "🦶" },
  { key: "tickle", emoji: "😂" },
  { key: "splash", emoji: "💦" },
  { key: "dance", emoji: "💃" }
];

const I18N = {
  en: {
    htmlLang: "en",
    pageTitle: "Leave a Message for Michelle",
    mainTitle: "Leave a Message for Michelle",
    subtitle: "Enter your name and message. Michelle can reply in the timeline.",
    bubbleWelcome: "Hi there. Leave a note and share your mood today.",
    panelTitle: "Guest Message Area",
    voicePanelTitle: "Voice Message Area",
    nameLabel: "Your Name",
    namePlaceholder: "e.g. Alex",
    avatarLabel: "Choose Avatar",
    messageLabel: "What do you want to tell Michelle?",
    messagePlaceholder: "Type your message here, or use voice input below...",
    startVoice: "🎙 Start Voice",
    stopVoice: "■ Stop",
    voiceHint: "You can type or use voice input",
    voiceListening: "Listening...",
    voiceNotSupported: "Your browser does not support voice input. Please type instead.",
    submitMessage: "Submit Message",
    actionsTitle: "Quick Interactions",
    actionsSubtitle: "Tap one action to interact with Michelle instantly.",
    actionBubbleIdle: "Pikachu is waiting for your interaction...",
    customActionPlaceholder: "Type your custom interaction...",
    customActionSubmit: "Submit Custom Action",
    timelineTitle: "Message Timeline",
    countLabel: "Messages:",
    replyHint: "Michelle can reply under each message below.",
    selectAll: "Select All",
    deselectAll: "Deselect All",
    deleteSelected: "Delete Selected",
    selectItem: "Select this message",
    showMoreMessages: (n) => `Show more (${n})`,
    collapseMessages: "Collapse",
    quickNamesHint: "Quick names:",
    quickPhrases: [
      "How was your day?",
      "Just dropping by to say hi.",
      "Thanks for always being kind.",
      "Want to hang out this weekend?",
      "Sending you a little flower."
    ],
    visitors: {
      bamboo: "Bamboo",
      venice: "Venice",
      nut: "Nut",
      custom: "Custom",
      avatar1: "Avatar 1",
      avatar2: "Avatar 2",
      avatar3: "Avatar 3",
      avatar4: "Avatar 4"
    },
    actions: {
      chocolate: "Send me chocolate",
      hotpot: "Invite me to hotpot",
      pat: "Pat my head",
      kiss: "Kiss my cheek",
      smellyFeet: "Smell my stinky feet",
      tickle: "Tickle me",
      splash: "Splash water on me",
      dance: "Make me dance"
    },
    actionReplies: {
      chocolate: [
        "That chocolate feels like a tiny hug. Thank you for being so sweet.",
        "Awww, chocolate from you? My mood just went straight to sunshine.",
        "You + chocolate = instant happiness. I am smiling already."
      ],
      hotpot: [
        "Hotpot time with you sounds perfect. Warm soup, warm heart.",
        "I can already smell the broth. Save me the best bite, okay?",
        "A hotpot date? That is cozy, cute, and absolutely approved."
      ],
      pat: [
        "That head pat is so gentle. I feel safe and cared for.",
        "Pat accepted. I am now officially in soft and happy mode.",
        "This little head pat made my whole day warmer."
      ],
      kiss: [
        "A cheek kiss from you? My heart just melted a little.",
        "Cheek kiss detected. Blush level: maximum.",
        "That kiss was sweet, gentle, and dangerously cute."
      ],
      smellyFeet: [
        "I am frowning... it is really stinky, but I like it.",
        "Phew, that smell is wild... but I cannot stop giggling.",
        "My nose is complaining, my heart is not."
      ],
      tickle: [
        "Hahaha, I cannot stop laughing. Your playfulness is adorable.",
        "Nooo, not the tickles. I surrender, but I am still smiling.",
        "You are too good at this. I am laughing and losing."
      ],
      splash: [
        "Splash. You got me good. Still, your energy makes me smile.",
        "Ahh, surprise splash. Cool, dramatic, and kind of fun.",
        "Okay, I am soaked... but this moment is actually super cute."
      ],
      dance: [
        "Watch me dance. This joy is all for you.",
        "You turned on my dance mode. Wiggle wiggle activated.",
        "Spinning with happy vibes just for you."
      ],
      custom: [
        "Your custom interaction reached me. I feel your love.",
        "Got it. Your idea is cute and I am totally into it.",
        "Custom move received. You always know how to make me smile."
      ]
    },
    replyPrefix: "Michelle replied: ",
    noReply: "Michelle has not replied yet",
    replyPlaceholder: "Reply as Michelle...",
    replyButton: "Reply",
    statusAvatarChosen: (name) => `Avatar selected: ${name}`,
    statusQuickNameChosen: (name) => `Name selected: ${name}`,
    statusReplyPosted: "Reply posted.",
    statusReplyFailed: "Failed to post reply. Please try again.",
    statusLoadFailed: "Failed to load timeline.",
    statusVoiceStarted: "Voice input started.",
    statusVoiceFailed: "Voice recognition failed.",
    statusVoiceRecording: "Voice recording started.",
    statusVoiceRecorded: "Voice note captured and added to message.",
    statusVoicePermissionDenied: "Microphone permission denied.",
    statusVoiceRecordFailed: "Voice recording failed.",
    statusVoiceNeedSecureContext: "Voice recording requires HTTPS or localhost.",
    statusVoiceNeedMediaDevices: "Your browser does not support microphone devices API.",
    statusVoiceNeedRecorder: "Your browser does not support MediaRecorder.",
    statusDeleteOneFailed: "Failed to delete message.",
    statusDeleteDone: (n) => `${n} message(s) deleted.`,
    statusDeleteNone: "Please select at least one message.",
    statusNeedMessage: "Please type your message first.",
    statusSubmitFailed: "Submit failed. Please try again.",
    statusSubmitSuccess: (name) => `Message sent. Thank you, ${name}.`,
    statusNeedCustomAction: "Please type your custom interaction first.",
    statusActionSubmitSuccess: (name) => `Interaction sent by ${name}.`,
    bubbleReceived: (name, msg) => `${name}, I received your message: ${msg}`,
    statusBgmOn: "Music is now playing.",
    statusBgmMuted: "Music autoplayed in muted mode. Tap anywhere to enable sound.",
    statusBgmFailed: "Music could not autoplay in this browser.",
    bgmOnLabel: "BGM: On",
    bgmOffLabel: "BGM: Off",
    speechLang: "en-US",
    dateLocale: "en-US"
  },
  zh: {
    htmlLang: "zh-CN",
    pageTitle: "给 Michelle 留言",
    mainTitle: "给 Michelle 留言",
    subtitle: "输入你的昵称和想说的话，Michelle 会在时间线里回复你。",
    bubbleWelcome: "你好呀，欢迎来留言。说点今天的心情也可以。",
    panelTitle: "游客留言区",
    voicePanelTitle: "语音留言版块",
    nameLabel: "你的名字",
    namePlaceholder: "例如：小明",
    avatarLabel: "选择头像",
    messageLabel: "想对 Michelle 说的话",
    messagePlaceholder: "在这里输入你的留言，也可以点下方语音按钮说出来...",
    startVoice: "🎙 开始语音",
    stopVoice: "■ 停止",
    voiceHint: "可直接打字，也可用语音输入",
    voiceListening: "正在听你说话...",
    voiceNotSupported: "当前浏览器不支持语音输入，请直接打字。",
    submitMessage: "提交留言",
    actionsTitle: "互动动作",
    actionsSubtitle: "点一下就能和 Michelle 互动。",
    actionBubbleIdle: "皮卡丘准备好了，快来互动吧...",
    customActionPlaceholder: "输入你自定义的互动内容...",
    customActionSubmit: "提交自定义互动",
    timelineTitle: "留言时间线",
    countLabel: "当前留言数：",
    replyHint: "Michelle 可以在每条留言下方进行回复。",
    selectAll: "全选",
    deselectAll: "取消全选",
    deleteSelected: "删除已选",
    selectItem: "选择这条留言",
    showMoreMessages: (n) => `展开更多（${n}）`,
    collapseMessages: "收起",
    quickNamesHint: "快捷名字：",
    quickPhrases: [
      "今天过得怎么样？",
      "我来给你打个招呼。",
      "谢谢你一直陪伴我。",
      "周末一起吃饭吗？",
      "给你一朵小红花。"
    ],
    visitors: {
      bamboo: "小竹",
      venice: "Venice",
      nut: "Nut",
      custom: "自定义",
      avatar1: "头像1",
      avatar2: "头像2",
      avatar3: "头像3",
      avatar4: "头像4"
    },
    actions: {
      chocolate: "送我巧克力",
      hotpot: "请我吃火锅",
      pat: "摸摸我的头",
      kiss: "亲亲我的脸",
      smellyFeet: "闻闻我的臭脚",
      tickle: "挠我痒痒",
      splash: "朝我泼水",
      dance: "让我跳舞"
    },
    actionReplies: {
      chocolate: [
        "这块巧克力像一个小拥抱，你真的好暖。",
        "你送的巧克力太加分了，我的心情直接甜甜的。",
        "这一口甜到心里，谢谢你把温柔给我。"
      ],
      hotpot: [
        "火锅邀请太幸福了，连心都一起热起来。",
        "好耶，火锅局启动。记得把最好吃的留给我。",
        "一想到和你吃火锅，我就已经开始开心了。"
      ],
      pat: [
        "这个摸头好温柔，我一下就安心了。",
        "摸头收到，今天的烦恼都轻一点了。",
        "你这一下太治愈了，我整个人都软乎乎。"
      ],
      kiss: [
        "这一下亲亲太甜了，我有点脸红。",
        "亲亲命中，我的脸颊温度直线上升。",
        "这份爱意我稳稳收下，还想再来一个。"
      ],
      smellyFeet: [
        "我都皱眉了...真的好臭呀，不过我喜欢。",
        "呜哇，这味道好冲，但我还是忍不住想笑。",
        "鼻子在抗议，心里却觉得你可爱。"
      ],
      tickle: [
        "哈哈哈停不下来，你太会逗我笑了。",
        "不行不行，我真的要笑到求饶了。",
        "你这挠痒技术太强，我彻底输给快乐了。"
      ],
      splash: [
        "哎呀被你泼到了，但你的活力真的很可爱。",
        "这一泼好突然，我人都清醒了。",
        "被你泼水也像在玩闹，心情反而更亮了。"
      ],
      dance: [
        "看我跳起来，这份快乐都送给你。",
        "舞蹈模式开启，今天的可爱值满格。",
        "跟着你的节奏，我想一直跳下去。"
      ],
      custom: [
        "收到你的自定义互动，我感受到你的爱意了。",
        "这个点子好可爱，我已经开始心动了。",
        "你的每个小创意都让我觉得被珍惜。"
      ]
    },
    replyPrefix: "Michelle 回复：",
    noReply: "Michelle 暂未回复",
    replyPlaceholder: "Michelle 回复这条留言...",
    replyButton: "回复",
    statusAvatarChosen: (name) => `已选择头像：${name}`,
    statusQuickNameChosen: (name) => `已选择名字：${name}`,
    statusReplyPosted: "回复已发布。",
    statusReplyFailed: "回复失败，请稍后再试。",
    statusLoadFailed: "留言加载失败。",
    statusVoiceStarted: "语音输入已开始。",
    statusVoiceFailed: "语音识别失败。",
    statusVoiceRecording: "开始录音了。",
    statusVoiceRecorded: "语音已录制并写入留言框。",
    statusVoicePermissionDenied: "麦克风权限被拒绝。",
    statusVoiceRecordFailed: "语音录制失败。",
    statusVoiceNeedSecureContext: "语音录制需要 HTTPS 或 localhost 环境。",
    statusVoiceNeedMediaDevices: "当前浏览器不支持麦克风设备接口。",
    statusVoiceNeedRecorder: "当前浏览器不支持 MediaRecorder 录音。",
    statusDeleteOneFailed: "删除留言失败。",
    statusDeleteDone: (n) => `已删除 ${n} 条留言。`,
    statusDeleteNone: "请先勾选至少一条留言。",
    statusNeedMessage: "请先输入你想说的话。",
    statusSubmitFailed: "提交失败，请重试。",
    statusSubmitSuccess: (name) => `留言成功，感谢你 ${name}。`,
    statusNeedCustomAction: "请先输入自定义互动内容。",
    statusActionSubmitSuccess: (name) => `互动成功，来自 ${name}。`,
    bubbleReceived: (name, msg) => `${name} 的留言我收到了：${msg}`,
    statusBgmOn: "音乐已开始播放。",
    statusBgmMuted: "音乐已自动播放（静音）。点击页面任意位置可恢复声音。",
    statusBgmFailed: "当前浏览器未能自动播放音乐。",
    bgmOnLabel: "音乐：开",
    bgmOffLabel: "音乐：关",
    speechLang: "zh-CN",
    dateLocale: "zh-CN"
  }
};

let selectedVisitor = VISITORS[0];
let recognition;
let listening = false;
let currentLang = localStorage.getItem("uiLang") === "zh" ? "zh" : "en";
let voiceSupported = false;
let selectedQuickName = "";
let bgmOn = false;
let typingTimer;
let actionTypingTimer;
let actionVideoHideTimer;
let actionVideoRaf;
let actionVideoCtx;
let mediaRecorder;
let mediaChunks = [];
let mediaStream;
let voicePreviewUrl = "";
let recognizing = false;
let resumeBgmAfterRecording = false;
let selectedEventIds = new Set();
let timelineExpanded = false;
let timelineEventsCache = [];
const TIMELINE_COLLAPSE_THRESHOLD = 10;

const ACTION_ANIM_CLASSES = [
  "anim-chocolate",
  "anim-hotpot",
  "anim-pat",
  "anim-kiss",
  "anim-smellyFeet",
  "anim-tickle",
  "anim-splash",
  "anim-dance"
];

// ---------- helpers ----------
function safeText(s = "", max = 180) {
  return String(s).trim().slice(0, max);
}

function t() {
  return I18N[currentLang];
}

function getVisitorDisplayName(visitor) {
  return t().visitors[visitor.key] || "Guest";
}

function updateBgmToggleText() {
  if (!bgmToggleBtn) return;
  bgmToggleBtn.textContent = bgmOn ? t().bgmOnLabel : t().bgmOffLabel;
}

function applyLanguage(lang, persist = true) {
  currentLang = lang === "zh" ? "zh" : "en";
  if (persist) localStorage.setItem("uiLang", currentLang);

  const langText = t();
  document.documentElement.lang = langText.htmlLang;
  document.title = langText.pageTitle;

  if (mainTitle) mainTitle.textContent = langText.mainTitle;
  if (subtitle) subtitle.textContent = langText.subtitle;
  if (messageEl) messageEl.textContent = langText.bubbleWelcome;
  if (panelTitle) panelTitle.textContent = langText.panelTitle;
  if (voicePanelTitle) voicePanelTitle.textContent = langText.voicePanelTitle;
  if (nameLabel) nameLabel.textContent = langText.nameLabel;
  if (visitorNameInput) visitorNameInput.placeholder = langText.namePlaceholder;
  if (avatarLabel) avatarLabel.textContent = langText.avatarLabel;
  if (messageLabel) messageLabel.textContent = langText.messageLabel;
  if (messageInput) messageInput.placeholder = langText.messagePlaceholder;
  if (startVoiceBtn) startVoiceBtn.textContent = langText.startVoice;
  if (stopVoiceBtn) stopVoiceBtn.textContent = langText.stopVoice;
  if (submitMessageBtn) submitMessageBtn.textContent = langText.submitMessage;
  if (actionsTitle) actionsTitle.textContent = langText.actionsTitle;
  if (actionsSubtitle) actionsSubtitle.textContent = langText.actionsSubtitle;
  if (actionReplyBubble) actionReplyBubble.textContent = langText.actionBubbleIdle;
  if (customActionInput) customActionInput.placeholder = langText.customActionPlaceholder;
  if (customActionBtn) customActionBtn.textContent = langText.customActionSubmit;
  if (timelineTitle) timelineTitle.textContent = langText.timelineTitle;
  if (countLabel) countLabel.textContent = langText.countLabel;
  if (replyHint) replyHint.textContent = langText.replyHint;
  if (selectAllBtn) selectAllBtn.textContent = langText.selectAll;
  if (deleteSelectedBtn) deleteSelectedBtn.textContent = langText.deleteSelected;
  updateTimelineCollapseControl();

  if (voiceHint) {
    if (!voiceSupported) {
      voiceHint.textContent = langText.voiceNotSupported;
    } else if (listening) {
      voiceHint.textContent = langText.voiceListening;
    } else {
      voiceHint.textContent = langText.voiceHint;
    }
  }

  langEnBtn?.classList.toggle("active", currentLang === "en");
  langZhBtn?.classList.toggle("active", currentLang === "zh");
  updateBgmToggleText();

  renderVisitors();
  renderQuickNames();
  renderQuickPhrases();
  renderActions();
  loadEvents();
}

function escapeHtml(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setStatus(text = "", isError = false) {
  if (!statusText) return;
  statusText.textContent = text;
  statusText.classList.toggle("error", isError);
}

function resetMessageStyle() {
  if (!messageEl) return;
  messageEl.classList.remove(
    "message-reaction",
    "rx-chocolate",
    "rx-hotpot",
    "rx-pat",
    "rx-kiss",
    "rx-smellyFeet",
    "rx-tickle",
    "rx-splash",
    "rx-dance",
    "rx-custom"
  );
}

function applyReactionStyle(key = "custom") {
  if (!messageEl) return;
  resetMessageStyle();
  void messageEl.offsetWidth;
  messageEl.classList.add("message-reaction", `rx-${key}`);
}

function resetActionReplyStyle() {
  if (!actionReplyBubble) return;
  actionReplyBubble.classList.remove(
    "arx-chocolate",
    "arx-hotpot",
    "arx-pat",
    "arx-kiss",
    "arx-smellyFeet",
    "arx-tickle",
    "arx-splash",
    "arx-dance",
    "arx-custom"
  );
}

function applyActionReplyStyle(key = "custom") {
  if (!actionReplyBubble) return;
  resetActionReplyStyle();
  void actionReplyBubble.offsetWidth;
  actionReplyBubble.classList.add(`arx-${key}`);
}

function typeInMessage(text = "", speed = 58) {
  if (!messageEl) return;
  if (typingTimer) window.clearTimeout(typingTimer);

  const full = String(text);
  let i = 0;
  messageEl.textContent = "";
  messageEl.classList.add("typing");

  const step = () => {
    i += 1;
    messageEl.textContent = full.slice(0, i);
    if (i < full.length) {
      const ch = full[i - 1] || "";
      const isPauseChar = /[,.!?，。！？]/.test(ch);
      const delay = isPauseChar ? speed * 2.2 : speed;
      typingTimer = window.setTimeout(step, delay);
      return;
    }
    messageEl.classList.remove("typing");
  };

  step();
}

function typeInActionReply(text = "", speed = 58) {
  if (!actionReplyBubble) return;
  if (actionTypingTimer) window.clearTimeout(actionTypingTimer);

  const full = String(text);
  let i = 0;
  actionReplyBubble.textContent = "";
  actionReplyBubble.classList.add("typing");

  const step = () => {
    i += 1;
    actionReplyBubble.textContent = full.slice(0, i);
    if (i < full.length) {
      const ch = full[i - 1] || "";
      const isPauseChar = /[,.!?，。！？]/.test(ch);
      const delay = isPauseChar ? speed * 2.2 : speed;
      actionTypingTimer = window.setTimeout(step, delay);
      return;
    }
    actionReplyBubble.classList.remove("typing");
  };

  step();
}

function pickActionReply(key) {
  const fallback = t().actionReplies.custom;
  const candidates = t().actionReplies[key] || fallback;
  if (Array.isArray(candidates) && candidates.length > 0) {
    const idx = Math.floor(Math.random() * candidates.length);
    return candidates[idx];
  }
  return String(candidates || "");
}

function getVisitorName() {
  const typedName = safeText(visitorNameInput?.value, 40);
  if (typedName) return typedName;
  return "Guest";
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

// ---------- render ----------
function renderVisitors() {
  if (!visitorChoicesEl) return;
  visitorChoicesEl.innerHTML = "";
  VISITORS.forEach((v) => {
    const card = document.createElement("button");
    card.className = `visitor-card ${selectedVisitor.key === v.key ? "active" : ""}`;
    const displayName = getVisitorDisplayName(v);
    card.innerHTML = `
      <img src="${v.avatar}" alt="${displayName}" onerror="this.src='./assets/avatars/michelle.png'" />
    `;
    card.addEventListener("click", () => {
      selectedVisitor = v;
      renderVisitors();
      setStatus(t().statusAvatarChosen(displayName));
    });
    visitorChoicesEl.appendChild(card);
  });
}

function renderQuickNames() {
  if (!quickNamesEl) return;
  quickNamesEl.innerHTML = "";

  const hint = document.createElement("span");
  hint.className = "quick-names-hint";
  hint.textContent = t().quickNamesHint;
  quickNamesEl.appendChild(hint);

  QUICK_NAMES.forEach((name) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `chip name-chip ${selectedQuickName === name ? "active" : ""}`;
    btn.textContent = name;
    btn.addEventListener("click", () => {
      if (!visitorNameInput) return;
      selectedQuickName = name;
      visitorNameInput.value = name;
      visitorNameInput.focus();
      renderQuickNames();
      setStatus(t().statusQuickNameChosen(name));
    });
    quickNamesEl.appendChild(btn);
  });
}

function renderQuickPhrases() {
  if (!quickPhrasesEl) return;
  quickPhrasesEl.innerHTML = "";
  t().quickPhrases.forEach((phrase) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.textContent = phrase;
    btn.addEventListener("click", () => {
      if (!messageInput) return;
      messageInput.value = phrase;
      messageInput.focus();
    });
    quickPhrasesEl.appendChild(btn);
  });
}

function renderActions() {
  if (!actionsEl) return;
  actionsEl.innerHTML = "";
  ACTIONS.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "action-btn";
    btn.innerHTML = `<span class="action-emoji">${item.emoji}</span><span>${t().actions[item.key]}</span>`;
    btn.addEventListener("click", (e) => {
      submitPresetAction({
        key: item.key,
        emoji: item.emoji,
        btn: e.currentTarget
      });
    });
    actionsEl.appendChild(btn);
  });
}

function eventTimestamp(event) {
  const raw = event?.createdAt;
  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  if (typeof raw === "string") {
    const n = Number(raw);
    if (Number.isFinite(n)) return n;
    const tValue = Date.parse(raw);
    if (Number.isFinite(tValue)) return tValue;
  }
  return 0;
}

function sortEventsNewestFirst(events) {
  return [...(Array.isArray(events) ? events : [])].sort((a, b) => eventTimestamp(b) - eventTimestamp(a));
}

function getVisibleTimelineEvents(events = timelineEventsCache) {
  const list = Array.isArray(events) ? events : [];
  if (timelineExpanded || list.length <= TIMELINE_COLLAPSE_THRESHOLD) {
    return list;
  }
  return list.slice(0, TIMELINE_COLLAPSE_THRESHOLD);
}

function updateTimelineCollapseControl(events = timelineEventsCache) {
  if (!timelineCollapseBtn) return;
  const total = Array.isArray(events) ? events.length : 0;
  if (total <= TIMELINE_COLLAPSE_THRESHOLD) {
    timelineCollapseBtn.hidden = true;
    timelineCollapseBtn.disabled = true;
    timelineCollapseBtn.textContent = "";
    return;
  }

  timelineCollapseBtn.hidden = false;
  timelineCollapseBtn.disabled = false;
  const hiddenCount = Math.max(0, total - TIMELINE_COLLAPSE_THRESHOLD);
  timelineCollapseBtn.textContent = timelineExpanded ? t().collapseMessages : t().showMoreMessages(hiddenCount);
}

function renderTimeline(events) {
  if (!countEl || !timelineEl) return;
  timelineEventsCache = sortEventsNewestFirst(events);
  const visibleEvents = getVisibleTimelineEvents(timelineEventsCache);
  countEl.textContent = String(timelineEventsCache.length);
  const langText = t();

  const validIds = new Set(visibleEvents.map((e) => e.id));
  selectedEventIds = new Set(Array.from(selectedEventIds).filter((id) => validIds.has(id)));

  timelineEl.innerHTML = visibleEvents.map((e) => `
    <li>
      <div class="timeline-head">
        <img class="timeline-avatar" src="${escapeHtml(e.avatar || "./assets/avatars/michelle.png")}" alt="avatar" onerror="this.src='./assets/avatars/michelle.png'" />
        <div>
          <div><strong>${escapeHtml(e.visitor)}</strong> → ${escapeHtml(e.action)}</div>
          <div class="timeline-meta">${new Date(e.createdAt).toLocaleString(langText.dateLocale)}</div>
        </div>
      </div>
      <div class="timeline-reply">${e.reply ? `${langText.replyPrefix}${escapeHtml(e.reply)}` : langText.noReply}</div>
      <div class="reply-row">
        <input id="reply-${e.id}" placeholder="${langText.replyPlaceholder}" />
        <button data-reply-id="${e.id}">${langText.replyButton}</button>
      </div>
      <div class="timeline-select-row">
        <input type="checkbox" id="pick-${e.id}" data-pick-id="${e.id}" ${selectedEventIds.has(e.id) ? "checked" : ""} />
        <label for="pick-${e.id}">${langText.selectItem}</label>
        <button data-delete-one-id="${e.id}" class="danger-btn" type="button">×</button>
      </div>
    </li>
  `).join("");

  timelineEl.querySelectorAll("[data-reply-id]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.replyId;
      const input = $(`reply-${id}`);
      const reply = safeText(input?.value, 300);
      if (!reply) return;
      try {
        const res = await fetch(`/api/events/${id}/reply`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reply })
        });
        if (!res.ok) throw new Error("reply failed");
        setStatus(t().statusReplyPosted);
        await loadEvents();
      } catch {
        setStatus(t().statusReplyFailed, true);
      }
    });

    const input = $(`reply-${btn.dataset.replyId}`);
    input?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") btn.click();
    });
  });

  timelineEl.querySelectorAll("[data-pick-id]").forEach((el) => {
    el.addEventListener("change", () => {
      const id = el.dataset.pickId;
      if (!id) return;
      if (el.checked) selectedEventIds.add(id);
      else selectedEventIds.delete(id);
      if (selectAllBtn) {
        const allChecked = visibleEvents.length > 0 && visibleEvents.every((evt) => selectedEventIds.has(evt.id));
        selectAllBtn.textContent = allChecked ? langText.deselectAll : langText.selectAll;
      }
    });
  });

  timelineEl.querySelectorAll("[data-delete-one-id]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.dataset.deleteOneId;
      if (!id) return;
      try {
        const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("delete one failed");
        selectedEventIds.delete(id);
        await loadEvents();
      } catch {
        setStatus(langText.statusDeleteOneFailed, true);
      }
    });
  });

  if (selectAllBtn) {
    const allChecked = visibleEvents.length > 0 && visibleEvents.every((evt) => selectedEventIds.has(evt.id));
    selectAllBtn.textContent = allChecked ? langText.deselectAll : langText.selectAll;
  }

  updateTimelineCollapseControl(timelineEventsCache);
}

// ---------- api ----------
async function loadEvents() {
  try {
    const res = await fetch(`/api/events?ts=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error("load failed");
    const events = await res.json();
    renderTimeline(sortEventsNewestFirst(events));
  } catch {
    setStatus(t().statusLoadFailed, true);
  }
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

async function deleteEventsBatch(ids) {
  const res = await fetch("/api/events/batch", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids })
  });
  if (!res.ok) throw new Error("delete batch failed");
  return res.json();
}

async function deleteEventsOneByOne(ids) {
  let removed = 0;
  await Promise.all(ids.map(async (id) => {
    try {
      const res = await fetch(`/api/events/${id}`, { method: "DELETE" });
      if (res.ok) removed += 1;
    } catch {
      // ignore per-item failures, final removed count reflects successful deletions
    }
  }));
  return { removed };
}

async function tryAutoPlayBgm() {
  if (!bgmAudio) return;
  bgmAudio.volume = 0.35;

  try {
    bgmAudio.muted = false;
    await bgmAudio.play();
    bgmOn = true;
    updateBgmToggleText();
    setStatus(t().statusBgmOn);
    return;
  } catch {
    // Continue with muted autoplay fallback for stricter autoplay policies.
  }

  try {
    bgmAudio.muted = true;
    await bgmAudio.play();
    bgmOn = true;
    updateBgmToggleText();
    setStatus(t().statusBgmMuted);

    const unmuteOnce = () => {
      if (!bgmAudio) return;
      bgmAudio.muted = false;
      bgmOn = true;
      updateBgmToggleText();
      setStatus(t().statusBgmOn);
    };

    window.addEventListener("pointerdown", unmuteOnce, { once: true });
  } catch {
    bgmOn = false;
    updateBgmToggleText();
    setStatus(t().statusBgmFailed, true);
  }
}

function clearActionAnims() {
  if (!profileCard) return;
  ACTION_ANIM_CLASSES.forEach((c) => profileCard.classList.remove(c));
}

function runActionAnimation(key, emoji, btn) {
  if (!profileCard) return;
  clearActionAnims();
  void profileCard.offsetWidth;

  const className = `anim-${key}`;
  if (ACTION_ANIM_CLASSES.includes(className)) {
    profileCard.classList.add(className);
  }

  if (btn) {
    btn.classList.remove("action-hit");
    void btn.offsetWidth;
    btn.classList.add("action-hit");

    const rect = btn.getBoundingClientRect();
    popEmoji(emoji || "✨", rect.left + rect.width / 2, rect.top + 8);
  }
}

async function playActionVideo() {
  if (!actionVideoWrap || !actionVideo) return;

  if (actionVideoHideTimer) {
    window.clearTimeout(actionVideoHideTimer);
  }

  actionVideo.muted = true;
  actionVideo.volume = 0;
  actionVideo.currentTime = 0;

  try {
    await actionVideo.play();
    actionVideoWrap.classList.add("active");
    startActionVideoKeying();
  } catch {
    return;
  }

  const hideSoon = () => {
    stopActionVideoKeying();
    actionVideoHideTimer = window.setTimeout(() => {
      actionVideoWrap.classList.remove("active");
    }, 420);
  };

  actionVideo.onended = hideSoon;
  actionVideo.onpause = hideSoon;
}

function stopActionVideoKeying() {
  if (actionVideoRaf) {
    window.cancelAnimationFrame(actionVideoRaf);
    actionVideoRaf = undefined;
  }
}

function renderActionVideoFrame() {
  if (!actionVideo || !actionVideoCanvas || !actionVideoCtx) return;

  const vw = actionVideo.videoWidth;
  const vh = actionVideo.videoHeight;
  if (!vw || !vh) {
    actionVideoRaf = window.requestAnimationFrame(renderActionVideoFrame);
    return;
  }

  if (actionVideoCanvas.width !== vw || actionVideoCanvas.height !== vh) {
    actionVideoCanvas.width = vw;
    actionVideoCanvas.height = vh;
  }

  const cropX = Math.floor(vw * 0.08);
  const cropY = Math.floor(vh * 0.08);
  const cropW = vw - cropX * 2;
  const cropH = vh - cropY * 2;

  actionVideoCtx.clearRect(0, 0, vw, vh);
  actionVideoCtx.drawImage(actionVideo, cropX, cropY, cropW, cropH, 0, 0, vw, vh);

  const frame = actionVideoCtx.getImageData(0, 0, vw, vh);
  const d = frame.data;

  for (let i = 0; i < d.length; i += 4) {
    const r = d[i];
    const g = d[i + 1];
    const b = d[i + 2];
    const a = d[i + 3];

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Remove near-black matte while keeping saturated dark details.
    if (luma < 30 && sat < 0.5) {
      d[i + 3] = 0;
    } else if (luma < 74 && sat < 0.58) {
      const blend = (luma - 30) / 44;
      d[i + 3] = Math.min(a, Math.max(0, Math.round(blend * 255)));
    }
  }

  actionVideoCtx.putImageData(frame, 0, 0);

  if (!actionVideo.paused && !actionVideo.ended) {
    actionVideoRaf = window.requestAnimationFrame(renderActionVideoFrame);
  }
}

function startActionVideoKeying() {
  if (!actionVideo || !actionVideoCanvas) return;
  if (!actionVideoCtx) {
    actionVideoCtx = actionVideoCanvas.getContext("2d", { willReadFrequently: true });
  }
  if (!actionVideoCtx) return;
  stopActionVideoKeying();
  actionVideoRaf = window.requestAnimationFrame(renderActionVideoFrame);
}

function setupVoiceInput() {
  const hasMediaDevices = !!navigator.mediaDevices?.getUserMedia;
  const hasMediaRecorder = typeof window.MediaRecorder !== "undefined";
  const isSafeOrigin = window.isSecureContext || location.hostname === "localhost" || location.hostname === "127.0.0.1";
  const canRecord = hasMediaDevices && hasMediaRecorder && isSafeOrigin;

  const syncListeningState = () => {
    const recording = !!mediaRecorder && mediaRecorder.state !== "inactive";
    listening = recording || recognizing;
    if (voiceHint) voiceHint.textContent = listening ? t().voiceListening : t().voiceHint;
  };

  const cleanupMediaStream = () => {
    mediaStream?.getTracks().forEach((track) => track.stop());
    mediaStream = undefined;
  };

  const pauseBgmForRecording = () => {
    if (!bgmAudio) return;
    resumeBgmAfterRecording = !bgmAudio.paused;
    if (resumeBgmAfterRecording) {
      bgmAudio.pause();
    }
  };

  const resumeBgmIfNeeded = async () => {
    if (!bgmAudio || !resumeBgmAfterRecording) return;
    resumeBgmAfterRecording = false;
    try {
      await bgmAudio.play();
    } catch {
      // Autoplay policies may block immediate resume; keep silent failure.
    }
  };

  const startRecorder = async () => {
    if (!canRecord || (mediaRecorder && mediaRecorder.state !== "inactive")) return false;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStream = stream;
      mediaChunks = [];

      const mimeCandidates = [
        "audio/webm;codecs=opus",
        "audio/webm",
        "audio/mp4",
        "audio/ogg;codecs=opus"
      ];
      const selectedMime = mimeCandidates.find((m) => window.MediaRecorder.isTypeSupported?.(m));
      mediaRecorder = selectedMime ? new MediaRecorder(stream, { mimeType: selectedMime }) : new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (evt) => {
        if (evt.data && evt.data.size > 0) mediaChunks.push(evt.data);
      };

      mediaRecorder.onstop = () => {
        if (!mediaChunks.length) {
          mediaRecorder = undefined;
          cleanupMediaStream();
          syncListeningState();
          resumeBgmIfNeeded();
          setStatus(t().statusVoiceRecordFailed, true);
          return;
        }

        const blob = new Blob(mediaChunks, { type: mediaRecorder?.mimeType || "audio/webm" });
        const secs = Math.max(1, Math.round(blob.size / 16000));

        if (voicePreview) {
          if (voicePreviewUrl) URL.revokeObjectURL(voicePreviewUrl);
          voicePreviewUrl = URL.createObjectURL(blob);
          voicePreview.src = voicePreviewUrl;
          voicePreview.hidden = false;
        }

        if (messageInput) {
          const note = currentLang === "zh" ? `[语音留言 ${secs}s]` : `[Voice note ${secs}s]`;
          messageInput.value = safeText(`${messageInput.value} ${note}`.trim(), 120);
        }

        mediaRecorder = undefined;
        cleanupMediaStream();
        syncListeningState();
        resumeBgmIfNeeded();
        setStatus(t().statusVoiceRecorded);
      };

      pauseBgmForRecording();
      mediaRecorder.start(200);
      syncListeningState();
      setStatus(t().statusVoiceRecording);
      return true;
    } catch (err) {
      const denied = err && typeof err === "object" && (err.name === "NotAllowedError" || err.name === "SecurityError");
      setStatus(denied ? t().statusVoicePermissionDenied : t().statusVoiceRecordFailed, true);
      cleanupMediaStream();
      resumeBgmIfNeeded();
      syncListeningState();
      return false;
    }
  };

  if (!canRecord) {
    voiceSupported = false;
    if (voiceHint) voiceHint.textContent = t().voiceNotSupported;

    if (!isSafeOrigin) {
      setStatus(t().statusVoiceNeedSecureContext, true);
    } else if (!hasMediaDevices) {
      setStatus(t().statusVoiceNeedMediaDevices, true);
    } else if (!hasMediaRecorder) {
      setStatus(t().statusVoiceNeedRecorder, true);
    } else {
      setStatus(t().voiceNotSupported, true);
    }

    startVoiceBtn?.setAttribute("disabled", "true");
    stopVoiceBtn?.setAttribute("disabled", "true");
    return;
  }

  voiceSupported = true;
  startVoiceBtn?.removeAttribute("disabled");
  stopVoiceBtn?.removeAttribute("disabled");

  startVoiceBtn?.addEventListener("click", async () => {
    if (listening) return;

    const recordingStarted = await startRecorder();
    if (!recordingStarted) {
      setStatus(t().voiceNotSupported, true);
    }
  });

  stopVoiceBtn?.addEventListener("click", () => {
    if (!listening) return;

    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
    } else {
      resumeBgmIfNeeded();
    }

    syncListeningState();
  });
}

// ---------- submit ----------
async function submitMessage() {
  const visitor = getVisitorName();
  const avatar = selectedVisitor.avatar;
  const action = safeText(messageInput?.value, 120);

  if (!action) {
    setStatus(t().statusNeedMessage, true);
    messageInput?.focus();
    return;
  }

  try {
    await createEvent({ visitor, avatar, action });
  } catch {
    setStatus(t().statusSubmitFailed, true);
    return;
  }

  if (messageEl) {
    typeInMessage(t().bubbleReceived(visitor, action));
  }
  resetMessageStyle();

  setStatus(t().statusSubmitSuccess(visitor));

  playClickSound(500 + Math.random() * 220);
  if (submitMessageBtn) {
    const rect = submitMessageBtn.getBoundingClientRect();
    popEmoji("💬", rect.left + rect.width / 2, rect.top + 8);
  }

  happyAnim();
  if (messageInput) messageInput.value = "";
  await loadEvents();
}

async function submitPresetAction({ key, emoji, btn, customText = "" }) {
  const visitor = getVisitorName();
  const avatar = selectedVisitor.avatar;
  const action = customText || t().actions[key] || "";

  if (!action) {
    setStatus(t().statusNeedCustomAction, true);
    return;
  }

  try {
    await createEvent({ visitor, avatar, action });
  } catch {
    setStatus(t().statusSubmitFailed, true);
    return;
  }

  typeInActionReply(pickActionReply(customText ? "custom" : key), 58);
  applyActionReplyStyle(customText ? "custom" : key);

  setStatus(t().statusActionSubmitSuccess(visitor));

  playClickSound(500 + Math.random() * 220);
  playActionVideo();
  runActionAnimation(key, emoji, btn);

  happyAnim();
  await loadEvents();
}

// ---------- events ----------
submitMessageBtn?.addEventListener("click", submitMessage);

messageInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
    submitMessageBtn?.click();
  }
});

visitorNameInput?.addEventListener("input", () => {
  const raw = safeText(visitorNameInput.value, 40);
  selectedQuickName = QUICK_NAMES.includes(raw) ? raw : "";
  renderQuickNames();
});

customActionBtn?.addEventListener("click", async () => {
  const customText = safeText(customActionInput?.value, 120);
  if (!customText || !customActionInput) {
    setStatus(t().statusNeedCustomAction, true);
    return;
  }

  await submitPresetAction({
    key: "custom",
    emoji: "✨",
    btn: customActionBtn,
    customText
  });
  customActionInput.value = "";
});

customActionInput?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") customActionBtn?.click();
});

timelineCollapseBtn?.addEventListener("click", () => {
  timelineExpanded = !timelineExpanded;
  selectedEventIds.clear();
  renderTimeline(timelineEventsCache);
});

selectAllBtn?.addEventListener("click", async () => {
  try {
    const res = await fetch(`/api/events?ts=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error("load failed");
    const events = sortEventsNewestFirst(await res.json());
    const visibleEvents = getVisibleTimelineEvents(events);

    const allChecked = visibleEvents.length > 0 && visibleEvents.every((e) => selectedEventIds.has(e.id));
    if (allChecked) selectedEventIds.clear();
    else selectedEventIds = new Set(visibleEvents.map((e) => e.id));

    renderTimeline(events);
  } catch {
    setStatus(t().statusLoadFailed, true);
  }
});

deleteSelectedBtn?.addEventListener("click", async () => {
  const ids = Array.from(selectedEventIds);
  if (!ids.length) {
    setStatus(t().statusDeleteNone, true);
    return;
  }

  try {
    let result;
    try {
      result = await deleteEventsBatch(ids);
    } catch {
      result = await deleteEventsOneByOne(ids);
    }

    if (!result?.removed) throw new Error("delete failed");

    selectedEventIds.clear();
    setStatus(t().statusDeleteDone(result.removed));
    await loadEvents();
  } catch {
    setStatus(t().statusDeleteOneFailed, true);
  }
});

bgmToggleBtn?.addEventListener("click", async () => {
  if (!bgmAudio) return;

  if (bgmOn) {
    bgmAudio.pause();
    bgmAudio.muted = false;
    bgmOn = false;
    updateBgmToggleText();
    setStatus(t().bgmOffLabel);
    return;
  }

  try {
    bgmAudio.muted = false;
    await bgmAudio.play();
    bgmOn = true;
    updateBgmToggleText();
    setStatus(t().statusBgmOn);
  } catch {
    setStatus(t().statusBgmFailed, true);
  }
});

langEnBtn?.addEventListener("click", () => applyLanguage("en"));
langZhBtn?.addEventListener("click", () => applyLanguage("zh"));

// ---------- start ----------
setupVoiceInput();
applyLanguage(currentLang, false);
tryAutoPlayBgm();