function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//
const boxesParent = document.querySelector("#boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("#controls input");
//
function createBoxes(amount) {
  boxesParent.innerHTML = "";
  let divBoxSize = 30;
  for (let i = 1; i <= amount; i++) {
    const divBox = document.createElement("div");
    divBox.style.width = `${divBoxSize}px`;
    divBox.style.height = `${divBoxSize}px`;
    divBoxSize += 10;
    divBox.style.backgroundColor = getRandomHexColor();
    boxesParent.append(divBox);
  }
}
//
const createClickHandler = () => {
  let inputValue = input.value;
  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
    input.value = "";
  }
};
//
const destroyClickHandler = (event) => {
  boxesParent.innerHTML = "";
};
//
create.addEventListener("click", createClickHandler);
destroy.addEventListener("click", destroyClickHandler);
