// Service worker proxy fetch — nhận message từ proxy.js, fetch từ bên ngoài, trả về
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
