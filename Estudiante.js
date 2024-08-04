const Persona = require('./Persona');

class Estudiante extends Persona {
    #grado;

    constructor(nombre, edad, fechaNacimiento, grado) {
        super(nombre, edad, fechaNacimiento);
        this.#grado = grado;
    }
}

module.exports = Estudiante;
