const javascriptFormValidations = document.getElementById(
  "javascriptFormValidations"
);
const userName = document.getElementById("userName");
const last_name = document.getElementById("lastName");
const emailId = document.getElementById("emailId");
const PasswordId = document.getElementById("PasswordId");
const PasswordIdTwo = document.getElementById("PasswordIdTwo");
const mobileId = document.getElementById("mobileId");
const yourBiodata = document.getElementById("yourBiodata");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

javascriptFormValidations.addEventListener("formSubmit", (e) => {
  e.preventDefault();

  validateInputs();
});

const validateInputs = () => {
  const userNameValue = userName.value.trim();
  const emailIdValue = emailId.value.trim();
  const PasswordId = passwordId.value.trim();
  const PasswordIdTwo = passwordIdTwo.value.trim();
  const mobileIdValue = mobileId.value.trim();
  const yourBiodata = yourBiodata.value.trim();

  if (userNameValue === "") {
    setError(userName, "User name is required");
  } else {
  }
};
