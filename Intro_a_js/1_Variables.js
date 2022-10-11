//--------------------------------------Intro a variables 
var //es la palabra reservada que le indica a JavaScript que estamos declarando una variable.
x //es el nombre que le asignamos a la variable.
= //es el operador de asignación que le indica a JavaScript qué valor asignar.
5 //corresponde al valor inicial que vamos a almacenar en la variable.

var x = 5;

//BUENAS PRACTICAS:
//Los nombres deben expresar el contenido de la variable, así hacemos nuestro código más entendible a otros programadores; por ejemplo, si en la variable almacenamos la edad de un estudiante entonces la variable puede llamarse: edad, edadEstudiante o edadAlumno.
//El nombre de las variables puede contener los caracteres, underscore ( _ ), o signo de dólar ( $ ) al inicio, en medio o al final del nombre.
//El nombre de las variables debe iniciar con una letra ASCII sea mayúscula o minúscula, también puede empezar con un guión bajo (_) o un signo de dólar ($).
//Para separar las palabras que componen el nombre de la variable, JavaScript utiliza la convención camelCase, la cual indica que las variables empiezan en minúscula y cuando cambias de palabra inicias el primer carácter con letra mayúscula. Por ejemplo: para nombrar la variable color del carro puedes utilizar los siguientes nombres: colorCarro o colorDelCarro.
//No debes usar palabras reservadas de JavaScript para nombrar variables.
//El nombre de las variables no debe empezar con números.
//El nombre de las variables no puede contener caracteres especiales como: &, ~, %, #.
//Las variables en JavaScript nunca pueden iniciar con números, pero sí pueden contener números en la mitad o al final del nombre.
//A continuación tienes unos ejemplos de nombres de variables válidos en JavaScript:

//Ejemplo

var pizza2go = "pizza";
var aprendo_JAVASCRIPT = true;
var $_$ = "moneda";
var _saludo = "Hola";
var nombreVariable = "camel case";



//---------------------------------------Tipos de variables 

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

