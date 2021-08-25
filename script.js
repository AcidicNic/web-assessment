const box = document.getElementById("custom-box");

const width = document.getElementById("width");
const height = document.getElementById("height");
const color = document.getElementById("color");

const widthText = document.getElementById("width-text");
const heightText = document.getElementById("height-text");
const colorText = document.getElementById("color-text");

height.addEventListener("input", updateBox);
width.addEventListener("input", updateBox);
color.addEventListener("input", updateBox);


function updateBox() {
  box.style.height = `${height.value}px`;
  box.style.width = `${width.value}px`;
  box.style.backgroundColor = color.value;
  heightText.textContent = `${height.value}px`;
  widthText.textContent = `${width.value}px`;
  colorText.textContent = color.value;
}
