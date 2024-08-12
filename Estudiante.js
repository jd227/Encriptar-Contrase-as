// Estudiante.js
const Persona = require('./Persona');

class Estudiante extends Persona {
    #grado;

    constructor(nombre, edad, fechaNacimiento, grado) {
        super(nombre, edad, fechaNacimiento);
        this.#grado = grado;
    }

    establecerGrado(grado) {
        if (typeof grado === 'string' && grado.trim() !== '') {
            this.#grado = grado;
        } else {
            throw new Error('El grado debe ser una cadena no vacía.');
        }
    }

    obtenerGrado() {
        return this.#grado;
    }

    toString() {
        return `${super.toString()} - Grado: ${this.#grado}`;
    }
}

class EstudianteTrabajador extends Estudiante {
    realizarTarea() {
        console.log('Realizando tarea escolar.');
    }
}

module.exports = EstudianteTrabajador;

const prueba = new Estudiante('Cristian Arboleda', 26, '1998-05-01', '5 Trimestre');
console.log(prueba.obtenerNombre());                  // Cristian Arboleda
console.log(prueba.obtenerEdad());                    // 26
console.log(prueba.obtenerFechaNacimiento());         // 1998-05-01
console.log(prueba.obtenerGrado());                   // 5 Trimestre
// Salida esperada:
// Cristian Arboleda - Edad: 26 - Fecha de Nacimiento: 1998-05-01 - Grado: 5 Trimestre
