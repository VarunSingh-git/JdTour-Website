fetch("utils/whatsapp.html")
  .then((response) => response.text())
  .then((data) => document.body.insertAdjacentHTML("beforeend", data));
