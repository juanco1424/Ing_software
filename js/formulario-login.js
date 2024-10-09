document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    // Check validity
    const isEmailValid = validateEmail(emailInput.value, emailError);
    const isPasswordValid = validatePassword(passwordInput.value, passwordError);

    if (isEmailValid && isPasswordValid) {
        alert('Inicio de sesión exitoso');
        // Puedes realizar otras acciones aquí, como enviar el formulario al servidor
    }
});

// Validate email
function validateEmail(email, errorElement) {
    if (!email) {
        showError(errorElement, 'El campo de usuario es obligatorio.');
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        showError(errorElement, 'Por favor, ingrese un correo electrónico válido.');
        return false;
    }
    return true;
}

// Validate password
function validatePassword(password, errorElement) {
    if (!password) {
        showError(errorElement, 'El campo de contraseña es obligatorio.');
        return false;
    } else if (password.length < 6) {
        showError(errorElement, 'La contraseña debe tener al menos 6 caracteres.');
        return false;
    }
    return true;
}

// Display error message
function showError(element, message) {
    element.innerText = message;
    element.style.display = 'block';
}


// Redireccionar al hacer clic en el botón "Registrarse"
document.getElementById('Registrarse').addEventListener('click', function (event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del botón submit
    window.location.href = 'Formulario-registro.html'; // Reemplaza 'registro.html' con la ruta del archivo destino
});
