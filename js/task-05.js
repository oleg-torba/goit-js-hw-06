const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function onInputListen (event){
    const inputListen = event.currentTarget.value;
    console.log(inputListen);
    if(inputListen.length === 0){
    return output.textContent = "Anonymous";}
    output.textContent = inputListen;
}
textInput.addEventListener("input", onInputListen);
