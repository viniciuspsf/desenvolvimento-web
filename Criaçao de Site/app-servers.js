// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", async e => {
    e.preventDefault();

    const response = await fetch("server-side/login-bd.php", {
        method: "POST",
        body: new FormData(e.target)
    });

    const result = await response.text();
    document.getElementById("message").innerText = result;
});

// REGISTRO
document.getElementById("registerForm")?.addEventListener("submit", async e => {
    e.preventDefault();

    const response = await fetch("server-side/register-bd.php", {
        method: "POST",
        body: new FormData(e.target)
    });

    const result = await response.text();
    document.getElementById("message").innerText = result;
});