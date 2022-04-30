//scroll navbar
window.addEventListener("scroll", () => {
  const fixed = document.querySelector(".fixed");
  fixed.classList.toggle("sticky", window.scrollY > 0);
});

//open menu button
const toggle = document.querySelector("#toggle");
const navMenu = document.querySelector(".nav-links");
toggle.onclick = () => {
  toggle.classList.toggle("active");
  navMenu.classList.toggle("active");
};

document.onclick = (e) => {
  if (e.target.className !== "nav-links" && e.target.id !== "toggle") {
    navMenu.classList.remove("active");
    toggle.classList.remove("active");
  }
};

//wow animate
new WOW().init();
