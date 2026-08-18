(function() {
  // ===== 1. TẠO GIAO DIỆN NGƯỜI DÙNG (UI) =====
  const ICONS = {
    delta: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="miter"><path d="M12 3.5 20.5 20h-17Z"/><path d="M12 12.5V16M10.25 14.25h3.5" stroke-linecap="round"/></svg>`,
    crosshair: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="6.5"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/><circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"/></svg>`,
    ticket: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 1 0-6V6H3Z"/><path d="M15 8.5v7" stroke-dasharray="2.4 2.6" stroke-linecap="round"/></svg>`,
    clipboard: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
    cloudDL: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 0-5.8 4.6A4.5 4.5 0 0 0 5.5 15H7m10 0h1.5A4.5 4.5 0 0 0 18 6.6 6 6 0 0 0 12 2Z"/><path d="M12 18v4m0-4-3 3m3-3 3 3"/></svg>`,
    trash: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6M14 11v6"/></svg>`,
    radar: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4.5 15.5a9.5 9.5 0 0 1 15 0"/><path d="M8.5 15.5a4.5 4.5 0 0 1 7 0"/><path d="M12 18.5h.01"/></svg>`,
    terminal: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="1.5"/><path d="m7 9.5 3 2.5-3 2.5M12.5 14.5H17"/></svg>`,
    gear: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    table: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><path d="M3.5 9.5h17M9.5 9.5v10"/></svg>`,
    close: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
    retry: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>`,
    chevDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 9 7 7 7-7"/></svg>`,
    chevUp: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m5 15 7-7 7 7"/></svg>`
  };

  const panel = document.createElement("div");
  panel.id = "redeem-ui";
  panel.innerHTML = `
    <div id="ng-header">
      <span id="ng-title">${ICONS.delta}<span>AUTO REDEEM</span></span>
      <div id="ng-header-actions">
        <button id="ng-settings-btn" title="Cài đặt tốc độ">${ICONS.gear}</button>
        <button id="ng-minimize" title="Thu gọn / Mở rộng">${ICONS.chevDown}</button>
      </div>
    </div>
    <div id="ng-body">
      <div class="ng-field-label">${ICONS.ticket}<span>MÃ GIFT CODE</span><button id="ng-remote-btn" class="ng-mini-btn" title="Tải code từ nguồn và dán vào ô">${ICONS.cloudDL}</button><button id="ng-paste-btn" class="ng-mini-btn" title="Dán danh sách code từ clipboard">${ICONS.clipboard}</button></div>
      <textarea id="ng-code-input" placeholder="Dán danh sách code vào đây, mỗi code một dòng..."></textarea>
      <div id="ng-code-stats"></div>
      <div class="ng-btn-row">
        <button id="ng-start-btn">${ICONS.crosshair}<span id="ng-start-text">BẮT ĐẦU ĐỔI CODE</span></button>
        <button id="ng-retry-btn" disabled title="Chạy lại code lỗi / chưa chạy xong khi dừng">${ICONS.retry}<span id="ng-retry-text">CHẠY LẠI</span></button>
        <button id="ng-summary-btn" disabled title="Xem kết quả tổng kết">${ICONS.table}<span>TỔNG KẾT</span></button>
      </div>
      <div id="ng-status">${ICONS.radar}<span id="ng-status-text">Sẵn sàng...</span></div>
      <div id="ng-progress-wrap"><div id="ng-progress-bar"></div></div>
      <div id="ng-log-container">
        <div class="ng-log-title">${ICONS.terminal}<span>Nhật ký hoạt động</span><button id="ng-clear-log-btn" class="ng-mini-btn" title="Xoá nhật ký">${ICONS.trash}</button></div>
        <div id="ng-log-box"></div>
      </div>
      <div id="ng-credit">Được phát triển với ❤ bởi <b>Minh Khương</b></div>
    </div>
  `;
  
  panel.style.cssText = `
    position: fixed; bottom: 15px; right: 15px; width: 380px; 
    background: #0f1923; color: #fff; border: 1px solid #00ffc8; 
    border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); 
    z-index: 999999; font-family: Arial, sans-serif; font-size: 14px; 
    overflow: hidden; display: flex; flex-direction: column;
  `;

  const style = document.createElement("style");
  style.innerHTML = `
    #ng-header { background: #00ffc8; color: #001b16; padding: 8px 12px; font-weight: bold; display: flex; justify-content: space-between; align-items: center; cursor: move; gap: 8px; letter-spacing: 0.5px; }
    #ng-title { display: flex; align-items: center; gap: 7px; }
    #ng-title svg, #ng-minimize svg, #ng-start-btn svg, #ng-retry-btn svg, #ng-summary-btn svg, #ng-settings-btn svg, #ng-status svg, .ng-field-label svg, .ng-log-title svg, #ng-sum-header svg, #ng-sum-close svg, #ng-set-header svg, #ng-set-close svg { display: block; flex: none; }
    #ng-header-actions { display: flex; align-items: center; gap: 2px; }
    #ng-settings-btn, #ng-minimize { background: transparent; border: none; color: #001b16; width: 26px; height: 22px; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; border-radius: 3px; }
    #ng-settings-btn:hover, #ng-minimize:hover { background: rgba(0,27,22,0.15); }
    .ng-field-label { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: bold; color: #8fa8bf; letter-spacing: 0.5px; }
    .ng-mini-btn { margin-left: auto; background: transparent; border: none; color: inherit; width: 24px; height: 22px; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; border-radius: 3px; opacity: 0.7; }
    .ng-mini-btn:hover { color: #00ffc8; opacity: 1; background: rgba(0,255,200,0.08); }
    .ng-mini-btn svg { display: block; flex: none; }
    #ng-body { padding: 12px; display: flex; flex-direction: column; gap: 10px; max-height: 500px; overflow-y: auto; }
    #ng-code-input { width: 100%; height: 80px; background: #1a2634; border: 1px solid #334455; color: #fff; border-radius: 4px; padding: 8px; box-sizing: border-box; resize: vertical; }
    #ng-code-stats { font-size: 11px; color: #8fa8bf; display: flex; gap: 10px; flex-wrap: wrap; }
    #ng-code-stats .ng-st-ok { color: #00ffc8; font-weight: bold; }
    #ng-code-stats .ng-st-warn { color: #ffc400; }
    #ng-code-stats .ng-st-bad { color: #ff5252; }
    #ng-start-btn { background: #18ffc0; color: #001b16; border: none; padding: 10px; border-radius: 4px; font-weight: bold; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; flex: 1; }
    #ng-start-btn.ng-running svg { animation: ng-scan 1.1s linear infinite; }
    @keyframes ng-scan { to { transform: rotate(360deg); } }
    #ng-start-btn:hover { background: #00e6ad; }
    #ng-start-btn.ng-stop-mode { background: #ff5252; color: #fff; }
    #ng-start-btn.ng-stop-mode:hover { background: #e04848; }
    #ng-start-btn:disabled { background: #555; color: #aaa; cursor: not-allowed; }
    .ng-btn-row { display: flex; gap: 8px; }
    #ng-summary-btn { background: #1a2634; color: #00ffc8; border: 1px solid #00ffc8; padding: 10px 12px; border-radius: 4px; font-weight: bold; font-size: 12px; letter-spacing: 0.5px; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 6px; white-space: nowrap; }
    #ng-summary-btn:hover:not(:disabled) { background: #24354a; }
    #ng-summary-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    #ng-retry-btn { background: #1a2634; color: #ffc400; border: 1px solid #ffc400; padding: 10px 12px; border-radius: 4px; font-weight: bold; font-size: 12px; letter-spacing: 0.5px; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 6px; white-space: nowrap; }
    #ng-retry-btn:hover:not(:disabled) { background: #24354a; }
    #ng-retry-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    #ng-status { font-size: 13px; color: #00c8ff; font-weight: bold; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px; }
    #ng-progress-wrap { height: 5px; background: #1a2634; border-radius: 3px; overflow: hidden; }
    #ng-progress-bar { height: 100%; width: 0%; background: linear-gradient(90deg, #00ffc8, #00c8ff); border-radius: 3px; transition: width 0.25s; }
    .ng-done-glow { animation: ng-done-pulse 0.8s ease-in-out 4; }
    @keyframes ng-done-pulse { 0%, 100% { box-shadow: 0 10px 30px rgba(0,0,0,0.5); } 50% { box-shadow: 0 0 0 3px #00ffc8, 0 0 22px rgba(0,255,200,0.75); } }
    #ng-log-container { display: flex; flex-direction: column; flex: 1; }
    .ng-log-title { font-size: 12px; color: #888; margin-bottom: 4px; display: flex; align-items: center; gap: 6px; }
    #ng-log-box { background: #000; border: 1px solid #222; padding: 8px; height: 200px; overflow-y: auto; font-family: monospace; font-size: 12px; border-radius: 4px; }
    #ng-credit { text-align: center; font-size: 10px; color: #4a5f75; letter-spacing: 0.3px; }
    #ng-credit b { color: #00d6b0; font-weight: normal; }
    .log-line { margin-bottom: 2px; word-wrap: break-word; white-space: pre-wrap; }
    .log-time { color: #55697d; margin-right: 4px; font-size: 11px; }
    .log-ok { color: #00e676; }
    .log-bad { color: #ff5252; }
    .log-warn { color: #ffc400; }
    .log-info { color: #b388ff; }
    .log-run { color: #00c8ff; }
    .log-title { color: #00ffc8; font-weight: bold; }
    #ng-summary-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 2147483647; display: flex; align-items: center; justify-content: center; font-family: Arial, sans-serif; font-size: 14px; }
    #ng-sum-card { width: 500px; max-width: 92vw; max-height: 80vh; background: #0f1923; border: 1px solid #00ffc8; border-radius: 8px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 50px rgba(0,0,0,0.7); color: #fff; }
    #ng-sum-header { background: #00ffc8; color: #001b16; padding: 8px 12px; font-weight: bold; display: flex; justify-content: space-between; align-items: center; letter-spacing: 0.5px; }
    #ng-sum-header > span { display: flex; align-items: center; gap: 7px; }
    #ng-sum-close { background: transparent; border: none; color: #001b16; width: 26px; height: 22px; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; border-radius: 3px; }
    #ng-sum-close:hover { background: rgba(0,27,22,0.15); }
    #ng-sum-stats { display: flex; flex-wrap: wrap; gap: 6px; padding: 10px 12px 8px; }
    .ng-pill { font-size: 12px; font-weight: bold; padding: 3px 10px; border-radius: 3px; border: 1px solid; cursor: pointer; user-select: none; }
    .ng-pill:hover { filter: brightness(1.35); }
    .ng-pill.ng-pill-active { box-shadow: 0 0 0 2px rgba(255,255,255,0.35); }
    .ng-pill.cat-total { color: #00ffc8; border-color: #00ffc8; }
    .ng-pill.cat-ok { color: #00e676; border-color: #00e676; }
    .ng-pill.cat-bad { color: #ff5252; border-color: #ff5252; }
    .ng-pill.cat-warn { color: #ffc400; border-color: #ffc400; }
    .ng-pill.cat-info { color: #b388ff; border-color: #b388ff; }
    #ng-sum-scroll { overflow-y: auto; padding: 0 12px 10px; }
    #ng-sum-table { width: 100%; border-collapse: collapse; font-size: 12px; }
    #ng-sum-table th { text-align: left; color: #8fa8bf; font-size: 11px; letter-spacing: 0.5px; border-bottom: 1px solid #334455; padding: 6px 8px; position: sticky; top: 0; background: #0f1923; }
    #ng-sum-table td { padding: 6px 8px; border-bottom: 1px solid #1c2836; word-break: break-all; }
    #ng-sum-footer { display: flex; flex-wrap: wrap; gap: 14px; padding: 8px 12px 10px; border-top: 1px solid #1c2836; font-size: 12px; color: #8fa8bf; align-items: center; }
    #ng-sum-footer b { color: #00ffc8; }
    tr.ng-row-ok td { color: #00e676; }
    tr.ng-row-bad td { color: #ff5252; }
    tr.ng-row-warn td { color: #ffc400; }
    tr.ng-row-info td { color: #b388ff; }
    #ng-settings-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 2147483647; display: flex; align-items: center; justify-content: center; font-family: Arial, sans-serif; font-size: 14px; }
    #ng-set-card { width: 480px; max-width: 92vw; max-height: 80vh; background: #0f1923; border: 1px solid #00ffc8; border-radius: 8px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 15px 50px rgba(0,0,0,0.7); color: #fff; }
    #ng-set-header { background: #00ffc8; color: #001b16; padding: 8px 12px; font-weight: bold; display: flex; justify-content: space-between; align-items: center; letter-spacing: 0.5px; }
    #ng-set-header > span { display: flex; align-items: center; gap: 7px; }
    #ng-set-close { background: transparent; border: none; color: #001b16; width: 26px; height: 22px; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; border-radius: 3px; }
    #ng-set-close:hover { background: rgba(0,27,22,0.15); }
    #ng-set-body { padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }
    .ng-set-row { display: grid; grid-template-columns: 1fr 110px; gap: 10px; align-items: center; }
    .ng-set-label { font-size: 13px; font-weight: bold; }
    .ng-set-hint { font-size: 11px; color: #8fa8bf; margin-top: 2px; }
    .ng-set-input { width: 100%; background: #1a2634; border: 1px solid #334455; color: #fff; border-radius: 4px; padding: 6px 8px; box-sizing: border-box; font-size: 13px; }
    .ng-set-input:focus { outline: none; border-color: #00ffc8; }
    #ng-set-actions { display: flex; gap: 8px; padding: 0 12px 12px; }
    #ng-set-save { flex: 1; background: #18ffc0; color: #001b16; border: none; padding: 9px; border-radius: 4px; font-weight: bold; cursor: pointer; transition: 0.2s; }
    #ng-set-save:hover { background: #00e6ad; }
    #ng-set-reset { background: #1a2634; color: #00ffc8; border: 1px solid #00ffc8; padding: 9px 12px; border-radius: 4px; font-weight: bold; font-size: 12px; cursor: pointer; transition: 0.2s; white-space: nowrap; }
    #ng-set-reset:hover { background: #24354a; }
    #ng-set-presets { display: flex; gap: 8px; }
    #ng-set-presets button { flex: 1; background: #1a2634; color: #8fa8bf; border: 1px solid #334455; padding: 7px 4px; border-radius: 4px; font-size: 11px; font-weight: bold; cursor: pointer; transition: 0.2s; letter-spacing: 0.3px; }
    #ng-set-presets button:hover { color: #00ffc8; border-color: #00ffc8; background: #24354a; }
    .ng-set-check { display: flex; align-items: center; justify-content: flex-end; }
    .ng-set-check input { width: 18px; height: 18px; accent-color: #00ffc8; cursor: pointer; }
    #ng-set-clear-hist { background: transparent; color: #ff5252; border: 1px solid #ff5252; padding: 9px 10px; border-radius: 4px; font-weight: bold; font-size: 11px; cursor: pointer; transition: 0.2s; white-space: nowrap; }
    #ng-set-clear-hist:hover { background: rgba(255,82,82,0.15); }
  `;
  document.head.appendChild(style);
  document.body.appendChild(panel);

  // ===== MODAL TỔNG KẾT =====
  let lastSummary = null;
  const summaryBtn = document.getElementById("ng-summary-btn");
  const modal = document.createElement("div");
  modal.id = "ng-summary-modal";
  modal.style.display = "none";
  document.body.appendChild(modal);

  const escHtml = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const statusCategory = s => s === "SUCCESS" ? "ok" : (["EXPIRED", "INVALID", "PRESENT_ERROR"].includes(s) ? "bad" : (["LIMIT_REACHED", "USED"].includes(s) ? "warn" : "info"));
  const closeSummary = () => { modal.style.display = "none"; };

  summaryBtn.onclick = () => {
    if (!lastSummary) return;
    const stats = {};
    lastSummary.forEach(r => { stats[r.label] = stats[r.label] || { count: 0, cat: statusCategory(r.status) }; stats[r.label].count++; });
    const ran = lastSummary.filter(r => r.status !== "SKIPPED").length;
    const okN = lastSummary.filter(r => r.status === "SUCCESS").length;
    const avgSec = ran ? (sessionStats.totalMs / ran / 1000).toFixed(1) : "0.0";
    const fmtDur = ms => { const s = Math.round(ms / 1000); const m = Math.floor(s / 60); return m ? `${m}ph${String(s % 60).padStart(2, "0")}s` : `${s}s`; };
    modal.innerHTML = `
      <div id="ng-sum-card">
        <div id="ng-sum-header">
          <span>${ICONS.table}<span>KẾT QUẢ TỔNG KẾT</span></span>
          <button id="ng-sum-close" title="Đóng">${ICONS.close}</button>
        </div>
        <div id="ng-sum-stats">
          <span class="ng-pill cat-total ng-pill-active" data-label="">TỔNG ${lastSummary.length}</span>
          ${Object.entries(stats).map(([label, s]) => `<span class="ng-pill cat-${s.cat}" data-label="${escHtml(label)}">${escHtml(label)} ${s.count}</span>`).join("")}
        </div>
        <div id="ng-sum-scroll">
          <table id="ng-sum-table">
            <thead><tr><th>STT</th><th>CODE</th><th>TRẠNG THÁI</th><th>THÔNG BÁO</th></tr></thead>
            <tbody>
              ${lastSummary.map(r => `<tr data-label="${escHtml(r.label)}" class="ng-row-${statusCategory(r.status)}"><td>${escHtml(r.stt)}</td><td>${escHtml(r.code)}</td><td>${escHtml(r.label)}</td><td>${escHtml(r.note)}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>
        <div id="ng-sum-footer">
          <span>⏱ Thời gian: <b>${fmtDur(sessionStats.totalMs)}</b></span>
          <span>⚡ Tốc độ: <b>${avgSec}s/code</b></span>
          <span>✔ Thành công: <b>${lastSummary.length ? Math.round(okN / lastSummary.length * 100) : 0}%</b></span>
        </div>
      </div>
    `;
    modal.style.display = "flex";
    document.getElementById("ng-sum-close").onclick = closeSummary;
    modal.querySelectorAll(".ng-pill").forEach(p => {
      p.onclick = () => {
        const label = p.dataset.label;
        modal.querySelectorAll(".ng-pill").forEach(x => x.classList.toggle("ng-pill-active", x === p));
        modal.querySelectorAll("#ng-sum-table tbody tr").forEach(tr => { tr.style.display = (!label || tr.dataset.label === label) ? "" : "none"; });
      };
    });
  };
  modal.addEventListener("click", e => { if (e.target === modal) closeSummary(); });

  // ===== MODAL CÀI ĐẶT TỐC ĐỘ =====
  const DEFAULT_CONFIG = { maxRetries: 0, delayBetweenCodesMs: 1000, timeoutMs: 2000, retryDelayMs: 1000, pollMs: 100, submitClickRetries: 1, submitConfirmMs: 350, skipTriedCodes: true, jitterDelay: true, notifyOnDone: true };
  const SPEED_PRESETS = {
    safe: { delayBetweenCodesMs: 2500, timeoutMs: 3000, pollMs: 100, submitConfirmMs: 500, submitClickRetries: 1, maxRetries: 2, retryDelayMs: 2000 },
    balanced: { delayBetweenCodesMs: 1000, timeoutMs: 2000, pollMs: 100, submitConfirmMs: 350, submitClickRetries: 1, maxRetries: 0, retryDelayMs: 1000 },
    fast: { delayBetweenCodesMs: 300, timeoutMs: 1200, pollMs: 50, submitConfirmMs: 200, submitClickRetries: 2, maxRetries: 0, retryDelayMs: 500 }
  };
  const CODE_HISTORY_KEY = "ng_df_code_history";
  const TERMINAL_STATUSES = ["SUCCESS", "LIMIT_REACHED", "EXPIRED", "PRESENT_ERROR", "INVALID", "USED"];
  const loadCodeHistory = () => { try { return JSON.parse(localStorage.getItem(CODE_HISTORY_KEY) || "{}"); } catch (_) { return {}; } };
  const saveCodeHistory = h => {
    try {
      const keys = Object.keys(h);
      if (keys.length > 500) { keys.sort((a, b) => (h[a].t || 0) - (h[b].t || 0)).slice(0, keys.length - 500).forEach(k => delete h[k]); }
      localStorage.setItem(CODE_HISTORY_KEY, JSON.stringify(h));
    } catch (_) {}
  };
  const SETTINGS_FIELDS = [
    { key: "delayBetweenCodesMs", label: "Nghỉ giữa các code (ms)", hint: "Độ trễ trước khi đổi code tiếp theo", min: 0, step: 50 },
    { key: "timeoutMs", label: "Chờ phản hồi tối đa (ms)", hint: "Thời gian chờ kết quả của mỗi code", min: 500, step: 100 },
    { key: "pollMs", label: "Tần suất kiểm tra (ms)", hint: "Khoảng cách mỗi lần thăm dò phản hồi", min: 50, step: 50 },
    { key: "submitConfirmMs", label: "Chờ xác nhận đã gửi (ms)", hint: "Thời gian chờ sau khi bấm nút Đổi", min: 100, step: 50 },
    { key: "submitClickRetries", label: "Số lần bấm nút Đổi", hint: "Bấm thêm nếu chưa thấy request gửi đi", min: 1, step: 1 },
    { key: "maxRetries", label: "Số lần thử lại", hint: "Thử lại khi lỗi tạm thời / không thấy phản hồi", min: 0, step: 1 },
    { key: "retryDelayMs", label: "Nghỉ trước khi thử lại (ms)", hint: "Chỉ áp dụng khi có thử lại", min: 0, step: 100 }
  ];
  let userConfig = (() => { try { return { ...DEFAULT_CONFIG, ...JSON.parse(localStorage.getItem("ng_df_redeem_config") || "{}") }; } catch (_) { return { ...DEFAULT_CONFIG }; } })();
  const saveUserConfig = () => { try { localStorage.setItem("ng_df_redeem_config", JSON.stringify(userConfig)); } catch (_) {} };

  const settingsBtn = document.getElementById("ng-settings-btn");
  const settingsModal = document.createElement("div");
  settingsModal.id = "ng-settings-modal";
  settingsModal.style.display = "none";
  settingsModal.innerHTML = `
    <div id="ng-set-card">
      <div id="ng-set-header">
        <span>${ICONS.gear}<span>CÀI ĐẶT TỐC ĐỘ</span></span>
        <button id="ng-set-close" title="Đóng">${ICONS.close}</button>
      </div>
      <div id="ng-set-body">
        <div id="ng-set-presets">
          <button data-preset="safe" title="Chậm mà chắc, có thử lại khi lỗi">🛡 AN TOÀN</button>
          <button data-preset="balanced" title="Giá trị mặc định hiện tại">⚖ CÂN BẰNG</button>
          <button data-preset="fast" title="Chạy nhanh nhất, không thử lại">⚡ THẦN TỐC</button>
        </div>
        ${SETTINGS_FIELDS.map(f => `
        <div class="ng-set-row">
          <div>
            <div class="ng-set-label">${f.label}</div>
            <div class="ng-set-hint">${f.hint}</div>
          </div>
          <input class="ng-set-input" type="number" data-key="${f.key}" min="${f.min}" step="${f.step}" value="${userConfig[f.key]}">
        </div>`).join("")}
        <div class="ng-set-row">
          <div>
            <div class="ng-set-label">Bỏ qua code đã thử trước đó</div>
            <div class="ng-set-hint">Tự bỏ qua code đã có kết quả từ lần chạy trước (thành công, hết hạn, sai...)</div>
          </div>
          <div class="ng-set-check"><input type="checkbox" class="ng-set-toggle" data-key="skipTriedCodes" ${userConfig.skipTriedCodes ? "checked" : ""}></div>
        </div>
        <div class="ng-set-row">
          <div>
            <div class="ng-set-label">Nghỉ ngẫu nhiên ±20%</div>
            <div class="ng-set-hint">Delay giữa các code lệch nhẹ ngẫu nhiên, giảm nguy cơ rate-limit</div>
          </div>
          <div class="ng-set-check"><input type="checkbox" class="ng-set-toggle" data-key="jitterDelay" ${userConfig.jitterDelay ? "checked" : ""}></div>
        </div>
        <div class="ng-set-row">
          <div>
            <div class="ng-set-label">Báo khi hoàn tất</div>
            <div class="ng-set-hint">Nhấp nháy tiêu đề tab + tiếng beep khi chạy xong đợt</div>
          </div>
          <div class="ng-set-check"><input type="checkbox" class="ng-set-toggle" data-key="notifyOnDone" ${userConfig.notifyOnDone ? "checked" : ""}></div>
        </div>
      </div>
      <div id="ng-set-actions">
        <button id="ng-set-clear-hist" title="Xoá toàn bộ lịch sử code đã thử">XOÁ LỊCH SỬ</button>
        <button id="ng-set-reset" title="Trả về giá trị mặc định">MẶC ĐỊNH</button>
        <button id="ng-set-save">LƯU CÀI ĐẶT</button>
      </div>
    </div>
  `;
  document.body.appendChild(settingsModal);

  const closeSettings = () => { settingsModal.style.display = "none"; };
  const setConfigInputs = cfg => settingsModal.querySelectorAll(".ng-set-input").forEach(inp => { inp.value = cfg[inp.dataset.key]; });
  const setToggles = cfg => settingsModal.querySelectorAll(".ng-set-toggle").forEach(inp => { inp.checked = !!cfg[inp.dataset.key]; });

  settingsModal.querySelectorAll("#ng-set-presets button").forEach(b => { b.onclick = () => setConfigInputs(SPEED_PRESETS[b.dataset.preset]); });
  settingsBtn.onclick = () => { setConfigInputs(userConfig); setToggles(userConfig); settingsModal.style.display = "flex"; };
  document.getElementById("ng-set-close").onclick = closeSettings;
  document.getElementById("ng-set-reset").onclick = () => { setConfigInputs(DEFAULT_CONFIG); setToggles(DEFAULT_CONFIG); };
  document.getElementById("ng-set-clear-hist").onclick = () => { try { localStorage.removeItem(CODE_HISTORY_KEY); } catch (_) {} appendLog("🗑 Đã xoá lịch sử code đã thử", "info"); };
  document.getElementById("ng-set-save").onclick = () => {
    settingsModal.querySelectorAll(".ng-set-input").forEach(inp => {
      const f = SETTINGS_FIELDS.find(x => x.key === inp.dataset.key);
      let v = parseInt(inp.value, 10);
      if (!Number.isFinite(v)) v = DEFAULT_CONFIG[f.key];
      userConfig[f.key] = Math.max(f.min, v);
    });
    settingsModal.querySelectorAll(".ng-set-toggle").forEach(inp => { userConfig[inp.dataset.key] = inp.checked; });
    saveUserConfig();
    closeSettings();
    appendLog("⚙ Đã lưu cài đặt — áp dụng từ lần chạy tiếp theo", "info");
  };
  settingsModal.addEventListener("click", e => { if (e.target === settingsModal) closeSettings(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeSummary(); closeSettings(); } });

  const body = document.getElementById("ng-body");
  document.getElementById("ng-minimize").onclick = () => {
    if (body.style.display === "none") {
      body.style.display = "flex";
      document.getElementById("ng-minimize").innerHTML = ICONS.chevDown;
    } else {
      body.style.display = "none";
      document.getElementById("ng-minimize").innerHTML = ICONS.chevUp;
    }
  };

  const header = document.getElementById("ng-header");
  let isDragging = false, offsetX, offsetY;
  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - panel.getBoundingClientRect().left;
    offsetY = e.clientY - panel.getBoundingClientRect().top;
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';
  });
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      panel.style.left = (e.clientX - offsetX) + 'px';
      panel.style.top = (e.clientY - offsetY) + 'px';
    }
  });
  document.addEventListener('mouseup', () => isDragging = false);

  const logBox = document.getElementById("ng-log-box");
  const statusText = document.getElementById("ng-status-text");

  function appendLog(html, type = "") {
    const div = document.createElement("div");
    div.className = `log-line log-${type}`;
    const t = new Date();
    const ts = [t.getHours(), t.getMinutes(), t.getSeconds()].map(x => String(x).padStart(2, "0")).join(":");
    div.innerHTML = `<span class="log-time">${ts}</span>${html}`;
    logBox.appendChild(div);
    logBox.scrollTop = logBox.scrollHeight;
  }

  // ===== 2. CHUYỂN HƯỚNG CONSOLE.LOG RA GIAO DIỆN  =====
  const originalConsoleLog = console.log.bind(console);
  const originalConsoleWarn = console.warn.bind(console);
  const originalConsoleError = console.error.bind(console);
  const originalConsoleTable = console.table.bind(console);

  function formatArgs(args) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && 'code' in args[0] && 'msg' in args[0]) {
      return null;
    }
    
    let msg = "";
    if (typeof args[0] === 'string') {
      let cleanStr = args[0].replace(/%c/g, '').trim();
      let extraParts = [];
      for (let i = 1; i < args.length; i++) {
        if (typeof args[i] === 'string' && (args[i].includes('color:') || args[i].includes('background:') || args[i].includes('font-'))) {
          continue; 
        }
        if (typeof args[i] === 'object') {
          if (args[i] !== null && 'code' in args[i] && 'msg' in args[i]) continue; 
          extraParts.push(JSON.stringify(args[i]));
        } else {
          extraParts.push(args[i]);
        }
      }
      msg = cleanStr + (extraParts.length ? ' ' + extraParts.join(' ') : '');
    } else {
      msg = args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
    }
    return msg.trim();
  }

  // Chỉ hiển thị log do tool này tạo ra 
  const OWN_LOG_MARKERS = ["Đang chạy", "TỰ ĐỘNG ĐỔI CODE", "Tổng code:", "Tốc độ:", "KẾT QUẢ TỔNG KẾT", "ĐÃ DỪNG", "Bỏ qua", "Tất cả code", "Không tìm thấy ô nhập"];
  const isOwnLog = msg => !!msg && (/^\[\d+\/\d+\]/.test(msg) || OWN_LOG_MARKERS.some(p => msg.includes(p)));

  console.log = (...args) => {
    originalConsoleLog(...args);
    let msg = formatArgs(args);
    if (!isOwnLog(msg)) return;
    if (msg.includes("Đang chạy")) appendLog("▶ " + msg, "run");
    else if (msg.includes("Thành công")) appendLog("✔ " + msg, "ok");
    else if (msg.includes("Đã sử dụng") || msg.includes("Hết hạn") || msg.includes("Không hợp lệ")) appendLog("✘ " + msg, "bad");
    else if (msg.includes("HOÀN TẤT") || msg.includes("TỰ ĐỘNG") || msg.includes("KẾT QUẢ")) appendLog("◆ " + msg, "title");
    else appendLog(msg, "info");
  };

  console.warn = (...args) => { originalConsoleWarn(...args); let m = formatArgs(args); if (isOwnLog(m)) appendLog("⚠️ " + m, "warn"); };
  console.error = (...args) => { originalConsoleError(...args); let m = formatArgs(args); if (isOwnLog(m)) appendLog("❌ " + m, "bad"); };

  console.table = (data) => originalConsoleTable(data); 

  // ===== 3. CORE SCRIPT CHẠY ĐỔI CODE =====
  const startBtn = document.getElementById("ng-start-btn");
  const startBtnText = document.getElementById("ng-start-text");
  const retryBtn = document.getElementById("ng-retry-btn");
  const retryBtnText = document.getElementById("ng-retry-text");
  const progressBar = document.getElementById("ng-progress-bar");
  let isRunning = false;
  let stopRequested = false;
  let retryCodes = [];
  let sessionStats = { totalMs: 0 };
  let originalPageTitle = null;

  const updateRetryBtn = () => {
    retryBtn.disabled = isRunning || !retryCodes.length;
    retryBtnText.innerText = retryCodes.length ? `CHẠY LẠI (${retryCodes.length})` : "CHẠY LẠI";
  };

  const mergeSummary = (oldRows, newRows) => {
    const map = new Map((oldRows || []).map(r => [r.code, r]));
    (newRows || []).forEach(r => map.set(r.code, r));
    return [...map.values()].map((r, i) => ({ ...r, stt: `${i + 1}/${map.size}` }));
  };

  // ===== BÁO HOÀN TẤT =====
  let titleFlashTimer = null;
  let flashOriginalTitle = "";
  const onVisChange = () => { if (!document.hidden) stopTitleNotify(); };
  const stopTitleNotify = () => {
    if (titleFlashTimer) { clearInterval(titleFlashTimer); titleFlashTimer = null; }
    if (flashOriginalTitle) { document.title = flashOriginalTitle; flashOriginalTitle = ""; }
    window.removeEventListener("focus", stopTitleNotify);
    document.removeEventListener("visibilitychange", onVisChange);
    document.removeEventListener("click", stopTitleNotify);
  };
  let audioCtx = null;
  const ensureAudio = () => {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      if (!audioCtx || audioCtx.state === "closed") audioCtx = new Ctx();
      if (audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
      return audioCtx;
    } catch (_) { return null; }
  };
  const beepDone = () => {
    const ctx = ensureAudio();
    if (!ctx) return;
    [[880, 0], [1318.5, 0.18]].forEach(([freq, at]) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.type = "sine"; osc.frequency.value = freq;
      osc.connect(gain); gain.connect(ctx.destination);
      const t0 = ctx.currentTime + at;
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(0.15, t0 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.32);
      osc.start(t0); osc.stop(t0 + 0.34);
    });
  };
  const notifyDone = text => {
    beepDone();
    panel.classList.add("ng-done-glow");
    setTimeout(() => panel.classList.remove("ng-done-glow"), 3200);
    stopTitleNotify();
    flashOriginalTitle = document.title;
    if (document.hidden) {
      let flip = false;
      titleFlashTimer = setInterval(() => {
        flip = !flip;
        document.title = flip ? text : flashOriginalTitle;
      }, 900);
    } else {
      document.title = text;
    }
    window.addEventListener("focus", stopTitleNotify);
    document.addEventListener("visibilitychange", onVisChange);
    document.addEventListener("click", stopTitleNotify);
  };

  async function runCodes(codeList) {
    ensureAudio(); 
    stopTitleNotify();
    originalPageTitle = document.title;
    const runT0 = Date.now();
    isRunning = true;
    stopRequested = false;
    startBtn.classList.add("ng-running", "ng-stop-mode");
    startBtnText.innerText = "DỪNG";
    logBox.innerHTML = "";
    statusText.innerText = "Đang xử lý...";
    progressBar.style.width = "0%";
    summaryBtn.disabled = true;
    updateRetryBtn();

    const outcome = await startRedeemProcess(codeList.join("\n"));
    const stopped = stopRequested;

    if (outcome) {
      lastSummary = mergeSummary(lastSummary, outcome.rows);
      const hist = userConfig.skipTriedCodes ? loadCodeHistory() : {};
      retryCodes = [...new Set([
        ...outcome.unrun,
        ...lastSummary.filter(r => r.status === "NO_RESPONSE" || r.status === "TEMP_ERROR").map(r => r.code)
      ])].filter(c => !hist[c]);
    } else {
      retryCodes = [];
    }
    isRunning = false;
    stopRequested = false;
    startBtn.classList.remove("ng-running", "ng-stop-mode");
    startBtnText.innerText = "BẮT ĐẦU ĐỔI CODE";
    summaryBtn.disabled = !lastSummary.length;
    updateRetryBtn();
    sessionStats.totalMs += Date.now() - runT0;
    if (originalPageTitle !== null) { document.title = originalPageTitle; originalPageTitle = null; }
    statusText.innerText = outcome ? (stopped ? "Đã dừng theo yêu cầu" : "Hoàn tất!") : "Lỗi: chưa thấy ô nhập/nút Đổi!";
    appendLog("=== HOÀN TẤT QUÁ TRÌNH ===", "title");
    if (outcome && userConfig.notifyOnDone) {
      const okN = lastSummary.filter(r => r.status === "SUCCESS").length;
      notifyDone(stopped ? `⏹ ĐÃ DỪNG ${okN}/${lastSummary.length} CODE` : `✔ ${okN}/${lastSummary.length} CODE THÀNH CÔNG`);
    }
  }

  // Thống kê danh sách code theo thời gian thực 
  const codeInput = document.getElementById("ng-code-input");
  const codeStats = document.getElementById("ng-code-stats");
  const updateCodeStats = () => {
    const lines = codeInput.value.split(/\n+/).map(x => x.trim()).filter(Boolean);
    if (!lines.length) { codeStats.innerHTML = ""; codeStats.style.display = "none"; return; }
    codeStats.style.display = "flex";
    const uniq = [...new Set(lines)];
    const dupes = lines.length - uniq.length;
    const hist = loadCodeHistory();
    const tried = uniq.filter(c => hist[c]).length;
    codeStats.innerHTML = `<span class="ng-st-ok">▸ ${uniq.length} code</span>` +
      (dupes ? `<span class="ng-st-warn">sẽ bỏ ${dupes} trùng</span>` : "") +
      (tried ? `<span class="ng-st-bad">${tried} đã thử</span>` : "");
  };
  codeInput.addEventListener("input", updateCodeStats);
  updateCodeStats();

  // Nút dán nhanh từ clipboard
  document.getElementById("ng-paste-btn").onclick = async () => {
    try {
      const text = (await navigator.clipboard.readText() || "").trim();
      if (!text) { appendLog("📋 Clipboard trống — không có gì để dán", "warn"); return; }
      const cur = codeInput.value.trim();
      codeInput.value = cur ? cur + "\n" + text : text;
      updateCodeStats();
      appendLog(`📋 Đã dán ${text.split(/\n+/).filter(x => x.trim()).length} dòng từ clipboard`, "info");
    } catch (_) {
      appendLog("Không đọc được clipboard (bị chặn) — hãy dán tay bằng Ctrl+V vào ô nhập", "warn");
    }
  };
  document.getElementById("ng-clear-log-btn").onclick = () => { logBox.innerHTML = ""; };

  startBtn.onclick = function() {
    if (isRunning) { 
      stopRequested = true;
      startBtnText.innerText = "ĐANG DỪNG...";
      return;
    }
    const raw = codeInput.value;
    if (!raw || !raw.trim()) {
      appendLog("Vui lòng dán code vào ô trống!", "bad");
      return;
    }
    const allLines = raw.split(/\n+/).map(x => x.trim()).filter(Boolean);
    const codes = [...new Set(allLines)];
    if (allLines.length > codes.length) appendLog(`🧹 Bỏ ${allLines.length - codes.length} code trùng trong danh sách`, "warn");
    lastSummary = [];
    retryCodes = [];
    sessionStats = { totalMs: 0 };
    runCodes(codes);
  };

  retryBtn.onclick = () => {
    if (isRunning || !retryCodes.length) return;
    runCodes([...retryCodes]);
  };

  async function startRedeemProcess(rawText) {
	const CODES = rawText.split(/\n+/).map(x => x.trim()).filter(Boolean);

    const CONFIG = { ...userConfig };

    // Lọc code đã thử theo lịch sử
    let RUN_CODES = CODES;
    let skippedRows = [];
    if (CONFIG.skipTriedCodes) {
      const hist = loadCodeHistory();
      const tried = CODES.filter(c => hist[c]);
      if (tried.length) {
        RUN_CODES = CODES.filter(c => !hist[c]);
        console.log(`⏭ Bỏ qua ${tried.length} code đã thử trước đó: ${tried.map(c => `${c} (${hist[c].s})`).join(", ")}`);
        skippedRows = tried.map(c => ({ code: c, status: "SKIPPED", note: `đã thử lần trước: ${hist[c].s}` }));
      }
    }
    if (!RUN_CODES.length) {
      console.log("Tất cả code đều đã thử trước đó — không có gì để chạy.");
      return { rows: skippedRows.map(r => ({ ...r, stt: "", label: "Đã bỏ qua" })), unrun: [] };
    }
    
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const requestStarts = [], networkResponses = [];
    const originalFetch = window.fetch ? window.fetch.bind(window) : null;
    const originalXhrOpen = window.XMLHttpRequest && XMLHttpRequest.prototype.open;
    const originalXhrSend = window.XMLHttpRequest && XMLHttpRequest.prototype.send;
    let activeAttempt = null, attemptCounter = 0;

    const findCodeInPayload = payload => {
      if (payload == null) return "";
      if (typeof Request !== "undefined" && payload instanceof Request) return findCodeInPayload(payload.url);
      if (typeof URLSearchParams !== "undefined" && payload instanceof URLSearchParams) return findCodeInPayload(payload.toString());
      if (typeof FormData !== "undefined" && payload instanceof FormData) return findCodeInPayload([...payload.entries()].map(([k, v]) => `${k}=${v}`).join("&"));
      if (Array.isArray(payload)) return payload.map(findCodeInPayload).find(Boolean) || "";
      if (typeof payload === "object") { try { return findCodeInPayload(JSON.stringify(payload)); } catch (_) { return ""; } }
      const text = String(payload);
      return [...CODES].sort((a, b) => b.length - a.length).find(code => text.includes(code)) || "";
    };

    const captureResponse = (data, meta = {}) => {
      if (meta.attemptId && meta.requestCode && data && typeof data === "object" && "code" in data && ("msg" in data || "code_type" in data)) {
        networkResponses.push({ time: Date.now(), data, attemptId: meta.attemptId, requestCode: meta.requestCode });
      }
    };
    const captureRequestStart = meta => { if (meta.attemptId && meta.requestCode) requestStarts.push({ time: Date.now(), ...meta }); };

    if (originalFetch) {
      window.fetch = async (...args) => {
        const attempt = activeAttempt ? { ...activeAttempt } : null;
        const requestCode = findCodeInPayload(args);
        captureRequestStart({ attemptId: attempt?.id, requestCode });
        const response = await originalFetch(...args);
        response.clone().json().then(data => captureResponse(data, { attemptId: attempt?.id, requestCode })).catch(() => {});
        return response;
      };
    }
    if (originalXhrOpen && originalXhrSend) {
      XMLHttpRequest.prototype.open = function (...args) { this.__url = args[1]; return originalXhrOpen.apply(this, args); };
      XMLHttpRequest.prototype.send = function (...args) {
        const attempt = activeAttempt ? { ...activeAttempt } : null;
        const requestCode = findCodeInPayload([this.__url, args[0]]);
        captureRequestStart({ attemptId: attempt?.id, requestCode });
        this.addEventListener("loadend", () => { try { if (this.responseText?.trim()) captureResponse(JSON.parse(this.responseText), { attemptId: attempt?.id, requestCode }); } catch (_) {} });
        return originalXhrSend.apply(this, args);
      };
    }

    const visible = el => { if (!el) return false; const s = getComputedStyle(el), r = el.getBoundingClientRect(); return s.display !== "none" && s.visibility !== "hidden" && r.width > 0 && r.height > 0; };
    const setValue = (input, value) => { const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set; setter.call(input, value); input.dispatchEvent(new Event("input", { bubbles: true })); input.dispatchEvent(new Event("change", { bubbles: true })); input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true })); };
    const findInput = () => document.querySelector(".exc-input") || [...document.querySelectorAll("input")].find(el => visible(el) && !el.disabled && !el.readOnly);
    const findButton = () => document.querySelector(".btn-exchange") || [...document.querySelectorAll("a,button")].find(el => visible(el) && el.innerText.trim() === "Đổi");

    if (!findInput() || !findButton()) { console.error("Không tìm thấy ô nhập hoặc nút Đổi."); return null; }

    const getMessage = () => {
      const dialog = [...document.querySelectorAll('[role="dialog"], .dialog, .pop, .popup, .modal')].find(visible);
      if (dialog && dialog.innerText.trim()) return { source: "dialog", text: dialog.innerText.replace(/\s+/g, " ").trim() };
      const tip = document.querySelector("#superTips, .super-tips");
      if (tip && tip.innerText.trim()) return { source: "tip", text: tip.innerText.replace(/\s+/g, " ").trim() };
      return { source: "", text: "" };
    };
    const getResponseMessage = attempt => {
      const item = networkResponses.filter(x => x.attemptId === attempt.id && x.requestCode === attempt.code).sort((a, b) => a.time - b.time)[0];
      if (!item) return { source: "", text: "" };
      const r = item.data, code = Number(r.code);
      if (code === 0) return { source: "response", text: "ok" };
      if (Number.isFinite(code)) return { source: "response", text: `error_hint_${code}` };
      return { source: "response", text: String(r.msg || "") };
    };
    const clickRedeem = btn => { if (typeof MouseEvent !== "function") return btn.click(); btn.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true })); btn.dispatchEvent(new MouseEvent("mousedown", { bubbles: true })); btn.dispatchEvent(new MouseEvent("pointerup", { bubbles: true })); btn.dispatchEvent(new MouseEvent("mouseup", { bubbles: true })); btn.click(); };
    const closeDialog = () => { const d = [...document.querySelectorAll('[role="dialog"], .dialog, .pop, .popup, .modal')].find(visible); if (!d) return; const c = d.querySelector("a[href='javascript:void(0);'], .close, .btn-close") || [...d.querySelectorAll("a,button")].find(visible); if (c) c.click(); };
    const clearOldMessage = async () => { const t = document.querySelector("#superTips, .super-tips"); if (t) t.textContent = ""; closeDialog(); await sleep(120); if (t) t.textContent = ""; closeDialog(); };

    const classify = msg => {
      const t = (msg || "").toLowerCase();
      if (/^ok$|thành công|success/.test(t)) return "SUCCESS";
      if (/error_hint_400067|reached the redemption limit|limit of cdkey group|đạt giới hạn/.test(t)) return "LIMIT_REACHED";
      if (/error_hint_400068|hết hạn|expired/.test(t)) return "EXPIRED";
      if (/error_hint_400073|current cdkey present error/.test(t)) return "PRESENT_ERROR";
      if (/không hợp lệ|invalid|sai|current cdk does not match|error_hint_400054/.test(t)) return "INVALID";
      if (/đã.*(nhận|sử dụng)|already|used/.test(t)) return "USED";
      if (/captcha|xác minh|verification/.test(t)) return "VERIFY";
      if (/lỗi mạng|network|rate|quá nhanh|too fast/.test(t)) return "TEMP_ERROR";
      return msg ? "OTHER" : "NO_RESPONSE";
    };
    const STATUS_LABELS = { SUCCESS: "Thành công", LIMIT_REACHED: "Đã sử dụng", EXPIRED: "Hết hạn", PRESENT_ERROR: "Lỗi quà", INVALID: "Không hợp lệ", USED: "Đã dùng", VERIFY: "Cần xác minh", TEMP_ERROR: "Lỗi tạm thời", NO_RESPONSE: "Không thấy phản hồi", SKIPPED: "Đã bỏ qua", OTHER: "Khác" };
    const displayMessage = r => {
      if (/^error_hint_\d+$/i.test(r.message || "")) return ""; // Ẩn mã lỗi thô error_hint_*
      return (r.status === "SUCCESS" && r.message === "ok") ? "Đã nhận thành công" : r.message;
    };

    const redeemOne = async (code, index, total) => {
      for (let attempt = 1; attempt <= CONFIG.maxRetries + 1; attempt++) {
        await clearOldMessage();
        const inp = findInput(), btn = findButton();
        if (!inp || !btn) return { stt: `${index}/${total}`, code, status: "OTHER", message: "Không tìm thấy ô nhập hoặc nút Đổi." };
        
        setValue(inp, ""); await sleep(50); setValue(inp, code); await sleep(80);
        console.log(`%c[${index}/${total}] Đang chạy%c ${code}`, "", "");
        
        requestStarts.length = 0; networkResponses.length = 0;
        const start = Date.now();
        const attemptMeta = { id: ++attemptCounter, code, startedAt: start };
        activeAttempt = attemptMeta;

        let requestSent = false;
        for (let tryI = 1; tryI <= CONFIG.submitClickRetries + 1; tryI++) {
          const subBtn = tryI === 1 ? btn : findButton();
          if (!subBtn) break;
          clickRedeem(subBtn);
          const confirmStart = Date.now();
          while (Date.now() - confirmStart < CONFIG.submitConfirmMs) { await sleep(50); if (requestStarts.some(x => x.attemptId === attemptMeta.id) || getResponseMessage(attemptMeta).text) { requestSent = true; break; } }
          if (requestSent) break;
        }

        let msg = { source: "", text: "" };
        while (Date.now() - start < CONFIG.timeoutMs) {
          await sleep(CONFIG.pollMs);
          msg = getResponseMessage(attemptMeta);
          if (msg.text) break;
          if (Date.now() - start >= 500) { msg = getMessage(); if (msg.text) break; }
        }

        let status = classify(msg.text);
        if (status === "SUCCESS" && msg.source !== "response") { status = "NO_RESPONSE"; msg.text = "(popup thành công nhưng chưa bắt được phản hồi mạng)"; }
        closeDialog();
        if (activeAttempt?.id === attemptMeta.id) activeAttempt = null;

        if (!["TEMP_ERROR", "NO_RESPONSE"].includes(status)) {
          return { stt: `${index}/${total}`, code, status, message: msg.text || "(không thấy phản hồi)" };
        }
        if (attempt <= CONFIG.maxRetries) await sleep(CONFIG.retryDelayMs);
      }
      return { stt: `${index}/${total}`, code, status: "NO_RESPONSE", message: "(không thấy phản hồi)" };
    };

    const waitCountdown = async (ms, done, total) => {
      if (ms <= 0) return;
      const t0 = Date.now();
      while (Date.now() - t0 < ms) {
        if (stopRequested) return;
        const left = ms - (Date.now() - t0);
        statusText.innerText = `Đã đổi ${done}/${total} · code tiếp sau ${(left / 1000).toFixed(1)}s`;
        await sleep(Math.min(100, left));
      }
    };

    const runBatch = async (codes, title) => {
      const results = [];
      const total = codes.length;
      let backoffMs = 0;
      if (title) console.log(`%c${title}`, "");
      for (let i = 0; i < codes.length; i++) {
        if (stopRequested) { console.log(`⏹ ĐÃ DỪNG — đã xử lý ${i}/${total}, còn ${total - i} code chưa chạy`); break; }
        statusText.innerText = `Đang đổi ${i + 1}/${total}...`;
        document.title = `▶ ${i + 1}/${total} · DF Auto Redeem`;
        const r = await redeemOne(codes[i], i + 1, total);
        results.push(r);
        const note = displayMessage(r);
        console.log(`%c[${r.stt}] ${STATUS_LABELS[r.status]}%c ${r.code}${note ? `: ${note}` : ""}`, "", "");
        progressBar.style.width = (((i + 1) / total) * 100).toFixed(1) + "%";
        if (r.status === "TEMP_ERROR") {
          backoffMs = Math.min(backoffMs ? backoffMs * 2 : CONFIG.delayBetweenCodesMs, 10000);
          appendLog(`⚠ Bị giới hạn tốc độ — nghỉ thêm ${backoffMs}ms trước code kế tiếp`, "warn");
        } else {
          backoffMs = 0;
        }
        const baseGap = CONFIG.delayBetweenCodesMs > 0 ? (CONFIG.jitterDelay ? Math.round(CONFIG.delayBetweenCodesMs * (0.8 + Math.random() * 0.4)) : CONFIG.delayBetweenCodesMs) : 0;
        await waitCountdown(baseGap + backoffMs, i + 1, total);
      }
      return results;
    };

    // Restore Hooks function
    const restoreHooks = () => {
      if (originalFetch) window.fetch = originalFetch;
      if (originalXhrOpen && originalXhrSend) { XMLHttpRequest.prototype.open = originalXhrOpen; XMLHttpRequest.prototype.send = originalXhrSend; }
    };

    console.log("%cTỰ ĐỘNG ĐỔI CODE DELTA FORCE", "");
    console.log(`Tổng code: ${CODES.length}${RUN_CODES.length < CODES.length ? ` (chạy ${RUN_CODES.length})` : ""}`);
    console.log(`Tốc độ: nghỉ ~${CONFIG.delayBetweenCodesMs}ms${CONFIG.jitterDelay ? " (±20% ngẫu nhiên)" : ""}/code · chờ phản hồi ${CONFIG.timeoutMs}ms · bấm Đổi ${CONFIG.submitClickRetries} lần · thử lại ${CONFIG.maxRetries}`);

    const results = await runBatch(RUN_CODES);

    // Ghi lịch sử code đã có kết quả 
    const hist = loadCodeHistory();
    results.forEach(r => { if (TERMINAL_STATUSES.includes(r.status)) hist[r.code] = { s: STATUS_LABELS[r.status] || r.status, t: Date.now() }; });
    saveCodeHistory(hist);
    
    const okCount = results.filter(r => r.status === "SUCCESS").length;
    console.log(`%cKẾT QUẢ TỔNG KẾT%c ${okCount}/${results.length} code thành công — nhấn nút TỔNG KẾT để xem chi tiết`, "", "");

    restoreHooks();
    const doneCodes = new Set(results.map(r => r.code));
    const unrun = stopRequested ? RUN_CODES.filter(c => !doneCodes.has(c)) : [];
    const rows = [
      ...skippedRows.map(r => ({ ...r, stt: "", label: STATUS_LABELS[r.status] || "Đã bỏ qua" })),
      ...results.map(r => ({ stt: r.stt, code: r.code, status: r.status, label: STATUS_LABELS[r.status] || "Khác", note: displayMessage(r) || "" }))
    ];
    return { rows, unrun };
  }
})();