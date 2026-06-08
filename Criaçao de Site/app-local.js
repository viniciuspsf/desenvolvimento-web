const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", e => {
        e.preventDefault();

        const user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };

        localStorage.setItem("user", JSON.stringify(user));

        document.getElementById("message").innerText = "Cadastro realizado!";
    });
}

// ==================== LOGIN ====================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const user = JSON.parse(localStorage.getItem("user"));

        if (user && email === user.email && password === user.password) {
            localStorage.setItem("logged", "true");
            document.getElementById("message").innerText = "Login válido!";
        } else {
            document.getElementById("message").innerText = "Login inválido!";
        }
    });
}