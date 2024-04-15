const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.checked = false; // Uncheck the checkbox
  });
});

