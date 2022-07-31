const validation = document.querySelector(`#validation-input`);
const getTargetLength = Number(validation.getAttribute("data-length"));

validation.addEventListener(`blur`, function () {
  if (validation.value.length === getTargetLength) {
    validation.classList.add(`valid`);
  } else {
    validation.classList.add(`invalid`);
  }
});
