/*Una expresion regular es un patrón 
Se usa para ver si un strig cumple ese patrón
Se utiliza comunmente para procesar strings
Es una forma de definir un patrón para ver si coincide con una cadena de caracteres dada
*/

var palabra;
var expresionRegular;

expresionRegular = /as/; //se le asigna una expresion regular por estar delimitada entre / /, significa la secuencia del letras a y s que viene a ser el patrón

palabra = "casa";
console.log(expresionRegular.test(palabra));
//Resultado: true 

palabra = "alsa";
console.log(expresionRegular.test(palabra));
//Resultado: false

//Empleando el metodo test podemos consultar si un patrón enstá en una secuencia de caracteres dada

palabra = "pASa";
console.log(expresionRegular.test(palabra));
//Resultado: false, porque las letras están en mayuscula

//-------------------------------------------
//colocar i al final con lo cual se dice que no importa si las letras están en mayusucla o minicuscula 

var palabra;
var expresionRegular;

expresionRegular = /as/i;

palabra = "pASa";
console.log(expresionRegular.test(palabra));
//Resultado: true, ahora el patron no es sensible a mayusculas ni minusculas 

//-----------------------------------------Otra opción 

expresionRegular = new RegExp('^[abc]I[0-9]'); // un string donde está la expresión regular como parametro y otro con los modificades

/*el ^ significa el comienzo del string o de la linea 
Los conrchetes indican que pueden ser cualqueira de los 3 caracteres
letra i, seguida del 0 al 9, o sea un digito del 0 al 9
cadena empieza con a b o c, letra i, y un numero del 0 al 9
la cadena deve empezar con los caracteres descritos, pero a diferenciad del caso anterior, no puede estar dentro de la cadena
*/

palabra = "aI1";

expresionRegular = new RegExp('^[abc]I[0-9]'); 
var resultado = palabra.match(expresionRegular);
console.log(resultado);
//Resultado: ["aI1"], devuelve un arreglo con los valores que coinciden

//test: dada una experisón regular prueba esta palabra 
//match: dada la palabra validemos si coincide con una expresión regular

palabra = "aId1";
var resultado = palabra.match(expresionRegular);
console.log(resultado);
//Resultado: null, la palabra no coincide

//---------------------------VALIDAR CON EXPRESIONES REGULARES

var fila = "luis,torres";
var filaProcesada = fila.replace(/^([^,]*)),([^,]*)/,"$2, $1");  //expresion regular ocn el patron que queremos hacer coincidir 

/*el patorn comienza por un patron de cero o mas caracteres que no son comas, donde * indica este 0 o mas veces y los () indican que los vamos a guardar 
luego viene una , y seguida por la misma secuencia anterior
Debemos esperar un conjunto de caracteres que no son comas seguidos por una coma y luego otro conjunto de caracteres que no son comas
los parentesis capturan la subexpresion regular en nuestro patron
Lo que esta en los primeros parentesis se llama $1, y en el segundo () se llama $2
Dada la expresión regular reemplazar cualquier secuencia que coincida con la subexpresion $2 por $1
Cuando se imprime el resultado de ejecutar la expresión reemplazar se muestra que el nombre y apellido se invierten 
*/

console.log(filaProcesada); //Resultado: "torres, luis"

//Modificar parametros de reemplazar por $2 a $1

var fila = "luis,torres";
var filaProcesada = fila.replace(/^([^,]*)),([^,]*)/,"$2-->$1");   

console.log(filaProcesada); //Rsultado: "torres-->luis"

var filaProcesada = fila.replace(/^([^,]*)),([^,]*)/,"$2,$2-->$1");   

console.log(filaProcesada); //Rsultado: "torres,torres-->luis"