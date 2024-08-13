// Define un abecedario personalizado y un desplazamiento para la encriptacion
const abecedario = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
const desplazamiento = 3; // Valor del desplazamiento para la encriptacion

// Funcion para encriptar la contrasena
function encriptar() {
    // Obtiene el valor de la contrasena del campo de entrada
    const contraseña = document.getElementById('contraseña').value;

    // Encripta la contrasena usando el abecedario y el desplazamiento
    const encriptado = contraseña.split('').map(resultado => {
        const indice = abecedario.indexOf(resultado);
        if (indice === -1) return resultado;
        return abecedario[(indice + desplazamiento + abecedario.length) % abecedario.length];
    }).join('');

    // Muestra la contrasena encriptada en la pagina
    document.getElementById('result').innerText = `Contrasena encriptada: ${encriptado}`;

    // Guarda la contrasena encriptada en el almacenamiento local del navegador
    localStorage.setItem('encriptado', encriptado);

    // Muestra la contrasena encriptada en el campo correspondiente
    document.getElementById('codigomodificado').value = encriptado;
}

// Funcion para desencriptar la contrasena encriptada
function desencriptar() {
    // Obtiene la contrasena encriptada guardada en el almacenamiento local
    const encriptado = localStorage.getItem('encriptado');

    // Obtiene el valor del campo modificado
    const modificado = document.getElementById('codigomodificado').value;

    // Verifica si hay una contrasena encriptada
    if (!encriptado) {
        document.getElementById('result').innerText = 'No hay contrasena encriptada.';
        return;
    }

    // Desencripta el texto original encriptado
    const desencriptadoOriginal = encriptado.split('').map(resultado => {
        const indice = abecedario.indexOf(resultado);
        if (indice === -1) return resultado; 
        return abecedario[(indice - desplazamiento + abecedario.length) % abecedario.length];
    }).join('');

    // Desencripta el texto modificado
    const desencriptadoModificado = modificado.split('').map(resultado => {
        const indice = abecedario.indexOf(resultado);
        if (indice === -1) return resultado; 
        return abecedario[(indice - desplazamiento + abecedario.length) % abecedario.length];
    }).join('');

    // Muestra el resultado de la desencriptacion del texto original
    document.getElementById('result').innerText = `Contrasena desencriptada original: ${desencriptadoOriginal}`;

    // Actualiza el campo de entrada con la contrasena desencriptada del texto modificado
    document.getElementById('contraseña').value = desencriptadoModificado;
}

// Funcion para verificar si el codigo encriptado ha sido modificado
function verificar() {
    // Obtiene la contrasena encriptada original y el valor del campo modificado
    const originalEncriptado = localStorage.getItem('encriptado');
    const codigomodificado = document.getElementById('codigomodificado').value;

    // Verifica si hay una contrasena encriptada para comparar
    if (!originalEncriptado) {
        document.getElementById('result').innerText = 'No hay contrasena encriptada para verificar.';
        return;
    }

    // Compara el codigo encriptado original con el modificado y muestra el resultado
    if (codigomodificado === originalEncriptado) {
        document.getElementById('result').innerText = 'El codigo encriptado no ha sido modificado.';
    } else {
        document.getElementById('result').innerText = 'El codigo encriptado ha sido modificado.';
    }
}
