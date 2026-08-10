const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '58px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.background = '#080b0e';
  nav.style.padding = '15px 5%';
  nav.style.flexDirection = 'column';
  nav.style.gap = '0';
});
