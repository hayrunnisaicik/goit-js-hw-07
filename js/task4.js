const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  form.reset();
});