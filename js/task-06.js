const validation = document.querySelector("#validation-input");
const validationConfirm = validation.getAttribute("data-length");


function onInputValid(event) {
    if(event.target.value.length === Number(validationConfirm)){
        input.classList.remove("invalid");
        input.classList.add("valid")
    }
}
