// Badge trạng thái: kiểm tra tab hiện tại có phải trang đổi code không
const setStatus = (ok) => {
  const badge = document.getElementById("status-badge");
  const text = document.getElementById("status-text");
  if (!badge || !text) return;
  if (ok) {
    text.textContent = "SẴN SÀNG";
    badge.classList.remove("not-ready");
    badge.classList.add("ready");
    badge.title = "Đang ở trang *.garena.sg — extension sẵn sàng";
  } else {
    text.textContent = "CHƯA SẴN SÀNG";
    badge.classList.remove("ready");
    badge.classList.add("not-ready");
    badge.title = "Không ở trang *.garena.sg — hãy mở web đổi code của Garena";
  }
};

if (typeof chrome !== "undefined" && chrome.tabs && chrome.tabs.query) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = (tabs[0] && tabs[0].url) || "";
    setStatus(/^https?:\/\/([\w-]+\.)*garena\.sg(\/|$)/i.test(url));
  });
} else {
  setStatus(false); // chạy thử popup ngoài môi trường extension
}

// Khối NGUỒN CODE MỚI NHẤT: tải file JSON trên GitHub

const CODE_SOURCES = [
  "https://raw.githubusercontent.com/minhkhw/AutoRedeemDF/refs/heads/main/code.json",
  "https://cdn.jsdelivr.net/gh/minhkhw/AutoRedeemDF@main/code.json"
];

const cleanText = html => html
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]*>/g, " ");

const parseJson = text => {
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) return null;
  try { return JSON.parse(m[0]); } catch (_) { return null; }
};

const fetchWithTimeout = async (url, ms = 6000) => {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { cache: "no-store", signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
};

// Thử lần lượt từng nguồn; timeout 6s mỗi nguồn
const loadSource = async () => {
  let lastErr = null;
  for (const src of CODE_SOURCES) {
    try {
      // raw: cache-bust bằng ?t=...
      const bustUrl = src + (src.includes("?") ? "&" : "?") + "t=" + Date.now();
      const res = await fetchWithTimeout(bustUrl);
      if (!res.ok) throw new Error("HTTP " + res.status);
      const text = cleanText(await res.text());
      const data = parseJson(text);
      if (data) return { text, data };
      throw new Error("JSON không hợp lệ");
    } catch (e) { lastErr = e; }
  }
  throw lastErr || new Error("Không tải được nguồn nào");
};

const relTime = (dateStr) => {
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec((dateStr || "").trim());
  if (!m) return "";
  const d = new Date(+m[3], +m[2] - 1, +m[1]);
  if (isNaN(d.getTime())) return "";
  const days = Math.floor((Date.now() - d.getTime()) / 864e5);
  if (days <= 0) return "hôm nay";
  if (days === 1) return "hôm qua";
  if (days < 30) return days + " ngày trước";
  return Math.floor(days / 30) + " tháng trước";
};

const renderInfo = async () => {
  const updatedEl = document.getElementById("ng-src-updated");
  const relEl = document.getElementById("ng-src-rel");
  const noteEl = document.getElementById("ng-src-note");
  const retryBtn = document.getElementById("ng-src-retry");
  const liveChip = document.getElementById("live-chip");
  retryBtn.style.display = "none";
  liveChip.hidden = true;
  updatedEl.textContent = "…";
  relEl.textContent = "";
  noteEl.textContent = "…";
  try {
    const { data } = await loadSource();
    const updated = (typeof data.updated === "string" ? data.updated.trim() : "");
    updatedEl.textContent = updated || "—";
    relEl.textContent = relTime(updated);
    noteEl.textContent = (typeof data.note === "string" ? data.note.trim() : "") || "—";
    liveChip.hidden = false;
  } catch (_) {
    updatedEl.textContent = "—";
    relEl.textContent = "";
    noteEl.textContent = "—";
    retryBtn.style.display = "block";
  }
};
document.getElementById("ng-src-retry").onclick = renderInfo;

// Nút tải lại (icon refresh) ngay tiêu đề khối nguồn
const reloadBtn = document.getElementById("ng-src-reload");
reloadBtn.addEventListener("click", () => {
  reloadBtn.classList.add("spinning");
  renderInfo().finally(() => reloadBtn.classList.remove("spinning"));
});

renderInfo();

// ===== Kiểm tra bản cập nhật =====
const REMOTE_MANIFEST = "https://raw.githubusercontent.com/minhkhw/AutoRedeemDF/refs/heads/main/manifest.json";

const cmpVersions = (a, b) => {
  const pa = String(a || "").split(".").map(n => parseInt(n, 10) || 0);
  const pb = String(b || "").split(".").map(n => parseInt(n, 10) || 0);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d) return d > 0 ? 1 : -1;
  }
  return 0;
};

(async () => {
  try {
    const res = await fetchWithTimeout(REMOTE_MANIFEST + "?t=" + Date.now());
    if (!res.ok) return;
    const data = parseJson(await res.text());
    const latest = (data && typeof data.version === "string" ? data.version.trim() : "");
    const current = (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.getManifest)
      ? chrome.runtime.getManifest().version : "";
    if (!latest || !current || cmpVersions(latest, current) <= 0) return;
    document.getElementById("upd-ver").textContent = "v" + latest;
    document.getElementById("update-banner").style.display = "flex";
  } catch (_) { /* im lặng — không quấy rầy khi offline */ }
})();
