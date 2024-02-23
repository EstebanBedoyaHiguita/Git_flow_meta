//Selectors
import users from "../db/database.js";
const registerForm = document.querySelector("#register");
const userName = document.querySelector("#name");
const userPassword = document.querySelector("#password");
const userEmail = document.querySelector("#email");

//Events
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  logUser();
});

//Functions
function logUser() {
  if (!validateInfo()) {
    alert("El correo electrónico ya está registrado");
    return;
  }

  const userinfo = {
    name: userName.value,
    password: userPassword.value,
    email: userEmail.value,
  };

  const data = JSON.stringify(userinfo);

  localStorage.setItem("users", data);
}

function validateInfo() {
  if (users[0]) {
    if (users[0].email === userEmail.value) {
      return false;
    }
  }

  return true;
}
