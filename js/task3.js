const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", () => {
  const trimmedInput = textInput.value.trim();
  textOutput.textContent = trimmedInput === "" ? "Anonymous" : trimmedInput;
});