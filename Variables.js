//Tipos de variables 

var edad = 20; //declarar variables tipo entero 
console.log(edad); //Mostrar variable, resultado: 20

var distacia = 1.5; //declarar variables tipo float 
console.log(distacia); // Mostrar valor de variables distacia, resultado: 1.5

var nombre = "Nicolle"; //declarar variables tipo string
console.log(nombre); // Mostrar variable, resultado:Nicolle 

var colores = ["rojo" , "morado" , "negro"]; //declarar variable tipo arreglo 
console.log(colores[2]); //mostrar variable en posición 2 (va del 0 al 2, 2 es la posición # 3), resultado: negro

var persona = {"altura": 160, colorDeOjos: "café"}; //declarar variables de tipo objeto
console.log(persona.colorDeOjos); //mostrar resultado: café

var estaActivo = false; //declarar variable tipo boolean 
console.log(estaActivo); //mostrar resultado: false 

var a = 1; //asignar valores a variables 
var b = 3; 

var c = a + b; //asignar a operación al declarar una variable 
console.log(c); // mostrar resultado: 4

var nombreYEdad = "Nombre: " + nombre + ", Edad:" + edad; //declarar variable usando otras variables previamente declaradas
console.log(nombreYEdad); //mostrar resultado: Nombre: Nicolle , Edad: 20 

let A; // declarar variable usando let, es solo para un bloque del código 
const B = 0; //declarar variables usando const, para constantes y variables que no se pueden modificar despues 

