const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");


function onInputName(event) {
  const textInput = event.currentTarget.value;
  if(textInput.length === 0){
    return nameOutput.textContent = "Anonymous"
  };
  nameOutput.textContent = textInput;
}
console.log(nameOutput.textContent);
nameInput.addEventListener("input", onInputName);