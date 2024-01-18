function loadImages() {
  let img1 = document.getElementById("img1");
  let img2 = document.getElementById("img2");
  let img3 = document.getElementById("img3");
  let img4 = document.getElementById("img4");

  fetch("https://picsum.photos/230").then(
    (response) => (img1.src = response.url)
  );

  fetch("https://picsum.photos/230").then(
    (response) => (img2.src = response.url)
  );

  fetch("https://picsum.photos/230").then(
    (response) => (img3.src = response.url)
  );

  fetch("https://picsum.photos/230").then(
    (response) => (img4.src = response.url)
  );
}
