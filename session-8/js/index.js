import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";
let button = document.createElement("button");
let text = document.createTextNode("Show population");

// button.appendChild(text);
button.onclick = displayPopulation;
document.body.appendChild(button);

// createListOfFruits(fruits);

document
  .querySelector("#remove-handler")
  .addEventListener("mousemove", randomNumber);

function randomNumber() {
  document.querySelector("#random-number").innerHTML = Math.random();
}

const button2 = document.querySelector("#remove-handler-button"); // Get the button we want to add an onclick handler to
button2.onclick = removeHandler; // Set the onclick handler to be our removeHandler function

function removeHandler() {
    document.querySelector("#remove-handler").removeEventListener("mousemove", randomNumber); // Get the div and remove the handler that was previously added
}