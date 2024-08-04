const Trabajador = require('./Trabajador');

class Empleado extends Trabajador {
    realizarTarea() {
        console.log('Realizando tarea laboral.');
    }
}

module.exports = Empleado;
