const locationPhotos = {
  dehradun: [
    "images/dehradun1.jpg",
    "images/dehradun2.jpg",
    "images/dehradun3.jpg",
    "images/dehradun4.jpg",
    "images/dehradun5.jpg",
    "images/dehradun6.jpg",
  ],
  mussoorie: [
    "images/mussoorie1.jpg",
    "images/mussoorie2.jpg",
    "images/mussoorie3.jpg",
    "images/mussoorie4.jpg",
    "images/mussoorie5.jpg",
    "images/mussoorie6.jpg",
  ],
  haridwar: [
    "images/haridwar1.jpg",
    "images/haridwar2.jpg",
    "images/haridwar3.jpg",
    "images/haridwar4.jpg",
    "images/haridwar5.jpg",
    "images/haridwar6.jpg",
  ],
};

function showPhotos(location) {
  gsap.to(".card", {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    onComplete: () => {
      document.querySelector(".gallery").classList.add("hidden");

      const photoContainer = document.getElementById("photo-container");
      photoContainer.innerHTML = "";
      document.getElementById("back-btn").style.display = "block";

      if (locationPhotos[location]) {
        locationPhotos[location].forEach((imgSrc, index) => {
          let img = document.createElement("img");
          img.src = imgSrc;
          img.alt = `Photo of ${location}`;
          img.style.opacity = 0;
          photoContainer.appendChild(img);

          gsap.to(img, { opacity: 1, y: 0, duration: 0.8, delay: index * 0.2 });
        });
      }
      gsap.to("#photo-container", { opacity: 1, scale: 1, duration: 0.5 });
    },
  });
}

function goBack() {
  gsap.to("#photo-container img", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    onComplete: () => {
      document.getElementById("photo-container").innerHTML = "";
      document.querySelector(".gallery").classList.remove("hidden");
      document.getElementById("back-btn").style.display = "none";

      gsap.to(".card", { opacity: 1, scale: 1, duration: 0.5 });
    },
  });
}
