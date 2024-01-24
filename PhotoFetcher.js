function loadImages() {
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  let img3 = document.getElementById("img3");
  let img4 = document.getElementById("img4");

  fetch("https://picsum.photos/367/250").then(
    (response) => (img1.src = response.url)
  );

  fetch("https://picsum.photos/367/250").then(
    (response) => (img2.src = response.url)
  );

  fetch("https://picsum.photos/367/250").then(
    (response) => (img3.src = response.url)
  );

  fetch("https://picsum.photos/367/250").then(
    (response) => (img4.src = response.url)
  );
}

function toggleGrayscale() {
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.classList.toggle("grayscale");
  });
}

toggleSwitch.addEventListener("change", function () {
  toggleGrayscale();
});
