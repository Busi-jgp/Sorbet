document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  const menuPanel = document.getElementById('menuPanel');
  const menuClose = document.getElementById('menuClose');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const menuLinks = document.querySelectorAll('.menu-nav a');
  
  menuIcon.addEventListener('click', () => {
    menuPanel.classList.add('active');
    menuBackdrop.classList.add('active');
  });


  menuClose.addEventListener('click', () => {
    menuPanel.classList.remove('active');
    menuBackdrop.classList.remove('active');
  });

  
  menuBackdrop.addEventListener('click', () => {
    menuPanel.classList.remove('active');
    menuBackdrop.classList.remove('active');
  });

  
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuPanel.classList.remove('active');
      menuBackdrop.classList.remove('active');
    });
  });
});

function openMenu(menu){

let sections=document.querySelectorAll(".menu-section")

sections.forEach(section=>{
section.classList.remove("active")
})

document.getElementById(menu).classList.add("active")

let tabs=document.querySelectorAll(".tab")

tabs.forEach(tab=>{
tab.classList.remove("active")
})

event.target.classList.add("active")

}