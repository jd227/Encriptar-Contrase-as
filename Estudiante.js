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
}

module.exports = Estudiante;
