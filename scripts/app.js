// change header navigation link styles on selection
const navLinks = document.querySelectorAll(".nav_links li");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("selected"));
    link.classList.add("selected");
  });
});

// add services-cards/tools/and connect-arrow animation on hover
VanillaTilt.init(document.querySelector(".arrow"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".service_card"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".tool"), {
  max: 25,
  speed: 400,
});

// animate services cards on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => {
  observer.observe(element);
});

// tooltip for sent message notification
const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
  });
  if (response.ok) {
    form.reset();
    tooltip.classList.add("show-tooltip");
    setTimeout(() => {
      tooltip.classList.remove("show-tooltip");
    }, 2000);
  }
});

// ham menu
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
