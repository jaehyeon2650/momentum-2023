// html 먼저 쓰고 그를 불러와서 작업
// const image = document.querySelector("img");
// const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg"];
// image.src = images[Math.floor(Math.random() * images.length)];
// const image = document.createElement("img");
// const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg"];
// image.src = images[Math.floor(Math.random() * images.length)];
// document.body.appendChild(image);
const image = ["'img/01.jpg'", "'img/02.jpg'", "'img/03.jpg'", "'img/04.jpg'"];

document.body.style.backgroundImage = `url(${image[Math.floor(Math.random() * image.length)]})`;
