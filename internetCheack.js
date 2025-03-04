function checkInternet() {
  if (!navigator.onLine) {
    document.getElementById("offline-message").style.display = "block";
    document.body.style.visibility = "hidden"; // Hide page content
  } else {
    document.getElementById("offline-message").style.display = "none";
    document.body.style.visibility = "visible";
  }
}

// Initial check on page load
checkInternet();

// Event listeners for internet status changes
window.addEventListener("offline", () => {
  document.getElementById("offline-message").style.display = "block";
  document.body.style.visibility = "hidden"; // Hide content
});

window.addEventListener("online", () => {
  location.reload(); // Reload page when internet comes back
});
