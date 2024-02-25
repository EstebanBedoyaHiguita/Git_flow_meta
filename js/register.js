// Selectors
import users from "../db/database.js";
const registerForm = document.querySelector("#register");
const userName = document.querySelector("#name");
const userPassword = document.querySelector("#password");
const userEmail = document.querySelector("#email");

// Events
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  logUser();
});

// Functions
function logUser() {
  if (validateInfo()) {
    alert("El correo electrónico ya está registrado");
    return;
  }

  const userinfo = {
    name: userName.value,
    password: userPassword.value,
    email: userEmail.value,
    id: Math.floor(Math.random() * 10) + 1,
  };

  const data = JSON.stringify(userinfo);

  localStorage.setItem(`user${userinfo.id}`, data);
  const sendData = JSON.parse(localStorage.getItem(`user${userinfo.id}`));
  users.push(sendData);
}

function validateInfo() {
  // Utilice some instead of forEach to verify any user that has  the same email
  return users.some((user) => user.email === userEmail.value);
}