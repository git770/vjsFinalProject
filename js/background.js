const body = document.body;
const imgArray = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const chosenImg = imgArray[Math.floor(Math.random() * imgArray.length)];

const bgImage = `img/${chosenImg}`;

body.style.backgroundImage = `url(${bgImage})`;
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";