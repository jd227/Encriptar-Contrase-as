class Empleado {
    #nombre;
    #salario;

    constructor(nombre, salario) {
        this.#nombre = nombre;
        this.#salario = salario;
    }

    establecerNombre(nombre) {
        this.#nombre = nombre;
    }

    obtenerNombre() {
        return this.#nombre;
    }

    establecerSalario(salario) {
        if (typeof salario === 'number' && salario >= 0) {
            this.#salario = salario;
        } else {
            throw new Error('El salario debe ser un número no negativo.');
        }
    }

    obtenerSalario() {
        return this.#salario;
    }

    realizarTarea() {
        console.log('Realizando tarea laboral.');
    }

    calcularSalario() {
        return this.#salario;
    }
}

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

class Vendedor extends Empleado {
    #comision;

    constructor(nombre, salario, comision) {
        super(nombre, salario);
        this.#comision = comision;
    }

    establecerComision(comision) {
        if (typeof comision === 'number' && comision >= 0) {
            this.#comision = comision;
        } else {
            throw new Error('La comisión debe ser un número no negativo.');
        }
    }

    obtenerComision() {
        return this.#comision;
    }

    calcularSalario() {
        return this.obtenerSalario() + this.#comision;
    }

    realizarTarea() {
        console.log('Realizando tarea de ventas.');
    }
}

module.exports = {
    Empleado,
    Gerente,
    Vendedor
};
