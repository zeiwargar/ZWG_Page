const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const statusText = document.getElementById("status");

loginBtn.addEventListener("click", () => {
    statusText.textContent = "Sesión iniciada";
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
});

logoutBtn.addEventListener("click", () => {
    statusText.textContent = "Sesión cerrada";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    formMessage.textContent = "Mensaje enviado correctamente";

    form.reset();
});