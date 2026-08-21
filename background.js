// Service worker proxy fetch — nhận message từ proxy.js, fetch từ bên ngoài, trả về

// ===== KIỂM TRA BẢN CẬP NHẬT =====
// So version extension đang cài với manifest.json trên GitHub; lệch version là có bản mới
const REMOTE_MANIFEST_URL = "https://raw.githubusercontent.com/minhkhw/AutoRedeemDF/refs/heads/main/manifest.json";
const UPDATE_INFO_KEY = "ng_df_update_info";
const UPDATE_ALARM = "ng_df_update_check";

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

const setUpdateBadge = (available) => {
  try {
    if (available) {
      chrome.action.setBadgeBackgroundColor({ color: "#ff9800" });
      chrome.action.setBadgeText({ text: "!" });
    } else {
      chrome.action.setBadgeText({ text: "" });
    }
  } catch (_) {}
};

const checkUpdate = async () => {
  try {
    const r = await fetch(REMOTE_MANIFEST_URL + "?t=" + Date.now(), { cache: "no-store" });
    if (!r.ok) return null;
    const m = (await r.text()).match(/\{[\s\S]*\}/);
    if (!m) return null;
    const latest = String((JSON.parse(m[0]).version || "")).trim();
    const current = chrome.runtime.getManifest().version;
    if (!latest || !current) return null;
    const info = { latest, current, updateAvailable: cmpVersions(latest, current) > 0, checkedAt: Date.now() };
    try { await chrome.storage.local.set({ [UPDATE_INFO_KEY]: info }); } catch (_) {}
    setUpdateBadge(info.updateAvailable);
    return info;
  } catch (_) { return null; }
};

chrome.runtime.onInstalled.addListener(checkUpdate);
chrome.runtime.onStartup.addListener(checkUpdate);
chrome.alarms.create(UPDATE_ALARM, { periodInMinutes: 360 });
chrome.alarms.onAlarm.addListener(a => { if (a.name === UPDATE_ALARM) checkUpdate(); });

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "fetchJson") {
    const sources = [
      "https://raw.githubusercontent.com/minhkhw/AutoRedeemDF/refs/heads/main/code.json"
    ];
    (async () => {
      for (const src of sources) {
        try {
          const r = await fetch(src, { cache: "no-store" });
          if (!r.ok) continue;
          const text = await r.text();
          const m = text.match(/\{[\s\S]*\}/);
          if (!m) continue;
          const data = JSON.parse(m[0]);
          sendResponse({ ok: true, data, text });
          return;
        } catch (_) {  }
      }
      sendResponse({ ok: false, err: "Không tải được nguồn nào" });
    })();
    return true; 
  }

  if (msg.action === "checkUpdate") {
    (async () => {
      // Ưu tiên kết quả mới; nếu fetch hỏng thì trả về kết quả lần check trước từ storage
      const info = (await checkUpdate()) || (await chrome.storage.local.get(UPDATE_INFO_KEY).then(s => s[UPDATE_INFO_KEY] || null).catch(() => null));
      sendResponse({ ok: !!info, info });
    })();
    return true;
  }

  if (msg.action === "fetchUrl") {
    (async () => {
      try {
        const r = await fetch(msg.url, { cache: "no-store" });
        if (!r.ok) throw new Error("HTTP " + r.status);
        sendResponse({ ok: true, text: await r.text() });
      } catch (e) { sendResponse({ ok: false, err: e.message }); }
    })();
    return true; 
  }
});
