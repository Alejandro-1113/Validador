const form = document.getElementById("form");

form.addEventListener("input", validar);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validar();

    const errores = document.querySelectorAll(".error");
    const hayErrores = [...errores].some(e => e.textContent !== "");

    if (!hayErrores) {
        alert("Registro exitoso");
    }
});

function validar() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirm").value.trim();

    // Validación nombre
    document.getElementById("error-nombre").textContent =
        nombre.length < 3 ? "El nombre debe tener mínimo 3 caracteres." : "";

    // Validación email
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    document.getElementById("error-email").textContent =
        !emailRegex.test(email) ? "Email no válido." : "";

    // Validación contraseña
    const passRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    document.getElementById("error-password").textContent =
        !passRegex.test(password)
            ? "Debe tener 8 caracteres, una mayúscula y un número."
            : "";

    // Confirmación
    document.getElementById("error-confirm").textContent =
        password !== confirm ? "Las contraseñas no coinciden." : "";
}
