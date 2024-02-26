//Selectors
import user from "../db/database.js";
const formLogin = document.querySelector("#formLogin");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

//Events
formLogin.addEventListener("submit", (event) => {
	event.preventDefault();
	loginUser();
});

//Functions
function loginUser() {
	const userEmail = email.value;
	const userPassword = password.value;
	const existingUser = users.find(
		(user) => user.email === userEmail && user.password === userPassword
	);

	if (existingUser) {
		alert("Inicio de sesión exitoso");
	} else {
		alert("Credenciales incorrectas");
	}
}
