const policy_1 = window.trustedTypes?.createPolicy("default", {
  createHTML: (string) => string,
});

fetch("https://thisismywebsite-azure.vercel.app/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML(
      "beforeend",
      policy_1 ? policy_1.createHTML(data) : data
    );
  })
  .catch((error) => console.error("Footer load failed:", error));
