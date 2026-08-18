// Khối NGUỒN CODE MỚI NHẤT: tải file JSON trên GitHub
// Mỗi lần mở popup đều tải mới; có timeout chống treo

const CODE_SOURCES = [
  "https://raw.githubusercontent.com/minhkhw/AutoRedeemDF/refs/heads/main/code.json"
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

// Mỗi lần mở popup: tải mới và hiển thị "updated" + "note"; lỗi thì hiện nút thử lại
const renderInfo = async () => {
  const updatedEl = document.getElementById("ng-src-updated");
  const noteEl = document.getElementById("ng-src-note");
  const retryBtn = document.getElementById("ng-src-retry");
  retryBtn.style.display = "none";
  updatedEl.textContent = "…";
  noteEl.textContent = "…";
  try {
    const { data } = await loadSource();
    updatedEl.textContent = (typeof data.updated === "string" ? data.updated.trim() : "") || "—";
    noteEl.textContent = (typeof data.note === "string" ? data.note.trim() : "") || "—";
  } catch (_) {
    updatedEl.textContent = "—";
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
