const policy = window.trustedTypes?.createPolicy("default", {
  createHTML: (string) => string,
});

fetch("https://thisismywebsite-azure.vercel.app/whatsapp.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML(
      "beforeend",
      policy ? policy.createHTML(data) : data
    );
  })
  .catch((error) => console.error("Footer load failed:", error));
