const checkbox = document.querySelector('#checkMenu');
const nav = document.querySelector('#nav-bar-menu');

checkbox.addEventListener('change', () => {
  nav.style.left = checkbox.checked ? '0' : '-100%';
});
