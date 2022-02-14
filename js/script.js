"use strict";
let squares = 2232;
let i = 1;
const colors = [
  "#79113a",
  "#c62744",
  "#db8192",
  "#e7aab7",
  "#e9e7dd",
  "#93c3c7",
  "#deeff1",
  "#f9de59",
  "#e8a628",
  "#f98365",
  "#a1dffb",
  "#490921",
];

let container = document.querySelector("div");
for (let i = 0; i < squares; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColorToElement(square);
  });
  square.addEventListener("mouseout", () => {
    removeColorToEl(square);
  });
  container.appendChild(square); //Uncaught TypeError: Cannot read properties of null (reading 'appendChild')
}

function setColorToElement(elemet) {
  const color = getRandomColor();
  elemet.style.background = color;
}

function removeColorToEl(element) {
  element.style.background = "rgb(255, 170, 244)";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

let squareNum = document.querySelectorAll(".square");
squareNum.forEach(function (square) {
  square.classList.add("squareBox" + i++);
});
