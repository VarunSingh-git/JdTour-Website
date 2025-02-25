// import { sanitizeInput } from "../index.mjs";

const { sanitizeInput } = require("index.js");

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("U2CA7ZBm6rnrWxlcf"); // Replace with your Public Key

  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  let lastSentTime = 0; // Spam Protection

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get input values
    let name = form.querySelector("#name").value.trim();
    let email = form.querySelector("#email").value.trim();
    let phone = form.querySelector("#ph").value.trim();
    let message = form.querySelector("#message").value.trim();

    name = sanitizeInput(name);
    email = sanitizeInput(email);
    phone = sanitizeInput(phone);
    message = sanitizeInput(message);

    // Validate Inputs
    if (
      !validateName(name) ||
      !validateEmail(email) ||
      !validatePhone(phone) ||
      !validateMessage(message)
    ) {
      return;
    }

    // Spam Protection (1 min cooldown)
    const currentTime = Date.now();
    if (currentTime - lastSentTime < 60000) {
      alert("❌ Please wait before sending another message.");
      return;
    }

    // Disable button to prevent multiple submissions
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const params = {
      from_name: name,
      from_email: email,
      message,
      custmor_ph: phone,
    };

    emailjs
      .send("service_29mwnzv", "template_k4z1hqs", params)
      .then(() => {
        alert("✅ Message Sent Successfully!");
        form.reset();
        lastSentTime = Date.now(); // Update last sent time
      })
      .catch((error) => {
        alert("Failed to Send Message!");
        console.error("EmailJS Error:", error);
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Message";
      });
  });

  // Validation Functions
  function validateName(name) {
    if (!/^[A-Za-z\s]{3,}$/.test(name)) {
      alert("Name must contain only letters (min 3 characters).");
      return false;
    }
    return true;
  }

  function validateEmail(email) {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  function validatePhone(phone) {
    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be 10 digits.");
      return false;
    }
    return true;
  }

  function validateMessage(message) {
    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return false;
    }
    return true;
  }
});
