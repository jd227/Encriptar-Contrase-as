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
        if (typeof nombre === 'string' && nombre.trim() !== '') {
            this.#nombre = nombre;
        } else {
            throw new Error('El nombre debe ser una cadena no vacia.');
        }
    }

    obtenerNombre() {
        return this.#nombre;
    }

    establecerEdad(edad) {
        if (Number.isInteger(edad) && edad >= 0) {
            this.#edad = edad;
        } else {
            throw new Error('La edad debe ser un número entero no negativo.');
        }
    }

    obtenerEdad() {
        return this.#edad;
    }

    establecerFechaNacimiento(fechaNacimiento) {
        if (Date.parse(fechaNacimiento)) {
            this.#fechaNacimiento = fechaNacimiento;
        } else {
            throw new Error('La fecha de nacimiento debe ser una fecha valida.');
        }
    }

    obtenerFechaNacimiento() {
        return this.#fechaNacimiento;
    }

    calcularFechaNacimiento() {
        const hoy = new Date();
        const fechaNacimiento = new Date(hoy.getFullYear() - this.#edad, hoy.getMonth(), hoy.getDate());
        this.#fechaNacimiento = fechaNacimiento.toISOString().split('T')[0];
    }
}

module.exports = Persona;
