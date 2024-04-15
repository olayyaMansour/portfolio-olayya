// change navigation link styles on selection
const navLinks = document.querySelectorAll(".nav_links li");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("selected"));
    link.classList.add("selected");
  });
});

// add services cards animation on hover
VanillaTilt.init(document.querySelectorAll(".card-2"), {
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
