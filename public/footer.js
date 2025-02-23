// const policy = window.trustedTypes?.createPolicy('default', {
//   createHTML: (string) => string
// });

// fetch("/utils/footer.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.body.insertAdjacentHTML(
//       "beforeend",
//       policy ? policy.createHTML(data) : data
//     );
//   })
//   .catch((error) => console.error("Footer load failed:", error));

fetch("https://thisismywebsite-azure.vercel.app/footer.html")
  .then((response) => response.text())
  .then((data) => document.body.insertAdjacentHTML("beforeend", data));
