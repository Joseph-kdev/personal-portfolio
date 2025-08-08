const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector(".nav");
const links = document.querySelectorAll(".nav a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.checked = false; // Uncheck the checkbox
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".profile-img");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.9 }
  );
  observer.observe(image);
});

document.addEventListener("DOMContentLoaded", () => {
  const meIntro = document.querySelector(".me-intro");
  const whatItem = document.querySelectorAll(".what-I-do-item");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.001 }
  );
  observer.observe(meIntro);
  whatItem.forEach((item) => observer.observe(item));
});

function showTab(tabName) {
  // Remove active class from all tabs and buttons
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });
  document.querySelectorAll(".tab-button").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Add active class to selected tab and button
  document.getElementById(tabName).classList.add("active");
  document
    .querySelector(`[onclick="showTab('${tabName}')"]`)
    .classList.add("active");

  // Animate skills appearing
  const skillBadges = document.querySelectorAll(`#${tabName} .skill-badge`);
  skillBadges.forEach((badge, index) => {
    badge.classList.remove("show");
    setTimeout(() => {
      badge.classList.add("show");
    }, index * 80);
  });
}

// Initialize on page load
window.addEventListener("load", () => {
  setTimeout(() => {
    const skillBadges = document.querySelectorAll("#frontend .skill-badge");
    skillBadges.forEach((badge, index) => {
      setTimeout(() => {
        badge.classList.add("show");
      }, index * 80);
    });
  }, 300);
});
