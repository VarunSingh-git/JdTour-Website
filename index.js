function toggleGallery(id) {
  const gallery = document.getElementById(id);
  gallery.style.display = gallery.style.display === "grid" ? "none" : "grid";
}
