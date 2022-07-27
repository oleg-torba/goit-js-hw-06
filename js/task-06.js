const validation = document.querySelector("#validation-input");
const validationConfirm = validation.getAttribute("data-length");


const onValidationBlur = (event) => {
    if(validation.value > validationConfirm.length){
        validation.classList.add("valid")
    }
    else {
        validation.classList.add("invalid")
    }
    validation.addEventListener("blur", event)
}
console.log(onValidationBlur)