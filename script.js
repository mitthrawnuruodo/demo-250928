// ---------- Utilities ----------
const out = document.getElementById("out");
const urlInput = document.getElementById("urlInput");
const log = (objOrText) => {
  const text = typeof objOrText === "string"
  ? objOrText
  : JSON.stringify(objOrText, null, 2);
  console.log(objOrText);
  out.textContent = text + "\n\n" + out.textContent;
};

// Safe URL parse helper (keeps origin of current page if needed)
const parseUrl = (raw) => {
  try { return new URL(raw, location.href); }
  catch { log("Invalid URL"); return null; }
};

// ---------- Inspectors ----------
function logUrlParts() {
  log({
    href: location.href,
    origin: location.origin,
    protocol: location.protocol,
    host: location.host,
    hostname: location.hostname,
    port: location.port || "(default)",
    pathname: location.pathname,
    search: location.search || "(none)",
    hash: location.hash || "(none)"
  });
}

function logQueryParams() {
  const params = new URLSearchParams(location.search);
  const obj = {};
  for (const [k, v] of params.entries()) obj[k] = v;
  log(Object.keys(obj).length ? obj : "No query params");
}

function logHash() {
  log(location.hash ? `Hash: ${location.hash}` : "No hash");
}

// ---------- Navigation actions ----------
function reloadNormal() {
  location.reload(); // may use cache
}

function reloadForce() {
  // Note: the boolean is deprecated in some browsers but widely supported.
  // Alternative: location.href = location.href to do a "soft" reload.
  location.reload(true);
}

function goAssign() {
  const u = parseUrl(urlInput.value);
  if (u) location.assign(u.href); // adds a history entry
}

function goReplace() {
  const u = parseUrl(urlInput.value);
  if (u) location.replace(u.href); // replaces history entry
}

// ---------- URL mutators (same-page) ----------
function setHashDemo() {
  location.hash = "demo"; // jumps to #demo if present
  log(`Set hash to ${location.hash}`);
}

function clearHash() {
  // Replace current URL without hash (no new history entry)
  const u = new URL(location.href);
  u.hash = "";
  history.replaceState(null, "", u);
  log("Cleared hash");
}

function setParamUser42() {
  const u = new URL(location.href);
  u.searchParams.set("user", "42");
  // Use pushState to add to history without reloading.
  history.pushState(null, "", u);
  log("Set ?user=42 (no reload)");
}

// ---------- Event listeners ----------
document.getElementById("btnParts").addEventListener("click", logUrlParts);
document.getElementById("btnParams").addEventListener("click", logQueryParams);
document.getElementById("btnHash").addEventListener("click", logHash);

document.getElementById("btnReload").addEventListener("click", reloadNormal);
document.getElementById("btnForceReload").addEventListener("click", reloadForce);
document.getElementById("btnAssign").addEventListener("click", goAssign);
document.getElementById("btnReplace").addEventListener("click", goReplace);

document.getElementById("btnSetHash").addEventListener("click", setHashDemo);
document.getElementById("btnClearHash").addEventListener("click", clearHash);
document.getElementById("btnSetParam").addEventListener("click", setParamUser42);

// Update output if user navigates back/forward (SPA-like UX)
window.addEventListener("popstate", () => {
  log("🔙 popstate: URL changed via history navigation");
  logUrlParts();
});

// Optional: react to hash changes
window.addEventListener("hashchange", () => {
  log(`hashchange → ${location.hash || "(none)"}`);
});

// Initial snapshot
logUrlParts();