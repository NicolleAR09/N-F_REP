//concatenando strings

var nombre = "Nicolle";
var apellido = "Antequera";
var curso = "Javascript";

//Hola <nombre> <apellido>, bienvenida al curso <curso>
console.log("Hola " + nombre + " " + apellido + ", bienvenida al curso " + curso); //Hola Nicolle Antequera, bienvenida al curso Javascript

//-----------------Funcion

function saludar(nombre, apellido, curso){
    var resultado = "Hola " + nombre + " " + apellido + ", bienvenida al curso " + curso;
    return resultado;
}

console.log(saludar("Nicolle", "Antequera", "Javascript")); //Hola Nicolle Antequera, bienvenida al curso Javascript

//uso de string interpolados, arroja el mismo resultado pero con un código mas limpio

function saludar(nombre, apellido, curso){
    var resultado = `Hola ${nombre} ${apellido}, bienvenida al curso ${curso}`;
    return resultado;
}

console.log(saludar("Nicolle", "Antequera", "Javascript")); //Hola Nicolle Antequera, bienvenida al curso Javascript


//-------------------------------------Procesando filas 

/*
Para comentar un parrafor se usa esta estructura

Dada fila donde el nombre y apellido separado por `,`
Retornar el nombre y apellido con la primera letra en mayuscula 
y el resto en minúscula 

Ejemplo: para la fila `  nicollE,  ANTEQUERA      `
El resultado es `Nicolle Antequera`
*/

var fila = `  nicollE,  ANTEQUERA      `; 

//usar el procesamiento de strigs llamado "split" el cual permite dividir un strig en funcióin de un caracter divisor (,)

var arreglo = fila.split(","); //esto divide el strig creando un arreglo con tantas posiciones como las que consiga, en este caso solo 2 porciones porque son las separadas por la ,
           // si hubieran mas , se generarian mas posiciones 
           //lo que se tiene en el arreglo son los valores ya separados

//se crea una variable para el nombre que contiene la primera posición del arreglo o sea 0
var nombre = arreglo[0].trim();
var apellido = arreglo[1].trim();

//en el string de fila se tienen espacios al inicio y al final de el nombre y el apellido entonces se una a función "trim"

console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase());

//con charAt se agarra del nombre su primer caracter y se pasa amayuscula con toUpperCase
//el resto se coloca usando la función slice la cual recibe una posicion y devuelve todo el contendio restante a partir de esa posición
//luego con la funcion toLowerCase se convierten todas las letras en minuscula

//-----------------------------crear función 

function capitalize(x){
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
}

/*se crea otra función que recibe de parametro una fila
La función toma la fila y la divide por al , en dos partes
almacena la parte 1 en nombre y le recorta los espacio, y la parte 2 en apellido y le corta los espacios con trim
luego llama a la funcion capitalize para poner la primera letra del nombre y apellido en mayuscula y el resto en minuscula
*/


function procesarFila(fila){
    var arreglo = fila.split(",");
    var nombre = arreglo[0].trim();
    var apellido = arreglo[1].trim();
    return capitalize(nombre) + " " + capitalize(apellido);
}

var fila = `  nicollE,  ANTEQUERA      `; 

console.log(procesarFila(fila));

//---------------------------------------- TALLER

var ing1 = "pasta";
var ing2 = "queso";
var ing3 = "pesto";
var ing4 = "aceite de oliva";
var ing5 = "especies variadas";
var nombre = "Pasta al pesto";

function receta(ing1, ing2, ing3, ing4, ing5, nombre){
    return `Mi Bolsa de Comida: Nombre de la Receta: ${nombre} Ingredientes: ${ing1}, ${ing2}, ${ing3}, ${ing4}, ${ing5}`;
    
}

console.log(receta(ing1, ing2, ing3, ing4, ing5, nombre));

//OTRA FORMA

var ing1 = "pasta";
var ing2 = "queso";
var ing3 = "pesto";
var ing4 = "aceite de oliva";
var ing5 = "especies variadas";
var nombre = "Pasta al pesto";

function receta(ing1, ing2, ing3, ing4, ing5, nombre){
    return "Mi Bolsa de Comida: Nombre de la Receta: " + nombre + " Ingredientes: " + ing1 + ", " + ing2 + ", " + ing3 + ", " + ing4 + ", " + ing5;
    
}

console.log(receta(ing1, ing2, ing3, ing4, ing5, nombre));