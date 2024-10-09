document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('otherInfoForm');
    const uploadButton = document.getElementById('uploadButton');
    const photoInput = document.getElementById('photoInput');
    const photoPreview = document.getElementById('photoPreview');

    form.addEventListener('submit', function(event) {
        // Evitar que se envíe el formulario
        event.preventDefault();

        // Llame a la función de validación
        ValidarForm();
    });

    // Cuando se hace click en el botón, activa la subida del archivo
    uploadButton.addEventListener('click', () => {
        photoInput.click();
    });

    function ValidarForm() {
        let isValid = true;

        // Limpiar los mensajes de error
        clearErrors();

        // Validar el correo
        const correo = document.getElementById('correo');
        const correoError = document.getElementById('correo-error');
        if (!correo.value.includes('@') || !correo.value.includes('.')) {
            correoError.textContent = 'Correo no válido.';
            isValid = false;
        }

        // Validar password
        const password = document.getElementById('password');
        const passwordError = document.getElementById('password-error');
        if (password.value === '') {
            passwordError.textContent = 'La contraseña es requerida.';
            isValid = false;
        }

        // Validar Nombre
        const nombre = document.getElementById('nombre');
        const nombreError = document.getElementById('nombre-error');
        if (nombre.value.trim() === '') {
            nombreError.textContent = 'El nombre es requerido.';
            isValid = false;
        }

        // Validar Apellido
        const apellido = document.getElementById('apellido');
        const apellidoError = document.getElementById('apellido-error');
        if (apellido.value.trim() === '') {
            apellidoError.textContent = 'El apellido es requerido.';
            isValid = false;
        }

        // Validar Fecha de Nacimiento
        const fechaNacimiento = document.getElementById('fecha_nacimiento');
        const fechaNacimientoError = document.getElementById('fecha_nacimiento-error');
        if (fechaNacimiento.value === '') {
            fechaNacimientoError.textContent = 'La fecha de nacimiento es requerida.';
            isValid = false;
        }

        // Validar Género
        const genero = document.getElementById('genero');
        const generoError = document.getElementById('genero-error');
        if (genero.value === '') {
            generoError.textContent = 'Seleccione su género.';
            isValid = false;
        }

        // Validar Celular
        const celular = document.getElementById('celular');
        const celularError = document.getElementById('celular-error');
        if (celular.value.trim() === '' || isNaN(celular.value) || celular.value.length < 10) {
            celularError.textContent = 'El número de celular no es válido.';
            isValid = false;
        }

        // Validar Cedula
        const cedula = document.getElementById('cedula');
        const cedulaError = document.getElementById('cedula-error');
        if (cedula.value.trim() === '' || isNaN(cedula.value)) {
            cedulaError.textContent = 'La cédula no es válida.';
            isValid = false;
        }

        // si se valida todo se envia el formulario
        if (isValid) {
            form.submit();
        }
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.textContent = '');
    }

    // Escuche los cambios en la entrada del archivo
    photoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        
        if (file && file.type.startsWith('image/')) {
            // instanciar un reader
            const reader = new FileReader();

            reader.onload = (e) => {
                // Establecer la imagen cargada como fondo del div de marcador de posición de foto
                photoPreview.style.backgroundImage = `url(${e.target.result})`;
            };

            // Leer el archivo de imagen como una URL de datos
            reader.readAsDataURL(file);
        } else {
            alert("Por favor, seleccione un archivo de imagen válido.");
        }
    });
});
