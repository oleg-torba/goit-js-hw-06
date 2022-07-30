const widget = document.querySelector(".widget");
const getColor = document.querySelector(".color");
const button = document.querySelector(".change-color");
button.addEventListener("click", setRandomHexColor);

function setRandomHexColor() {
  getColor.textContent = getRandomHexColor();
  const bgc = getColor.textContent;
  document.body.style.backgroundColor = bgc;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    .toUpperCase()}`;
}
