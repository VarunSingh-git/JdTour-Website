function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector(".nav-links").classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
});

// document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".email-btn").addEventListener("click", function(event) {
      event.preventDefault(); // Default action ko rokne ke liye
      sendEmail();
  });
});

function sendEmail() {
  let email = "jdtravel07@gmail.com";
  let subject =
    "Namaste, Welcome to Jagdamba Tour and Travels, Ride Enjoy & Repeat ❤️";
  let body =
    "We will soon answer your E-mail. \nWarm Regards, JD Tour & Travels..";
  let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink, "_blank");
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

export function sanitizeInput(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
