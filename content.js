(function() {
  // ===== 1. TẠO GIAO DIỆN NGƯỜI DÙNG (UI) =====
  const ICONS = {
    delta: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="miter"><path d="M12 3.5 20.5 20h-17Z"/><path d="M12 12.5V16M10.25 14.25h3.5" stroke-linecap="round"/></svg>`,
    crosshair: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="6.5"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/><circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"/></svg>`,
    ticket: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 1 0-6V6H3Z"/><path d="M15 8.5v7" stroke-dasharray="2.4 2.6" stroke-linecap="round"/></svg>`,
    clipboard: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
    cloudDL: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 0-5.8 4.6A4.5 4.5 0 0 0 5.5 15H7m10 0h1.5A4.5 4.5 0 0 0 18 6.6 6 6 0 0 0 12 2Z"/><path d="M12 18v4m0-4-3 3m3-3 3 3"/></svg>`,
    trash: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6M14 11v6"/></svg>`,
    stopwatch: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2h5"/><path d="M12 2v3"/><circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 2"/></svg>`,
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
    <div id="ng-update-banner" style="display:none" title="Mở trang GitHub để tải bản mới">
      <span class="ng-upd-ico">🆕</span>
      <span>Có bản mới <b id="ng-upd-ver"></b> — bấm để tải</span>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    </div>
    <div id="ng-body">
      <div class="ng-field-label">${ICONS.ticket}<span>MÃ GIFT CODE</span><button id="ng-remote-btn" class="ng-mini-btn" title="Tải code từ nguồn và dán vào ô">${ICONS.cloudDL}</button><button id="ng-paste-btn" class="ng-mini-btn" title="Dán danh sách code từ clipboard">${ICONS.clipboard}</button></div>
      <textarea id="ng-code-input" placeholder="Dán danh sách code vào đây, mỗi code một dòng..."></textarea>
      <div id="ng-code-stats"></div>
      <div class="ng-btn-row">
        <button id="ng-start-btn">${ICONS.crosshair}<span id="ng-start-text">BẮT ĐẦU</span></button>
        <button id="ng-retry-btn" disabled title="Chạy lại code lỗi / chưa chạy xong khi dừng">${ICONS.retry}<span id="ng-retry-text">CHẠY LẠI</span></button>
        <button id="ng-summary-btn" disabled title="Xem kết quả tổng kết">${ICONS.table}<span>TỔNG KẾT</span></button>
      </div>
      <div id="ng-cur-card">
        <div class="ng-cur-row1">
          <span class="ng-cur-ico">${ICONS.stopwatch}</span>
          <span id="ng-cur-code">·····</span>
          <span id="ng-cur-timer"></span>
        </div>
        <div id="ng-cur-sub">Sẵn sàng...</div>
        <div id="ng-cur-cd"><div id="ng-cur-cd-fill"></div></div>
      </div>
      <div id="ng-stats-box">
        <div class="ng-stat-row">
          <div class="ng-stat ng-st-ok" data-k="ok" title="Đổi thành công"><div class="ng-stat-top"><span class="ng-stat-led"></span><span class="ng-stat-num">0</span></div><span class="ng-stat-lbl">THÀNH CÔNG</span></div>
          <div class="ng-stat ng-st-used" data-k="used" title="Đã dùng / đạt giới hạn"><div class="ng-stat-top"><span class="ng-stat-led"></span><span class="ng-stat-num">0</span></div><span class="ng-stat-lbl">ĐÃ DÙNG</span></div>
          <div class="ng-stat ng-st-fail" data-k="fail" title="Hết hạn / sai / lỗi quà"><div class="ng-stat-top"><span class="ng-stat-led"></span><span class="ng-stat-num">0</span></div><span class="ng-stat-lbl">LỖI</span></div>
          <div class="ng-stat ng-st-remain" data-k="remain" title="Chưa chạy"><div class="ng-stat-top"><span class="ng-stat-led"></span><span class="ng-stat-num">0</span></div><span class="ng-stat-lbl">CÒN LẠI</span></div>
        </div>
        <div id="ng-stat-ratio" title="Tỉ lệ kết quả theo tổng số code"><i class="rs rs-ok"></i><i class="rs rs-used"></i><i class="rs rs-fail"></i><i class="rs rs-other"></i></div>
      </div>
      <div id="ng-log-container">
        <div class="ng-log-title">${ICONS.terminal}<span>Nhật ký hoạt động</span><button id="ng-clear-log-btn" class="ng-mini-btn" title="Xoá nhật ký">${ICONS.trash}</button></div>
        <div id="ng-log-box"></div>
      </div>
      <div id="ng-credit">Được phát triển bởi <b>Minh Khương</b> <span class="heart">❤</span></div>
    </div>
  `;

  // CSS
  const style = document.createElement("style");
  style.innerHTML = `
    #redeem-ui {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 420px;
      background: #0c1420;
      border: 1px solid #273b4f;
      border-radius: 16px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,255,200,0.06);
      z-index: 999999;
      font-family: Tahoma, "Segoe UI", Arial, sans-serif;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      max-height: 90vh;
      overflow: hidden;
    }
    #ng-header {
      flex-shrink: 0;
      background: linear-gradient(135deg, #00e8bd, #00c4a1 55%, #00a4d2);
      color: #01241d;
      padding: 10px 14px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: move;
      gap: 8px;
      letter-spacing: 0.5px;
      border-radius: 16px 16px 0 0;
    }
    #ng-title { display: flex; align-items: center; gap: 8px; }
    #ng-title span { font-size: 15px; font-weight: 800; letter-spacing: 0.8px; }
    #ng-title svg { background: rgba(2,28,23,0.22); padding: 5px; border-radius: 9px; }
    #ng-update-banner {
      flex-shrink: 0;
      display: flex; align-items: center; gap: 8px;
      padding: 7px 12px;
      background: linear-gradient(90deg, rgba(255,179,0,0.14), rgba(255,140,0,0.05));
      border-bottom: 1px solid rgba(255,186,0,0.4);
      color: #ffcf7d; font-size: 12px; font-weight: 700;
      cursor: pointer; transition: 0.2s; letter-spacing: 0.2px;
    }
    #ng-update-banner:hover { background: linear-gradient(90deg, rgba(255,179,0,0.24), rgba(255,140,0,0.1)); }
    #ng-update-banner b { color: #ffe3ad; }
    #ng-update-banner .ng-upd-ico {
      flex: none; width: 20px; height: 20px; border-radius: 7px;
      display: flex; align-items: center; justify-content: center;
      background: rgba(255,186,0,0.16); font-size: 11px;
    }
    #ng-update-banner svg { margin-left: auto; flex: none; opacity: 0.75; transition: transform 0.2s; }
    #ng-update-banner:hover svg { transform: translateX(2px); opacity: 1; }
    #ng-title svg, #ng-minimize svg, #ng-start-btn svg, #ng-retry-btn svg, #ng-summary-btn svg, #ng-settings-btn svg, .ng-field-label svg, .ng-log-title svg, #ng-sum-header svg, #ng-sum-close svg, #ng-set-header svg, #ng-set-close svg { display: block; flex: none; }
    #ng-header-actions { display: flex; align-items: center; gap: 4px; }
    #ng-settings-btn, #ng-minimize { background: rgba(2, 28, 23, 0.22); border: none; color: #01241d; width: 30px; height: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; border-radius: 8px; transition: 0.2s; }
    #ng-settings-btn:hover, #ng-minimize:hover { background: rgba(2, 28, 23, 0.38); }
    #ng-stats-box {
      flex-shrink: 0;
      background: #0a121d;
      border: 1px solid #1d2f44;
      border-radius: 12px;
      padding: 7px 8px 8px;
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    .ng-stat-row { display: grid; grid-template-columns: repeat(4, 1fr); }
    .ng-stat { position: relative; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 3px 0 2px; border-radius: 9px; transition: background 0.2s; }
    .ng-stat:hover { background: rgba(255,255,255,0.03); }
    .ng-stat + .ng-stat::before { content: ""; position: absolute; left: 0; top: 18%; bottom: 18%; width: 1px; background: #1d2f44; }
    .ng-stat-top { display: flex; align-items: center; gap: 6px; }
    .ng-stat-led { width: 7px; height: 7px; border-radius: 50%; background: currentColor; box-shadow: 0 0 7px currentColor; }
    .ng-stat-num { font-family: Consolas, "Courier New", monospace; font-size: 16px; font-weight: bold; line-height: 1; color: inherit; display: inline-block; }
    .ng-stat-lbl { font-size: 9px; font-weight: bold; letter-spacing: 0.7px; color: #7d95ac; }
    .ng-stat.ng-st-ok { color: #00e676; }
    .ng-stat.ng-st-used { color: #ffc400; }
    .ng-stat.ng-st-fail { color: #ff6b78; }
    .ng-stat.ng-st-remain { color: #b388ff; }
    .ng-stat-num.ng-stat-pop { animation: ng-stat-pop 0.45s cubic-bezier(0.2, 2.2, 0.4, 1); }
    @keyframes ng-stat-pop { 0% { transform: scale(1); } 35% { transform: scale(1.45); } 100% { transform: scale(1); } }
    #ng-stat-ratio { height: 4px; border-radius: 99px; background: #101b29; overflow: hidden; display: flex; }
    #ng-stat-ratio .rs { height: 100%; width: 0%; transition: width 0.35s ease; }
    #ng-stat-ratio .rs-ok { background: #00e676; }
    #ng-stat-ratio .rs-used { background: #ffc400; }
    #ng-stat-ratio .rs-fail { background: #ff6b78; }
    #ng-stat-ratio .rs-other { background: #b388ff; }
	.heart { color: #ff5f70; display: inline-block; animation: beat 1.4s infinite; }
    #ng-body {
      flex: 1 1 auto;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      overflow-y: auto;
      min-height: 0;
    }
    .ng-field-label { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: bold; color: #8fa8bf; letter-spacing: 0.5px; margin-bottom: 4px; }
    .ng-mini-btn { margin-left: auto; background: transparent; border: none; color: inherit; width: 26px; height: 24px; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; border-radius: 7px; opacity: 0.7; transition: 0.2s; }
    .ng-mini-btn:hover { color: #00ffc8; opacity: 1; background: rgba(0,255,200,0.1); }
    .ng-mini-btn svg { display: block; flex: none; }
    #ng-code-input {
      width: 100%;
      min-height: 80px;
      max-height: 100px;
      height: auto;
      background: #131f2e;
      border: 1px solid #24374b;
      color: #fff;
      border-radius: 10px;
      padding: 10px 12px;
      box-sizing: border-box;
      resize: vertical;
      font-family: Consolas, "Courier New", monospace;
      font-size: 13px;
      line-height: 1.6;
      overflow-y: auto;
      transition: 0.2s;
    }
    #ng-code-input:focus { outline: none; border-color: rgba(0,255,200,0.55); box-shadow: 0 0 0 3px rgba(0,255,200,0.08); }
    #ng-code-input::placeholder { color: #5c7389; }
    #ng-code-stats { font-size: 11px; color: #8fa8bf; display: flex; gap: 6px; flex-wrap: wrap; margin-top: 2px; }
    #ng-code-stats span { padding: 2px 10px; border-radius: 99px; border: 1px solid; background: rgba(255,255,255,0.02); font-weight: 600; }
    #ng-code-stats .ng-st-ok { color: #3dffb8; border-color: rgba(0,255,200,0.35); }
    #ng-code-stats .ng-st-warn { color: #ffc400; border-color: rgba(255,196,0,0.35); }
    #ng-code-stats .ng-st-bad { color: #ff6b78; border-color: rgba(255,82,82,0.35); }
    #ng-start-btn { position: relative; overflow: hidden; grid-column: 1 / -1; background: linear-gradient(135deg, #19ffbf, #00c8e8); color: #01241d; border: none; padding: 11px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; box-shadow: 0 6px 16px -6px rgba(0,230,190,0.5); font-size: 14px; }
    #ng-start-btn::after { content: ""; position: absolute; top: 0; left: -60%; width: 40%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent); transform: skewX(-20deg); animation: ng-shine 3.2s infinite; }
    @keyframes ng-shine { 0% { left: -60%; } 55%, 100% { left: 135%; } }
    #ng-start-btn.ng-running svg { animation: ng-scan 1.1s linear infinite; }
    @keyframes ng-scan { to { transform: rotate(360deg); } }
    #ng-start-btn:hover { filter: brightness(1.06); box-shadow: 0 9px 20px -6px rgba(0,230,190,0.6); }
    #ng-start-btn.ng-stop-mode { background: linear-gradient(135deg, #ff6b78, #ff4757); color: #fff; box-shadow: 0 6px 16px -6px rgba(255,82,82,0.5); }
    #ng-start-btn.ng-stop-mode:hover { filter: brightness(1.06); }
    #ng-start-btn:disabled { background: #2a3b4d; color: #7d95ac; cursor: not-allowed; box-shadow: none; }
    #ng-start-btn:disabled::after { display: none; }
    .ng-btn-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 2px; }
    #ng-summary-btn { background: rgba(0,255,200,0.05); color: #00ffc8; border: 1px solid rgba(0,255,200,0.55); padding: 10px 12px; border-radius: 10px; font-weight: bold; font-size: 12px; letter-spacing: 0.5px; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 6px; white-space: nowrap; }
    #ng-summary-btn:hover:not(:disabled) { background: rgba(0,255,200,0.13); border-color: #00ffc8; }
    #ng-summary-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    #ng-retry-btn { background: rgba(255,196,0,0.05); color: #ffc400; border: 1px solid rgba(255,196,0,0.55); padding: 10px 12px; border-radius: 10px; font-weight: bold; font-size: 12px; letter-spacing: 0.5px; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 6px; white-space: nowrap; }
    #ng-retry-btn:hover:not(:disabled) { background: rgba(255,196,0,0.13); border-color: #ffc400; }
    #ng-retry-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    #ng-cur-card { flex-shrink: 0; background: #0a121d; border: 1px solid #1d2f44; border-radius: 12px; padding: 9px 12px 10px; display: flex; flex-direction: column; gap: 6px; transition: border-color 0.25s, box-shadow 0.25s; }
    #ng-cur-card.ng-cur-live { border-color: rgba(0,255,200,0.45); box-shadow: 0 0 0 1px rgba(0,255,200,0.1), 0 0 18px -6px rgba(0,255,200,0.3); }
    .ng-cur-row1 { display: flex; align-items: center; gap: 9px; min-width: 0; }
    .ng-cur-ico { display: flex; align-items: center; flex: none; color: #55708a; transition: color 0.25s; }
    #ng-cur-card.ng-cur-live .ng-cur-ico { color: #00ffc8; animation: ng-cur-spin 0.9s linear infinite; }
    @keyframes ng-cur-spin { to { transform: rotate(360deg); } }
    #ng-cur-code { flex: 1 1 auto; min-width: 0; font-family: Consolas, "Courier New", monospace; font-size: 17px; font-weight: bold; letter-spacing: 1px; color: #6d8aa5; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: color 0.2s, text-shadow 0.2s; }
    #ng-cur-card.ng-cur-live #ng-cur-code { color: #fff; text-shadow: 0 0 12px rgba(0,255,200,0.45); }
    #ng-cur-timer { flex: none; font-family: Consolas, "Courier New", monospace; font-size: 11.5px; font-weight: bold; color: #ffc400; background: rgba(255,196,0,0.08); border: 1px solid rgba(255,196,0,0.35); padding: 2px 8px; border-radius: 99px; }
    #ng-cur-timer:empty { display: none; }
    #ng-cur-timer.ng-cur-low { color: #ff6b78; background: rgba(255,82,82,0.1); border-color: rgba(255,82,82,0.55); animation: ng-cur-blink 0.5s steps(2) infinite; }
    @keyframes ng-cur-blink { 50% { opacity: 0.55; } }
    #ng-cur-sub { font-size: 12px; font-weight: bold; color: #8fa8bf; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    #ng-cur-sub.ng-sub-run { color: #00c8ff; }
    #ng-cur-sub.ng-sub-ok { color: #00e676; }
    #ng-cur-sub.ng-sub-bad { color: #ff6b78; }
    #ng-cur-sub.ng-sub-warn { color: #ffc400; }
    #ng-cur-cd { height: 5px; border-radius: 99px; background: #101b29; border: 1px solid #1d2f44; overflow: hidden; }
    #ng-cur-cd-fill { height: 100%; width: 0%; background: linear-gradient(90deg, #00ffc8, #00c8ff); border-radius: 99px; transition: width 0.12s linear; }
    #ng-cur-cd-fill.ng-cur-low { background: linear-gradient(90deg, #ffc400, #ff6b78); }
    .ng-done-glow { animation: ng-done-pulse 0.8s ease-in-out 4; }
    @keyframes ng-done-pulse { 0%, 100% { box-shadow: 0 12px 40px rgba(0,0,0,0.55); } 50% { box-shadow: 0 0 0 3px rgba(0,255,200,0.8), 0 0 26px rgba(0,255,200,0.65); } }
    #ng-log-container { display: flex; flex-direction: column; flex: 1; min-height: 0; margin-top: 2px; }
    .ng-log-title { font-size: 12px; color: #7d95ac; margin-bottom: 4px; display: flex; align-items: center; gap: 6px; }
    #ng-log-box {
      flex: 0 0 auto;
      background: #0e1826;
      border: 1px solid #24374b;
      padding: 10px 12px;
      height: 50px;
      overflow-y: auto;
      font-family: Consolas, "Courier New", monospace;
      font-size: 12.5px;
      line-height: 1.7;
      border-radius: 10px;
    }
    #ng-log-box:focus-within { border-color: rgba(0,255,200,0.3); }
    #ng-credit {
      flex-shrink: 0;
      text-align: center;
      font-size: 10px;
      color: #5c7389;
      letter-spacing: 0.3px;
      padding: 8px 0 12px;
      border-top: 1px solid #182534;
      background: #0c1420;
    }
    #ng-credit b { color: #00ffc8; font-weight: normal; }
    .log-line { margin-bottom: 2px; word-wrap: break-word; white-space: pre-wrap; }
    .log-time { color: #5c7389; margin-right: 6px; font-size: 11px; }
    .log-ok { color: #00e676; }
    .log-bad { color: #ff6b78; }
    .log-warn { color: #ffc400; }
    .log-info { color: #b388ff; }
    .log-run { color: #00c8ff; }
    .log-title { color: #00ffc8; font-weight: bold; }
    #ng-summary-modal, #ng-settings-modal { position: fixed; inset: 0; background: rgba(5,10,16,0.72); z-index: 2147483647; display: flex; align-items: center; justify-content: center; font-family: Tahoma, "Segoe UI", Arial, sans-serif; font-size: 14px; }
    #ng-sum-card, #ng-set-card { width: 500px; max-width: 92vw; max-height: 80vh; background: #0c1420; border: 1px solid #273b4f; border-radius: 16px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 18px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,255,200,0.06); color: #fff; animation: ng-pop 0.25s ease; }
    @keyframes ng-pop { from { opacity: 0; transform: scale(0.96) translateY(8px); } to { opacity: 1; transform: none; } }
    #ng-sum-header { background: linear-gradient(135deg, #00e8bd, #00c4a1 55%, #00a4d2); color: #01241d; padding: 9px 12px; font-weight: bold; display: flex; justify-content: space-between; align-items: center; letter-spacing: 0.5px; }
    #ng-sum-header > span { display: flex; align-items: center; gap: 7px; }
    #ng-sum-close { background: rgba(2, 28, 23, 0.22); border: none; color: #01241d; width: 28px; height: 26px; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; border-radius: 8px; transition: 0.2s; }
    #ng-sum-close:hover { background: rgba(2, 28, 23, 0.38); }
    #ng-sum-stats { display: flex; flex-wrap: wrap; gap: 6px; padding: 10px 12px 8px; }
    .ng-pill { font-size: 12px; font-weight: bold; padding: 3px 12px; border-radius: 99px; border: 1px solid; cursor: pointer; user-select: none; transition: 0.15s; }
    .ng-pill:hover { filter: brightness(1.3); }
    .ng-pill.ng-pill-active { box-shadow: 0 0 0 2px rgba(255,255,255,0.35); }
    .ng-pill.cat-total { color: #00ffc8; border-color: rgba(0,255,200,0.55); background: rgba(0,255,200,0.07); }
    .ng-pill.cat-ok { color: #00e676; border-color: rgba(0,230,118,0.55); background: rgba(0,230,118,0.07); }
    .ng-pill.cat-bad { color: #ff6b78; border-color: rgba(255,82,82,0.55); background: rgba(255,82,82,0.07); }
    .ng-pill.cat-warn { color: #ffc400; border-color: rgba(255,196,0,0.55); background: rgba(255,196,0,0.07); }
    .ng-pill.cat-info { color: #b388ff; border-color: rgba(179,136,255,0.55); background: rgba(179,136,255,0.07); }
    #ng-sum-scroll { overflow-y: auto; padding: 0 12px 10px; }
    #ng-sum-table { width: 100%; border-collapse: collapse; font-size: 12px; }
    #ng-sum-table th { text-align: left; color: #8fa8bf; font-size: 11px; letter-spacing: 0.5px; border-bottom: 1px solid #273b4f; padding: 6px 8px; position: sticky; top: 0; background: #0c1420; }
    #ng-sum-table td { padding: 6px 8px; border-bottom: 1px solid #182534; word-break: break-all; }
    #ng-sum-table tr:hover td { background: rgba(0,255,200,0.03); }
    #ng-sum-footer { display: flex; flex-wrap: wrap; gap: 14px; padding: 8px 12px 10px; border-top: 1px solid #182534; font-size: 12px; color: #8fa8bf; align-items: center; }
    #ng-sum-footer b { color: #00ffc8; }
    #ng-sum-actions { margin-left: auto; display: flex; gap: 6px; }
    #ng-sum-copy, #ng-sum-csv { background: rgba(0,255,200,0.05); color: #00ffc8; border: 1px solid rgba(0,255,200,0.45); padding: 6px 10px; border-radius: 8px; font-weight: bold; font-size: 11px; letter-spacing: 0.4px; cursor: pointer; transition: 0.2s; font-family: inherit; }
    #ng-sum-copy:hover, #ng-sum-csv:hover { background: rgba(0,255,200,0.13); border-color: #00ffc8; }
    tr.ng-row-ok td { color: #00e676; }
    tr.ng-row-bad td { color: #ff6b78; }
    tr.ng-row-warn td { color: #ffc400; }
    tr.ng-row-info td { color: #b388ff; }
    #ng-set-header { background: linear-gradient(135deg, #00e8bd, #00c4a1 55%, #00a4d2); color: #01241d; padding: 9px 12px; font-weight: bold; display: flex; justify-content: space-between; align-items: center; letter-spacing: 0.5px; }
    #ng-set-header > span { display: flex; align-items: center; gap: 7px; }
    #ng-set-close { background: rgba(2, 28, 23, 0.22); border: none; color: #01241d; width: 28px; height: 26px; display: flex; align-items: center; justify-content: center; cursor: pointer; padding: 0; border-radius: 8px; transition: 0.2s; }
    #ng-set-close:hover { background: rgba(2, 28, 23, 0.38); }
    #ng-set-body { padding: 12px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }
    .ng-set-row { display: grid; grid-template-columns: 1fr 110px; gap: 10px; align-items: center; }
    .ng-set-label { font-size: 13px; font-weight: bold; }
    .ng-set-hint { font-size: 11px; color: #8fa8bf; margin-top: 2px; }
    .ng-set-input { width: 100%; background: #131f2e; border: 1px solid #24374b; color: #fff; border-radius: 10px; padding: 7px 10px; box-sizing: border-box; font-family: inherit; font-size: 13px; transition: 0.2s; }
    .ng-set-input:focus { outline: none; border-color: rgba(0,255,200,0.55); box-shadow: 0 0 0 3px rgba(0,255,200,0.08); }
    #ng-set-actions { display: flex; gap: 8px; padding: 0 12px 12px; }
    #ng-set-save { flex: 1; background: linear-gradient(135deg, #19ffbf, #00c8e8); color: #01241d; border: none; padding: 9px; border-radius: 10px; font-weight: bold; cursor: pointer; transition: 0.2s; box-shadow: 0 6px 14px -6px rgba(0,230,190,0.45); }
    #ng-set-save:hover { filter: brightness(1.06); }
    #ng-set-reset { background: rgba(0,255,200,0.05); color: #00ffc8; border: 1px solid rgba(0,255,200,0.55); padding: 9px 12px; border-radius: 10px; font-weight: bold; font-size: 12px; cursor: pointer; transition: 0.2s; white-space: nowrap; }
    #ng-set-reset:hover { background: rgba(0,255,200,0.13); }
    #ng-set-presets { display: flex; gap: 8px; }
    #ng-set-presets button { flex: 1; background: #131f2e; color: #8fa8bf; border: 1px solid #24374b; padding: 8px 4px; border-radius: 9px; font-size: 11px; font-weight: bold; cursor: pointer; transition: 0.2s; letter-spacing: 0.3px; }
    #ng-set-presets button:hover { color: #00ffc8; border-color: rgba(0,255,200,0.55); background: rgba(0,255,200,0.06); }
    .ng-set-check { display: flex; align-items: center; justify-content: flex-end; }
    .ng-set-check input { width: 18px; height: 18px; accent-color: #00ffc8; cursor: pointer; }
    #ng-set-clear-hist { background: rgba(255,82,82,0.05); color: #ff6b78; border: 1px solid rgba(255,82,82,0.55); padding: 9px 10px; border-radius: 10px; font-weight: bold; font-size: 11px; cursor: pointer; transition: 0.2s; white-space: nowrap; }
    #ng-set-clear-hist:hover { background: rgba(255,82,82,0.14); }

    /* ===== ĐIỆN THOẠI / MÀN HẸP (extension trên Kiwi, Lemur, Edge Canary...) ===== */
    #ng-header { touch-action: none; -webkit-user-select: none; user-select: none; }
    #redeem-ui, #ng-sum-card, #ng-set-card, #ng-summary-modal, #ng-settings-modal { box-sizing: border-box; }
    #redeem-ui button, #ng-sum-card button, #ng-set-card button { touch-action: manipulation; }
    html.ng-df-mobile #redeem-ui {
      right: 8px; left: auto;
      bottom: calc(8px + var(--ng-kb, 0px));
      width: min(calc(100vw - 16px), 460px);
      max-height: 86vh; max-height: 86dvh;
      border-radius: 14px;
    }
    html.ng-df-mobile #ng-header { border-radius: 14px 14px 0 0; padding: 8px 10px; }
    html.ng-df-mobile #ng-settings-btn, html.ng-df-mobile #ng-minimize { width: 36px; height: 32px; }
    html.ng-df-mobile .ng-mini-btn { width: 34px; height: 30px; }
    html.ng-df-mobile #ng-body { padding: 10px 10px 4px; gap: 8px; }
    html.ng-df-mobile #ng-code-input { font-size: 16px; min-height: 58px; max-height: 96px; }
    html.ng-df-mobile .ng-set-input { font-size: 16px; }
    html.ng-df-mobile #ng-start-btn { padding: 13px 8px; }
    html.ng-df-mobile #ng-retry-btn, html.ng-df-mobile #ng-summary-btn { font-size: 11px; padding: 11px 4px; }
    html.ng-df-mobile #ng-cur-code { font-size: 15px; letter-spacing: 0.5px; }
    html.ng-df-mobile .ng-stat-lbl { font-size: 8px; letter-spacing: 0.4px; }
    html.ng-df-mobile #ng-sum-card, html.ng-df-mobile #ng-set-card { width: calc(100vw - 20px); max-width: 500px; max-height: 86vh; max-height: 86dvh; }
    html.ng-df-mobile #ng-set-actions { flex-wrap: wrap; }
    html.ng-df-mobile #ng-set-save { flex: 1 1 100%; order: -1; }
    html.ng-df-mobile #ng-set-clear-hist { flex: 1; }
    html.ng-df-mobile #ng-set-presets button { font-size: 10px; padding: 10px 2px; }
    html.ng-df-mobile #ng-sum-table { font-size: 11px; }
    html.ng-df-mobile #ng-sum-table th, html.ng-df-mobile #ng-sum-table td { padding: 5px 6px; }
    html.ng-df-mobile #ng-sum-footer { gap: 6px 10px; font-size: 11px; }
    html.ng-df-mobile #ng-sum-actions { margin-left: 0; }
  `;
  document.head.appendChild(style);
  document.body.appendChild(panel);

  // ===== NHẬN DIỆN ĐIỆN THOẠI / MÀN HẸP =====
  const mqCoarse = window.matchMedia ? window.matchMedia("(pointer: coarse)") : null;
  if (mqCoarse && mqCoarse.matches && !document.querySelector('meta[name="viewport"]')) {
    const metaVp = document.createElement("meta");
    metaVp.setAttribute("name", "viewport");
    metaVp.setAttribute("content", "width=device-width, initial-scale=1");
    document.head.appendChild(metaVp);
  }
  const resetPanelPos = () => { panel.style.left = panel.style.top = panel.style.right = panel.style.bottom = ""; };
  const applyViewportMode = () => {
    const narrow = window.innerWidth <= 560 || (window.visualViewport && window.visualViewport.width <= 560);
    document.documentElement.classList.toggle("ng-df-mobile", !!(mqCoarse && mqCoarse.matches) || !!narrow);
    if (document.documentElement.classList.contains("ng-df-mobile")) resetPanelPos();
  };
  applyViewportMode();
  if (mqCoarse && mqCoarse.addEventListener) mqCoarse.addEventListener("change", applyViewportMode);
  window.addEventListener("resize", () => {
    const dragged = panel.style.left !== "" || panel.style.top !== "";
    applyViewportMode();
    if (dragged) {
      const r = panel.getBoundingClientRect();
      if (r.left < 0 || r.top < 0 || r.right > window.innerWidth || r.bottom > window.innerHeight) resetPanelPos();
    }
  });
  window.addEventListener("orientationchange", () => setTimeout(applyViewportMode, 350));

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
          <span id="ng-sum-actions">
            <button id="ng-sum-copy" title="Copy danh sách kết quả vào clipboard (theo bộ lọc đang chọn)">📋 COPY</button>
            <button id="ng-sum-csv" title="Tải kết quả ra file CSV (mở được bằng Excel)">⬇ CSV</button>
          </span>
        </div>
      </div>
    `;
    modal.style.display = "flex";
    document.getElementById("ng-sum-close").onclick = closeSummary;
    let sumFilterLabel = "";
    modal.querySelectorAll(".ng-pill").forEach(p => {
      p.onclick = () => {
        const label = p.dataset.label;
        sumFilterLabel = label;
        modal.querySelectorAll(".ng-pill").forEach(x => x.classList.toggle("ng-pill-active", x === p));
        modal.querySelectorAll("#ng-sum-table tbody tr").forEach(tr => { tr.style.display = (!label || tr.dataset.label === label) ? "" : "none"; });
      };
    });
    const filteredRows = () => lastSummary.filter(r => !sumFilterLabel || r.label === sumFilterLabel);
    const stampNow = () => { const d = new Date(), p = n => String(n).padStart(2, "0"); return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`; };
    document.getElementById("ng-sum-copy").onclick = async () => {
      const rows = filteredRows();
      if (!rows.length) return;
      const okN = rows.filter(r => r.status === "SUCCESS").length;
      const text = [
        `KẾT QUẢ ĐỔI CODE DELTA FORCE — ${stampNow()}${sumFilterLabel ? ` (lọc: ${sumFilterLabel})` : ""}`,
        `Thành công: ${okN}/${rows.length}`,
        "",
        ...rows.map((r, i) => `${i + 1}. ${r.code} — ${r.label}${r.note ? ` — ${r.note}` : ""}`)
      ].join("\n");
      let copied = false;
      try { await navigator.clipboard.writeText(text); copied = true; } catch (_) {}
      if (!copied) {
        try {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0";
          document.body.appendChild(ta);
          ta.focus(); ta.select();
          copied = document.execCommand("copy");
          ta.remove();
        } catch (_) {}
      }
      appendLog(copied ? `📋 Đã copy ${rows.length} kết quả vào clipboard` : "⚠ Không copy được vào clipboard", copied ? "info" : "bad");
    };
    document.getElementById("ng-sum-csv").onclick = () => {
      const rows = filteredRows();
      if (!rows.length) return;
      const escCsv = v => `"${String(v == null ? "" : v).replace(/"/g, '""')}"`;
      const csv = [
        ["STT", "CODE", "TRẠNG THÁI", "THÔNG BÁO"].map(escCsv).join(";"),
        ...rows.map((r, i) => [i + 1, r.code, r.label, r.note || ""].map(escCsv).join(";"))
      ].join("\r\n");
      const d = new Date(), p = n => String(n).padStart(2, "0");
      const name = `df-redeem-${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}.csv`;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" }));
      a.download = name;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      appendLog(`⬇ Đã tải ${name} (${rows.length} dòng)`, "info");
    };
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

  // Kéo panel bằng chuột lẫn cảm ứng 
  const header = document.getElementById("ng-header");
  let dragId = null, dragX = 0, dragY = 0;
  header.addEventListener("pointerdown", e => {
    if (e.target.closest("button")) return;
    dragId = e.pointerId;
    const r = panel.getBoundingClientRect();
    dragX = e.clientX - r.left;
    dragY = e.clientY - r.top;
    panel.style.right = "auto";
    panel.style.bottom = "auto";
    panel.style.left = r.left + "px";
    panel.style.top = r.top + "px";
  });
  document.addEventListener("pointermove", e => {
    if (dragId === null || e.pointerId !== dragId) return;
    const maxX = Math.max(0, window.innerWidth - panel.offsetWidth);
    const maxY = Math.max(0, window.innerHeight - Math.min(panel.offsetHeight, window.innerHeight));
    panel.style.left = Math.min(Math.max(0, e.clientX - dragX), maxX) + "px";
    panel.style.top = Math.min(Math.max(0, e.clientY - dragY), maxY) + "px";
  });
  const endDrag = e => { if (dragId !== null && e.pointerId === dragId) dragId = null; };
  document.addEventListener("pointerup", endDrag);
  document.addEventListener("pointercancel", endDrag);

  if (window.visualViewport) {
    const vv = window.visualViewport;
    const adjustKeyboard = () => {
      const kb = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
      const typing = kb > 60 && (panel.contains(document.activeElement) || settingsModal.contains(document.activeElement));
      panel.style.setProperty("--ng-kb", typing ? kb + "px" : "0px");
      panel.style.maxHeight = typing ? Math.max(180, vv.height - 16) + "px" : "";
    };
    vv.addEventListener("resize", adjustKeyboard);
    vv.addEventListener("scroll", adjustKeyboard);
  }

  const logBox = document.getElementById("ng-log-box");

  // ===== CARD "ĐANG CHẠY" =====
  const curCard = document.getElementById("ng-cur-card");
  const curCodeEl = document.getElementById("ng-cur-code");
  const curTimerEl = document.getElementById("ng-cur-timer");
  const curSubEl = document.getElementById("ng-cur-sub");
  const curCdFill = document.getElementById("ng-cur-cd-fill");
  const setCurSub = (text, cls = "") => { curSubEl.textContent = text; curSubEl.className = cls; };
  const setCurCountdown = (remainingMs, totalMs, label = "Hết hạn sau:") => {
    const r = Math.max(0, remainingMs), t = Math.max(1, totalMs);
    curTimerEl.textContent = `⏱ ${label} ${(r / 1000).toFixed(1)}s / ${(t / 1000).toFixed(1)}s`;
    const low = r / t < 0.3;
    curTimerEl.classList.toggle("ng-cur-low", low);
    curCdFill.classList.toggle("ng-cur-low", low);
    curCdFill.style.width = ((r / t) * 100).toFixed(1) + "%";
  };
  const clearCurCountdown = () => {
    curTimerEl.textContent = "";
    curTimerEl.classList.remove("ng-cur-low");
    curCdFill.classList.remove("ng-cur-low");
    curCdFill.style.width = "0%";
  };
  const resetCurCard = (subText = "Sẵn sàng...", cls = "") => {
    curCard.classList.remove("ng-cur-live");
    curCodeEl.textContent = "·····";
    setCurSub(subText, cls);
    clearCurCountdown();
  };

  function appendLog(html, type = "") {
    const div = document.createElement("div");
    div.className = `log-line log-${type}`;
    const t = new Date();
    const ts = [t.getHours(), t.getMinutes(), t.getSeconds()].map(x => String(x).padStart(2, "0")).join(":");
    div.innerHTML = `<span class="log-time">${ts}</span>${html}`;
    logBox.appendChild(div);
    while (logBox.children.length > 200) logBox.removeChild(logBox.firstChild);
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
  let isRunning = false;
  let stopRequested = false;
  let retryCodes = [];
  let sessionStats = { totalMs: 0 };
  let originalPageTitle = null;

  // ===== STATS BOX =====
  let currentResults = [];
  let totalCodesCount = 0;
  let lastStatNums = { ok: 0, used: 0, fail: 0, remain: 0 };

  function updateStatsBox() {
    const box = document.getElementById("ng-stats-box");
    if (!box) return;
    const total = currentResults.length;
    const success = currentResults.filter(r => r.status === "SUCCESS").length;
    const used = currentResults.filter(r => r.status === "LIMIT_REACHED" || r.status === "USED").length;
    const failed = currentResults.filter(r => r.status === "EXPIRED" || r.status === "INVALID" || r.status === "PRESENT_ERROR").length;
    const other = currentResults.filter(r => r.status === "TEMP_ERROR" || r.status === "NO_RESPONSE" || r.status === "VERIFY" || r.status === "OTHER" || r.status === "SKIPPED").length;
    const remaining = totalCodesCount - total;
    const nums = { ok: success, used, fail: failed, remain: remaining };
    for (const k of Object.keys(nums)) {
      const numEl = box.querySelector(`.ng-stat[data-k="${k}"] .ng-stat-num`);
      if (!numEl || nums[k] === lastStatNums[k]) continue;
      const increased = nums[k] > lastStatNums[k];
      numEl.textContent = nums[k];
      if (increased && nums[k] > 0) {
        numEl.classList.remove("ng-stat-pop");
        void numEl.offsetWidth;
        numEl.classList.add("ng-stat-pop");
      }
      lastStatNums[k] = nums[k];
    }
    const base = Math.max(totalCodesCount, total, 1);
    const segs = { ok: success, used, fail: failed, other };
    for (const k of Object.keys(segs)) {
      const seg = box.querySelector(`#ng-stat-ratio .rs-${k}`);
      if (seg) seg.style.width = ((segs[k] / base) * 100).toFixed(2) + "%";
    }
  }

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
  // Âm thanh gần câm trong lúc chạy
  let keepAliveOsc = null, keepAliveGain = null;
  const startKeepAlive = () => {
    const ctx = ensureAudio();
    if (!ctx || keepAliveOsc) return;
    try {
      keepAliveGain = ctx.createGain();
      keepAliveGain.gain.value = 0.004;
      keepAliveOsc = ctx.createOscillator();
      keepAliveOsc.type = "sine";
      keepAliveOsc.frequency.value = 30;
      keepAliveOsc.connect(keepAliveGain);
      keepAliveGain.connect(ctx.destination);
      keepAliveOsc.start();
    } catch (_) { keepAliveOsc = null; keepAliveGain = null; }
  };
  const stopKeepAlive = () => {
    try {
      if (keepAliveOsc) { keepAliveOsc.stop(); keepAliveOsc.disconnect(); }
      if (keepAliveGain) keepAliveGain.disconnect();
    } catch (_) {}
    keepAliveOsc = null; keepAliveGain = null;
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
    startKeepAlive();
    stopTitleNotify();
    originalPageTitle = document.title;
    const runT0 = Date.now();
    isRunning = true;
    stopRequested = false;
    startBtn.classList.add("ng-running", "ng-stop-mode");
    startBtnText.innerText = "DỪNG";
    logBox.innerHTML = "";
    if (document.hidden) appendLog("🔊 Phát âm thanh gần câm — giữ tốc độ khi tab ở nền", "info");
    curCard.classList.add("ng-cur-live");
    curCodeEl.textContent = "·····";
    setCurSub("Đang xử lý...", "ng-sub-run");
    clearCurCountdown();
    summaryBtn.disabled = true;
    updateRetryBtn();

    // Reset stats
    currentResults = [];
    totalCodesCount = codeList.length;
    updateStatsBox();

    let outcome = null;
    let runError = null;
    try {
      outcome = await startRedeemProcess(codeList.join("\n"));
    } catch (e) {
      runError = (e && e.message) || String(e);
      appendLog(`❌ Lỗi không mong muốn khi chạy: ${escHtml(runError)}`, "bad");
    }
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
    startBtnText.innerText = "BẮT ĐẦU LẠI";
    summaryBtn.disabled = !lastSummary.length;
    updateRetryBtn();
    sessionStats.totalMs += Date.now() - runT0;
    if (originalPageTitle !== null) { document.title = originalPageTitle; originalPageTitle = null; }
    if (outcome) resetCurCard(stopped ? "⏹ Đã dừng theo yêu cầu" : "✔ Hoàn tất!", stopped ? "ng-sub-warn" : "ng-sub-ok");
    else resetCurCard(runError ? `❌ Lỗi: ${runError}` : "❌ Lỗi: chưa thấy ô nhập/nút Đổi!", "ng-sub-bad");
    appendLog("=== HOÀN TẤT QUÁ TRÌNH ===", "title");
    // Cập nhật stats box lần cuối
    updateStatsBox();
    if (outcome && userConfig.notifyOnDone) {
      const okN = lastSummary.filter(r => r.status === "SUCCESS").length;
      notifyDone(stopped ? `⏹ ĐÃ DỪNG ${okN}/${lastSummary.length} CODE` : `✔ ${okN}/${lastSummary.length} CODE THÀNH CÔNG`);
    }
    stopKeepAlive();
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
        // Nạp vào thống kê để ô "CÒN LẠI" và thanh tỉ lệ tính đúng
        currentResults.push(...skippedRows);
        updateStatsBox();
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

    const visible = el => { if (!el) return false; const s = getComputedStyle(el), r = el.getBoundingClientRect(); return s.display !== "none" && s.visibility !== "hidden" && r.width > 0 && r.height > 0; };
    const setValue = (input, value) => { const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set; setter.call(input, value); input.dispatchEvent(new Event("input", { bubbles: true })); input.dispatchEvent(new Event("change", { bubbles: true })); input.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true })); };
    const findInput = () => document.querySelector(".exc-input") || [...document.querySelectorAll("input")].find(el => visible(el) && !el.disabled && !el.readOnly);
    const findButton = () => document.querySelector(".btn-exchange") || [...document.querySelectorAll("a,button")].find(el => visible(el) && el.innerText.trim() === "Đổi");

    // Kiểm tra trước khi cài hook — thiếu ô nhập/nút thì thoát sạch, không phải gỡ hook
    if (!findInput() || !findButton()) { console.error("Không tìm thấy ô nhập hoặc nút Đổi."); return null; }

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
      if (/^error_hint_\d+$/i.test(r.message || "")) return "";
      return (r.status === "SUCCESS" && r.message === "ok") ? "Đã nhận thành công" : r.message;
    };

    const redeemOne = async (code, index, total) => {
      let lastMsg = "";
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

        curCard.classList.add("ng-cur-live");
        curCodeEl.textContent = code;
        setCurSub(attempt > 1 ? `🔄 Thử lại lần ${attempt}...` : "⏳ Đang gửi yêu cầu...", "ng-sub-run");
        setCurCountdown(CONFIG.timeoutMs, CONFIG.timeoutMs);

        let requestSent = false;
        for (let tryI = 1; tryI <= CONFIG.submitClickRetries + 1; tryI++) {
          const subBtn = tryI === 1 ? btn : findButton();
          if (!subBtn) break;
          clickRedeem(subBtn);
          const confirmStart = Date.now();
          while (Date.now() - confirmStart < CONFIG.submitConfirmMs) {
            await sleep(50);
            if (requestStarts.some(x => x.attemptId === attemptMeta.id) || getResponseMessage(attemptMeta).text) { requestSent = true; break; }
            setCurCountdown(CONFIG.timeoutMs - (Date.now() - start), CONFIG.timeoutMs);
          }
          if (requestSent) break;
        }

        let msg = { source: "", text: "" };
        while (Date.now() - start < CONFIG.timeoutMs) {
          await sleep(CONFIG.pollMs);
          msg = getResponseMessage(attemptMeta);
          if (msg.text) break;
          if (Date.now() - start >= 500) { msg = getMessage(); if (msg.text) break; }
          const elapsed = Date.now() - start;
          setCurCountdown(CONFIG.timeoutMs - elapsed, CONFIG.timeoutMs);
          setCurSub(`${requestSent ? "🔄 Đang chờ phản hồi" : "⏳ Đang gửi yêu cầu"} (${(elapsed / 1000).toFixed(1)}s)...`, "ng-sub-run");
        }
        if (msg.text) setCurSub("✅ Đang xác nhận...", "ng-sub-ok");

        let status = classify(msg.text);
        lastMsg = msg.text || "";
        if (status === "SUCCESS" && msg.source !== "response") { status = "NO_RESPONSE"; msg.text = "(popup thành công nhưng chưa bắt được phản hồi mạng)"; }
        closeDialog();
        if (activeAttempt?.id === attemptMeta.id) activeAttempt = null;
        clearCurCountdown();

        if (!["TEMP_ERROR", "NO_RESPONSE"].includes(status)) {
          setCurSub(`${status === "SUCCESS" ? "✔" : "✘"} ${STATUS_LABELS[status]}`, status === "SUCCESS" ? "ng-sub-ok" : "ng-sub-bad");
          return { stt: `${index}/${total}`, code, status, message: msg.text || "(không thấy phản hồi)" };
        }
        if (attempt <= CONFIG.maxRetries) await sleep(CONFIG.retryDelayMs);
      }
      // Hết số lần thử lại: giữ đúng trạng thái lỗi tạm thời thay vì ghi thành "không thấy phản hồi"
      const finalStatus = ["TEMP_ERROR"].includes(classify(lastMsg)) ? "TEMP_ERROR" : "NO_RESPONSE";
      setCurSub(`✘ ${STATUS_LABELS[finalStatus]}`, "ng-sub-bad");
      return { stt: `${index}/${total}`, code, status: finalStatus, message: lastMsg || "(không thấy phản hồi)" };
    };

    const waitCountdown = async (ms, done, total) => {
      if (ms <= 0) return;
      const t0 = Date.now();
      while (Date.now() - t0 < ms) {
        if (stopRequested) return;
        const left = ms - (Date.now() - t0);
        setCurSub(`⏸ Đã đổi ${done}/${total} · chuẩn bị code kế tiếp...`, "ng-sub-warn");
        setCurCountdown(left, ms, "Tiếp sau:");
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
        setCurSub(`▶ Đang đổi ${i + 1}/${total}...`, "ng-sub-run");
        document.title = `▶ ${i + 1}/${total} · DF Auto Redeem`;
        const r = await redeemOne(codes[i], i + 1, total);
        results.push(r);
        // Cập nhật stats real-time
        currentResults.push(r);
        updateStatsBox();

        const note = displayMessage(r);
        console.log(`%c[${r.stt}] ${STATUS_LABELS[r.status]}%c ${r.code}${note ? `: ${note}` : ""}`, "", "");
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

    try {
      const results = await runBatch(RUN_CODES);

      // Ghi lịch sử code đã có kết quả
      const hist = loadCodeHistory();
      results.forEach(r => { if (TERMINAL_STATUSES.includes(r.status)) hist[r.code] = { s: STATUS_LABELS[r.status] || r.status, t: Date.now() }; });
      saveCodeHistory(hist);

      const okCount = results.filter(r => r.status === "SUCCESS").length;
      console.log(`%cKẾT QUẢ TỔNG KẾT%c ${okCount}/${results.length} code thành công — nhấn nút TỔNG KẾT để xem chi tiết`, "", "");

      const doneCodes = new Set(results.map(r => r.code));
      const unrun = stopRequested ? RUN_CODES.filter(c => !doneCodes.has(c)) : [];
      const rows = [
        ...skippedRows.map(r => ({ ...r, stt: "", label: STATUS_LABELS[r.status] || "Đã bỏ qua" })),
        ...results.map(r => ({ stt: r.stt, code: r.code, status: r.status, label: STATUS_LABELS[r.status] || "Khác", note: displayMessage(r) || "" }))
      ];
      return { rows, unrun };
    } finally {
      restoreHooks();
    }
  }

  // ===== KIỂM TRA BẢN CẬP NHẬT =====
  const REPO_URL = "https://github.com/minhkhw/AutoRedeemDF";
  const updateBanner = document.getElementById("ng-update-banner");

  document.addEventListener("ng-df-update-result", (e) => {
    let info = null;
    try { info = JSON.parse(e.detail); } catch (_) { return; }
    if (!info || !info.updateAvailable || !info.latest) return;
    const verEl = document.getElementById("ng-upd-ver");
    if (verEl) verEl.textContent = "v" + info.latest;
    if (updateBanner) updateBanner.style.display = "flex";
    appendLog(`🆕 Có bản mới v${info.latest} (đang dùng v${info.current}) — bấm banner trên panel để tải`, "info");
  });

  if (updateBanner) {
    updateBanner.addEventListener("click", () => window.open(REPO_URL, "_blank", "noopener"));
  }

  setTimeout(() => {
    document.dispatchEvent(new CustomEvent("ng-df-check-update"));
  }, 1500);
})();