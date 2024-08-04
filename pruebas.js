const EstudianteTrabajador = require('./Estudiante');

const estudiante = new EstudianteTrabajador('Cristian Arboleda', 26, '1998-05-01', '5 Trimestre');
console.log(estudiante.obtenerNombre());
console.log(estudiante.obtenerEdad());
console.log(estudiante.obtenerFechaNacimiento());
console.log(estudiante.obtenerGrado());
estudiante.realizarTarea(); 

const { FiguraGeometrica, Rectangulo, Circulo } = require('./FiguraGeometrica');

const figura = new FiguraGeometrica('Figura', 'Verde');
console.log(figura.obtenerNombre());
console.log(figura.obtenerColor());

const rectangulo = new Rectangulo('Rectángulo', 'Rojo', 5, 3);
console.log(rectangulo.obtenerNombre()); 
console.log(rectangulo.obtenerColor()); 
console.log(rectangulo.calcularArea()); 
console.log(rectangulo.calcularPerimetro()); 

const circulo = new Circulo('Círculo', 'Azul', 4);
console.log(circulo.obtenerNombre()); 
console.log(circulo.obtenerColor()); 
console.log(circulo.calcularArea()); 
console.log(circulo.calcularPerimetro()); 


const { Empleado, Gerente, Vendedor } = require('./Empleado');

const gerente = new Gerente('Carlos', 5000, 2000);
console.log(gerente.obtenerNombre());          
console.log(gerente.calcularSalario());        
gerente.realizarTarea();                        

const vendedor = new Vendedor('Ana', 3000, 500);
console.log(vendedor.obtenerNombre());        
console.log(vendedor.calcularSalario());      
vendedor.realizarTarea();                        

