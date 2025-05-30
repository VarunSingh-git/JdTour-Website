document
  .querySelector("#menu-toggle")
  .addEventListener("click", function (event) {
    event.preventDefault();
    toggleMenu();
  });

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("email-btn_1")
    .addEventListener("click", function (event) {
      event.preventDefault();
      sendEmail();
    });
});
function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector(".nav-links").classList.toggle("active");
}
document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".nav-links");
  const menuToggle = document.getElementById("menu-toggle");

  // **Agar user navbar ke bahar click kare aur wo open hai, toh close karo**
  if (
    navbar.classList.contains("active") &&
    event.target !== navbar &&
    event.target !== menuToggle
  ) {
    navbar.classList.remove("active");
  }
});

function sendEmail() {
  let email = "jdtravel07@gmail.com";
  let subject =
    "Namaste, Welcome to Jagdamba Tour and Travels, Ride Enjoy & Repeat ❤️";
  let body = "I’m looking to book a cab. \nPlease share the necessary details.";
  let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.open(mailtoLink, "_blank");
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
