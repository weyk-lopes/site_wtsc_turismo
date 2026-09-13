const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  menu?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
