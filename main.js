document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  const menuPanel = document.getElementById('menuPanel');
  const menuClose = document.getElementById('menuClose');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const menuLinks = document.querySelectorAll('.mobile-nav-links a');
  
  function openMenu() {
    menuPanel.classList.add('is-open');
    menuBackdrop.style.display = 'block';
  }

  function closeMenu() {
    menuPanel.classList.remove('is-open');
    menuBackdrop.style.display = 'none';
  }

  if (menuIcon) menuIcon.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});