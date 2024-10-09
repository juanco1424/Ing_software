// Validar el formulario al enviar
document.getElementById("mascotaForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Ocultar todos los mensajes de error al inicio
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(error => error.style.display = "none");

    let isValid = true;

    // Captura de los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const especie = document.getElementById("especie").value.trim();
    const habitat = document.getElementById("habitat").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const tipoComida = document.getElementById("tipoComida").value;
    const genero = document.getElementById("genero").value;
    const peso = parseFloat(document.getElementById("peso").value.trim());

    // Validaciones de cada campo
    if (!nombre) {
        showError("error-nombre", "El nombre es obligatorio.");
        isValid = false;
    }

    if (!especie) {
        showError("error-especie", "La especie es obligatoria.");
        isValid = false;
    }

    if (!habitat) {
        showError("error-habitat", "Seleccione un habitat.");
        isValid = false;
    }

    if (!fechaNacimiento) {
        showError("error-fechaNacimiento", "La fecha de nacimiento es obligatoria.");
        isValid = false;
    }

    if (!tipoComida) {
        showError("error-tipoComida", "Seleccione un tipo de comida.");
        isValid = false;
    }

    if (!genero) {
        showError("error-genero", "Seleccione el género.");
        isValid = false;
    }

    if (!peso || peso <= 0) {
        showError("error-peso", "El peso debe ser un número positivo.");
        isValid = false;
    }

    if (isValid) {
        alert("Formulario enviado con éxito.");
    }
});

// Función para mostrar errores
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

// Manejar la carga de la imagen
const uploadButton = document.getElementById('uploadButton');
const photoInput = document.getElementById('photoInput');
const photoPreview = document.getElementById('photoPreview');

uploadButton.addEventListener('click', () => {
    photoInput.click();
});

photoInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = (e) => {
            photoPreview.style.backgroundImage = `url(${e.target.result})`;
            photoPreview.style.backgroundSize = 'cover';
            photoPreview.style.backgroundPosition = 'center';
        };

        reader.readAsDataURL(file);
    } else {
        alert("Por favor, seleccione un archivo de imagen válido.");
    }
});

// Función para cancelar y resetear el formulario
function cancelForm() {
    document.getElementById("mascotaForm").reset();
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(error => error.style.display = "none");
    photoPreview.style.backgroundImage = 'none';
}
