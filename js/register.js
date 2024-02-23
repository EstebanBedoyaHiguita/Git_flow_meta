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

  localStorage.setItem(`user${userName.value}`, data);
  const sendData = JSON.parse(localStorage.getItem(`user${userName.value}`));
  users.push(sendData);
  console.log(users);
}

function validateInfo() {
  users.forEach((user) => {
    if (user.email == userEmail.value) {
      return false;
    }
  });
  return true;
}
