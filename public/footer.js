fetch("https://thisismywebsite-azure.vercel.app/footer.html?v=1.2")
  .then((response) => response.text())
  .then((data) => {
    const sanitizedData = DOMPurify.sanitize(data); // Prevents CSP violation
    document.body.insertAdjacentHTML("beforeend", sanitizedData);
  })
  .catch((error) => console.error("Footer load failed:", error));
