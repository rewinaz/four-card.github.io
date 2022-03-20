const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector("nav ul");

let isHamMenu = false;
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("flex");
});
