class Persona {
    #nombre;
    #edad;
    #fechaNacimiento;

    constructor(nombre, edad, fechaNacimiento) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#fechaNacimiento = fechaNacimiento;
    }

    establecerNombre(nombre) {
        this.#nombre = nombre;
    }

    obtenerNombre() {
        return this.#nombre;
    }

    establecerEdad(edad) {
        if (edad >= 0) {
            this.#edad = edad;
        } else {
            throw new Error('La edad no puede ser negativa.');
        }
    }

    obtenerEdad() {
        return this.#edad;
    }

    establecerFechaNacimiento(fechaNacimiento) {
        this.#fechaNacimiento = fechaNacimiento;
    }

    obtenerFechaNacimiento() {
        return this.#fechaNacimiento;
    }
}

module.exports = Persona;
