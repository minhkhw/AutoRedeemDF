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

// Gửi message cho background có timeout — tránh treo popup nếu service worker không phản hồi
const sendToBackground = (msg, ms = 8000) => new Promise((resolve) => {
  const timer = setTimeout(() => resolve({ ok: false, err: "Hết thời gian chờ" }), ms);
  try {
    chrome.runtime.sendMessage(msg, (r) => {
      clearTimeout(timer);
      if (chrome.runtime.lastError) resolve({ ok: false, err: chrome.runtime.lastError.message });
      else resolve(r || { ok: false, err: "Không có phản hồi" });
    });
  } catch (e) {
    clearTimeout(timer);
    resolve({ ok: false, err: e.message });
  }
});

// Khối NGUỒN CODE MỚI NHẤT — fetch qua background.js (nơi quản lý nguồn chính + dự phòng jsDelivr)
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
    const res = await sendToBackground({ action: "fetchJson" });
    if (!res || !res.ok || !res.data) throw new Error(res?.err || "Không tải được nguồn");
    const data = res.data;
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

const reloadBtn = document.getElementById("ng-src-reload");
reloadBtn.addEventListener("click", () => {
  reloadBtn.classList.add("spinning");
  renderInfo().finally(() => reloadBtn.classList.remove("spinning"));
});

renderInfo();

// Kiểm tra bản cập nhật — nhờ background check (đã cache kết quả trong storage)
(async () => {
  const res = await sendToBackground({ action: "checkUpdate" });
  const info = res && res.ok ? res.info : null;
  if (!info || !info.updateAvailable || !info.latest) return; // im lặng — không quấy rầy khi offline
  document.getElementById("upd-ver").textContent = "v" + info.latest;
  document.getElementById("update-banner").style.display = "flex";
})();
