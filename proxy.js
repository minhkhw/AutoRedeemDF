// proxy.js — ISOLATED world
// Xử lý nút tải code từ nguồn vì MAIN world không có chrome.runtime API
(function () {
  const waitEl = (id, cb) => {
    const el = document.getElementById(id);
    if (el) return cb(el);
    const obs = new MutationObserver(() => {
      const el = document.getElementById(id);
      if (el) { obs.disconnect(); cb(el); }
    });
    obs.observe(document.body, { childList: true, subtree: true });
  };

  const ts = () => {
    const d = new Date();
    return [d.getHours(), d.getMinutes(), d.getSeconds()].map(x => String(x).padStart(2, "0")).join(":");
  };

  const appendLog = (html, type) => {
    const box = document.getElementById("ng-log-box");
    if (!box) return;
    const div = document.createElement("div");
    div.className = "log-line log-" + type;
    div.innerHTML = `<span class="log-time">${ts()}</span>${html}`;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
  };

  waitEl("ng-remote-btn", (btn) => {
    btn.addEventListener("click", async () => {
      const origHTML = btn.innerHTML;
      btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`;
      btn.title = "Đang tải...";
      btn.style.color = "#00ffc8";
      btn.style.opacity = "1";
      try {
        // Bước 1: fetch JSON nguồn
        const res1 = await new Promise((resolve) => {
          chrome.runtime.sendMessage({ action: "fetchJson" }, (r) => {
            if (chrome.runtime.lastError) resolve({ ok: false, err: chrome.runtime.lastError.message });
            else resolve(r);
          });
        });
        if (!res1 || !res1.ok) throw new Error(res1?.err || "Không tải được nguồn");
        const data = res1.data;
        const text = res1.text || JSON.stringify(data);

        // Trích URL code
        let url = (data && typeof data.url === "string") ? data.url.trim() : null;
        if (!url || !/^https?:\/\//i.test(url)) {
          const urls = text.match(/https?:\/\/[^\s"'<>()\[\]]+/g) || [];
          url = urls.find(u => !u.includes("raw.githubusercontent.com") && !u.includes("jsdelivr.net") && !u.includes("api.github.com")) || null;
        }
        if (!url) throw new Error("Không tìm thấy URL code trong nguồn");

        // Bước 2: fetch raw code từ URL
        const res2 = await new Promise((resolve) => {
          chrome.runtime.sendMessage({ action: "fetchUrl", url }, (r) => {
            if (chrome.runtime.lastError) resolve({ ok: false, err: chrome.runtime.lastError.message });
            else resolve(r);
          });
        });
        if (!res2 || !res2.ok) throw new Error(res2?.err || "Không tải được trang code");

        const raw = res2.text;
        const codes = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        if (!codes.length) throw new Error("Không có code nào từ URL");

        // Dán vào textarea
        const codeInput = document.getElementById("ng-code-input");
        if (codeInput) {
          const cur = codeInput.value.trim();
          codeInput.value = cur ? cur + "\n" + codes.join("\n") : codes.join("\n");
          codeInput.dispatchEvent(new Event("input", { bubbles: true }));
        }
        appendLog(`📥 Đã tải ${codes.length} code từ nguồn (cập nhật: ${data.updated || "?"}, ghi chú: ${data.note || "?"})`, "info");
      } catch (e) {
        appendLog(`⚠ Lỗi tải từ nguồn: ${e.message}`, "bad");
      } finally {
        btn.innerHTML = origHTML;
        btn.title = "Tải code từ nguồn và dán vào ô";
        btn.style.color = "";
        btn.style.opacity = "";
      }
    });
  });
  // Check bản cập nhật
  document.addEventListener("ng-df-check-update", () => {
    chrome.runtime.sendMessage({ action: "checkUpdate" }, (r) => {
      if (chrome.runtime.lastError || !r || !r.ok || !r.info) return;
      document.dispatchEvent(new CustomEvent("ng-df-update-result", { detail: JSON.stringify(r.info) }));
    });
  });
})();
