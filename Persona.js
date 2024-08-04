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
            throw new Error('El nombre debe ser una cadena no vacía.');
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
            throw new Error('La fecha de nacimiento debe ser una fecha válida.');
        }
    }

    obtenerFechaNacimiento() {
        return this.#fechaNacimiento;
    }

    calcularFechaNacimiento() {
        const hoy = new Date();
        const añoActual = hoy.getFullYear();
        const mesActual = hoy.getMonth();
        const diaActual = hoy.getDate();

        let añoNacimiento = añoActual - this.#edad;

        const fechaNacimiento = new Date(añoNacimiento, mesActual, diaActual);

        if (hoy < fechaNacimiento) {
            añoNacimiento -= 1;
            fechaNacimiento.setFullYear(añoNacimiento);
        }

        this.#fechaNacimiento = fechaNacimiento.toISOString().split('T')[0];
        return this.#fechaNacimiento;
    }
}

// Ejemplo de uso
const prueba = new Persona('Cristian', 26, '1998-05-01');
console.log(prueba.obtenerNombre());                  // Cristian
console.log(prueba.obtenerEdad());                    // 26
console.log(prueba.obtenerFechaNacimiento());         // 1998-05-01
console.log(prueba.calcularFechaNacimiento());        //1998-08-04

module.exports = Persona;
