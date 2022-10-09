// const images = [
//   "buble.jpg",
//   "colorsmiles.jpg",
//   "floatingcar.jpg",
//   "purpleretro.jpg",
//   "suncat.jpg",
//   "yellowhappy.jpg",
// ];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);  //appendChild 는 body 에 html 을 추가함. 위쪽에 오게 하려면 prependChild().

const bgimg = document.querySelector(".bgImgBox");

bgimg.style.backgroundImage = "url('https://source.unsplash.com/2000x940/?cat,background')";

