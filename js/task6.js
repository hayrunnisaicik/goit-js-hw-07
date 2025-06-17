function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmount = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = parseInt(inputAmount.value.trim(), 10);
  if (isNaN(amount) || amount < 1 || amount > 100) return;
  destroyBoxes();
  createBoxes(amount);
  inputAmount.value = "";
});

function createBoxes(amount) {
  const box = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const element = document.createElement("div");
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    element.style.marginBottom = "3px";
    element.style.marginTop = "3px";
    box.push(element);
    size += 10;
  }
  boxes.append(...box);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);