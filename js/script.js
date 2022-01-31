"use strict";
let squares = 1000;
let container = document.getElementById("container");
for (let i = 0; i < squares; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", function (event) {});
  square.addEventListener("mouseout", function (event) {});
  container.appendChild(square); //Uncaught TypeError: Cannot read properties of null (reading 'appendChild').
}
