const Empleado = require('./Empleado');

class Gerente extends Empleado {
    #bono;

    constructor(nombre, salario, bono) {
        super(nombre, salario);
        this.#bono = bono;
    }

    establecerBono(bono) {
        if (typeof bono === 'number' && bono >= 0) {
            this.#bono = bono;
        } else {
            throw new Error('El bono debe ser un número no negativo.');
        }
    }

    obtenerBono() {
        return this.#bono;
    }

    calcularSalario() {
        return this.obtenerSalario() + this.#bono;
    }

    realizarTarea() {
        console.log('Realizando tarea de gestión.');
    }
}

module.exports = Gerente;
