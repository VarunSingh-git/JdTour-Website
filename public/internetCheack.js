// Redirect Loop ko Rokne ke liye check karo ki page "h.html" pe hai ya nahi
if (!navigator.onLine && window.location.pathname !== "/offline.html") {
  location.href = "offline.html";
}

// Try Again button ka kaam
document.getElementById("redirection").addEventListener("click", () => {
  location.href = "index.html";
});

// Internet wapas aane pe automatically reload karna
window.addEventListener("online", () => {
  location.href = "index.html";
});
