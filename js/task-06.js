const validation = document.querySelector("#validation-input");
const validationConfirm = validation.getAttribute("data-length");


function onValidationBlur (event) {
    this.classList.add("invalid");
    if(event.target.value.length > Number(validationConfirm)){
        this.classList.remove("invalid");
        this.classList.add("valid")
    }
}
validation.addEventListener("blur", onValidationBlur)
