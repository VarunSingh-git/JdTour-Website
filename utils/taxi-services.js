AOS.init();
function showService(service) {
  document
    .querySelectorAll(".service-container")
    .forEach((el) => el.classList.add("hidden"));
  document.getElementById(service).classList.remove("hidden");
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
}
