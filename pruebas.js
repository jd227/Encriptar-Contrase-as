const EstudianteTrabajador = require('./Estudiante');
const Empleado = require('./Empleado');

const estudiante = new EstudianteTrabajador('Cristian Arboleda', 26, '1998-05-01', '5 Trimestre');
console.log(estudiante.obtenerNombre());
console.log(estudiante.obtenerEdad());
console.log(estudiante.obtenerFechaNacimiento());
console.log(estudiante.obtenerGrado());
estudiante.realizarTarea(); 

const empleado = new Empleado();
empleado.realizarTarea(); 