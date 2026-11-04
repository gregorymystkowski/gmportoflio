const themeButton = document.querySelector('#theme');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
function labelTheme() { themeButton.setAttribute('aria-label', `Switch to ${document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'} theme`); }
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
