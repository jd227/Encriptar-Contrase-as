const EstudianteTrabajador = require('./Estudiante');

const estudiante = new EstudianteTrabajador('Cristian Arboleda', 26, '1998-05-01', '5 Trimestre');
console.log(estudiante.obtenerNombre());
console.log(estudiante.obtenerEdad());
console.log(estudiante.obtenerFechaNacimiento());
console.log(estudiante.obtenerGrado());
estudiante.realizarTarea(); 


const { Empleado, Gerente, Vendedor } = require('./Empleado');

const gerente = new Gerente('Carlos', 5000, 2000);
console.log(gerente.obtenerNombre());          
console.log(gerente.calcularSalario());        
gerente.realizarTarea();                        

const vendedor = new Vendedor('Ana', 3000, 500);
console.log(vendedor.obtenerNombre());        
console.log(vendedor.calcularSalario());      
vendedor.realizarTarea();                        

