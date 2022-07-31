const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть всі поля");
  }

  console.log(`{Login: ${email.value}, Password: ${password.value}}`);
  event.currentTarget.reset();
}
