// Task 1 — Reveal Hidden Message
const secret = document.getElementById("secretText991");
secret.style.visibility = "visible";
secret.textContent = "You found me using the DOM!";


// Task 2 — Button Behavior
const button = document.getElementById("weirdButtonX");
const patch = document.querySelector(".colorPatch-z9");
let clickCount = 0;

button.addEventListener("click", () => {
  clickCount++;

  patch.style.backgroundColor = "#ff7aa2";

  button.textContent = clickCount;
});


// Task 3 — Shape Shifter Box
const box = document.getElementById("box7");
let isLarge = false;

box.addEventListener("mouseenter", () => {
  box.style.borderRadius = "50%";
});

box.addEventListener("mouseleave", () => {
  box.style.borderRadius = "0";
});

box.addEventListener("dblclick", () => {
  if (isLarge) {
    box.style.width = "100px";
    box.style.height = "100px";
  } else {
    box.style.width = "200px";
    box.style.height = "200px";
  }
  isLarge = !isLarge;
});


// Task 4 — Input Decoder
const decoderInput = document.getElementById("decoderInput");
const decodedOutput = document.getElementById("decodedOutput");

decoderInput.addEventListener("input", () => {
  const value = decoderInput.value;
  if (value.includes("x") || value.includes("X")) {
    decodedOutput.textContent = "Forbidden letter detected.";
  } else {
    decodedOutput.textContent = value;
  }
});
