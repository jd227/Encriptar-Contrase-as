// Define un alfabeto personalizado y un desplazamiento para la encriptación
const abecedario = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
const desplazamiento = 3; // Valor del desplazamiento para la encriptación

// Función para encriptar la contraseña
function encriptar() {
    const contraseña = document.getElementById('contraseña').value;
    const encriptado = contraseña.split('').map(resultado => {
        const indice = abecedario.indexOf(resultado);
        if (indice === -1) return resultado; // Si el carácter no está en el alfabeto personalizado
        return abecedario[(indice + desplazamiento + abecedario.length) % abecedario.length];
    }).join('');
    document.getElementById('result').innerText = `Contraseña encriptada: ${encriptado}`;
    localStorage.setItem('encriptado', encriptado); // Guarda la contraseña encriptada
    document.getElementById('codigomodificado').value = encriptado; // Muestra la contraseña encriptada
}

// Función para desencriptar la contraseña encriptada
function desencriptar() {
    const encriptado = localStorage.getItem('encriptado');
    if (!encriptado) {
        document.getElementById('result').innerText = 'No hay contraseña encriptada.';
        return;
    }
    const desencriptado = encriptado.split('').map(char => {
        const indice = abecedario.indexOf(char);
        if (indice === -1) return char; // Si el carácter no está en el alfabeto personalizado
        return abecedario[(indice - desplazamiento + abecedario.length) % abecedario.length];
    }).join('');
    document.getElementById('result').innerText = `Contraseña desencriptada: ${desencriptado}`;
}

// Función para verificar si el código encriptado ha sido modificado
function verificar() {
    const originalEncriptado = localStorage.getItem('encriptado');
    const codigomodificado = document.getElementById('codigomodificado').value;

    if (!originalEncriptado) {
        document.getElementById('result').innerText = 'No hay contraseña encriptada para verificar.';
        return;
    }

    if (codigomodificado === originalEncriptado) {
        document.getElementById('result').innerText = 'El código encriptado no ha sido modificado.';
    } else {
        document.getElementById('result').innerText = 'El código encriptado ha sido modificado.';
    }
}
