function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
});

