function theme() {
  /* === Elements === */
  const body = document.querySelector("body");
  const root = document.documentElement;
  const themeBtn = document.getElementById("toggle-theme");
  const headerUl = document.getElementById("header-ul");
  const headerLogo = document.getElementById("header-logo");

  /* === Constants === */
  const THEME_KEY = "theme";

  /* === Initialize Theme on Page Load === */
  (function checkStatus() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") {
      applyTheme(saved);
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      applyTheme(prefersLight ? "light" : "dark");
    }
  })();

  /* === Apply Theme Function === */
  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute(THEME_KEY, "light");
      if (themeBtn) themeBtn.textContent = "🌙";
      localStorage.setItem(THEME_KEY, "light");
    } else {
      root.removeAttribute(THEME_KEY);
      if (themeBtn) themeBtn.textContent = "☀️";
      localStorage.setItem(THEME_KEY, "dark");
    }
  }

  /* === Toggle Theme on Button Click === */
  const toggleTheme = () => {
    const current = root.getAttribute(THEME_KEY);
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
  };

  /* === Event Listeners === */
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
  headerUl.addEventListener("click", (e) => e.preventDefault());
  headerLogo.addEventListener("click", (e) => e.preventDefault());
}

/* === Initialize Theme Function === */
theme();
