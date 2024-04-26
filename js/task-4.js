const form = document.querySelector(".login-form");

const submitHandler = (event) => {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  if (
    elements.email.value.trim() === "" ||
    elements.password.value.trim() === ""
  ) {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: elements.email.value.trim(),
      password: elements.password.value.trim(),
    };
    console.log(formData);
  }
  form.reset();
};

form.addEventListener("submit", submitHandler);
