const input = document.querySelector("input#name-input");
const spanName = document.querySelector("span#name-output");
const inputHandler = (event) => {
  if (event.target.value.trim() !== "") {
    spanName.textContent = event.target.value.trim();
  } else {
    spanName.textContent = "Anonymous";
  }
};

input.addEventListener("input", inputHandler);
