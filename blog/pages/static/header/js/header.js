(function () {
    const body = document.querySelector("body");
    const themeBtn = document.getElementById("toggle-theme");
    const root = document.documentElement;
    const THEME_KEY = "theme";
    const headerUl = document.getElementById("header-ul");
    const headerLogo = document.getElementById("header-logo");

    (function checkStatus() {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === "light" || saved === "dark") {
            applyTheme(saved);
        } else {
            const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
            applyTheme(prefersLight ? "light" : "dark");
        }
    })();

    function applyTheme(theme) {
        if (theme === "light") {
            localStorage.setItem(THEME_KEY, "light");
            if (themeBtn) themeBtn.textContent = "🌙";
            root.setAttribute(THEME_KEY, "light")
        } else {
            localStorage.setItem(THEME_KEY, "dark");
            if (themeBtn) themeBtn.textContent = "☀️";
            root.removeAttribute(THEME_KEY);
        }
    }

    const toggleTheme = () => {
        const current = root.getAttribute(THEME_KEY);
        const next = current === "light" ? "dark" : "light";
        applyTheme(next);
    };

    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
    headerUl.addEventListener("click",(e)=>{e.preventDefault()})
    headerLogo.addEventListener("click",(e)=>{e.preventDefault()})
})();