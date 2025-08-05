const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav a');

links.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.checked = false; // Uncheck the checkbox
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".profile-img");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target)
      }
    })
  }, {threshold: 0.9})
  observer.observe(image)
})

document.addEventListener("DOMContentLoaded", () => {
  const meIntro = document.querySelector(".me-intro");
  const whatItem = document.querySelectorAll(".what-I-do-item")
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target)
      } else {
        entry.target.classList.remove("visible")
      }
    })
  }, {threshold: 0.001})
  observer.observe(meIntro)
  whatItem.forEach(item => observer.observe(item))
})