const locationPhotos = {
  dehradun: [
    "https://thisisphotostore.vercel.app/Background_img_1.jpg",
    "https://thisisphotostore.vercel.app/Background_img_2.jpg",
    "https://thisisphotostore.vercel.app/Background_img_1.jpg",
    "https://thisisphotostore.vercel.app/Background_img_2.jpg",
    "https://thisisphotostore.vercel.app/Background_img_1.jpg",
    "https://thisisphotostore.vercel.app/Background_img_2.jpg",
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
  console.log("hi");
  gsap.to(".card", {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
    onComplete: () => {
      document.querySelector(".gallery").classList.add("hidden");

      const photoContainer = document.getElementById("photo-container");
      photoContainer.innerHTML = "";
      photoContainer.style.display = "flex";

      document.getElementById("back-btn").style.display = "block";

      if (locationPhotos[location]) {
        locationPhotos[location].forEach((imgSrc, index) => {
          let img = document.createElement("img");
          img.src = imgSrc;
          img.alt = `Photo of ${location}`;
          console.log("hi");
          img.style.opacity = 0;
          img.style.transform = "translateY(20px)";

          photoContainer.appendChild(img);

          gsap.to(img, { opacity: 1, y: 0, duration: 0.8, delay: index * 0.2 });
        });
      }

      gsap.to("#photo-container", { opacity: 1, scale: 1, duration: 0.5 });

      setTimeout(() => {
        document.querySelector(".gallery").style.display = "none";
      }, 500);
    },
  });
}
function goBack() {
  gsap.to("#photo-container img", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    onComplete: () => {
      const photoContainer = document.getElementById("photo-container");
      photoContainer.innerHTML = ""; // Saari photos hatao
      photoContainer.style.display = "none"; // Hide kar do

      const gallery = document.querySelector(".gallery");
      gallery.style.display = "flex"; // Ensure it's visible
      document.querySelectorAll(".card").forEach((card) => {
        card.style.display = "block"; // Sare cards wapas show honge
        card.style.opacity = "0"; // Pehle invisible rakho
      });

      document.querySelectorAll(".card img").forEach((img) => {
        img.style.display = "block"; // Ensure images are visible
        img.style.opacity = "0"; // Pehle fade-in ke liye invisible rakho
      });

      gsap.to(".card", { opacity: 1, scale: 1, duration: 0.5 });
      gsap.to(".card img", { opacity: 1, duration: 0.5 });

      document.getElementById("back-btn").style.display = "none";
    },
  });
}
