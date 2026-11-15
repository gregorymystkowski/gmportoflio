const themeButton = document.querySelector('#theme');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
const italian = document.documentElement.lang === 'it';
function labelTheme() {
 const dark = document.documentElement.dataset.theme === 'dark';
 themeButton.setAttribute('aria-label', italian ? `Passa al tema ${dark ? 'chiaro' : 'scuro'}` : `Switch to ${dark ? 'light' : 'dark'} theme`);
}
labelTheme();
themeButton.addEventListener('click', () => { const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = theme; try { localStorage.setItem('theme', theme); } catch {} labelTheme(); });
systemTheme.addEventListener('change', event => { try { if (localStorage.getItem('theme')) return; } catch {} document.documentElement.dataset.theme = event.matches ? 'dark' : 'light'; labelTheme(); });
const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);

// The flag shows the current language; the link keeps the current page and anchor.
const languageLink = document.querySelector('#language');
function updateLanguageLink() {
 const path = italian ? (location.pathname.slice(3) || '/') : '/it' + location.pathname;
 languageLink.href = path + location.search + location.hash;
}
updateLanguageLink();
window.addEventListener('hashchange', updateLanguageLink);
languageLink.addEventListener('click', event => {
 if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
 try { localStorage.setItem('language', italian ? 'en' : 'it'); } catch {}
});
