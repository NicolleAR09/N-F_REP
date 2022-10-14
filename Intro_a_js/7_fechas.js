var fecha = new Date(); //usa clase Date que viene implementada en el nucleo de js
//new Date tiene muchas interpretaciones. Si no pasamos ningun argumento se inicializa con la fecha actual del computador o servidor donde se esté corriendo el programa

//para chequear el valor de la fecha se usa una de dos formar 

//-------forma 1: to date string

console.log(fecha.toDateString());
//Resultado: Wed Jul 18 2018

//-------forma 2: formato iso que es un formato estandar internacional

console.log(fecha.toISOString());
//Resultado: 2018-08-18T04:46:07.898Z

//De la fecha se pueden pedir los elementos que la constituyesn como dia fecha y mes

console.log(fecha.getDay()); //Resultado: 3, dia 3 donde el 0 es domingo
console.log(fecha.getDate()); //Resultado: 18
console.log(fecha.getMonth()); //Resultado: 6, en js está indexado en base 0, los meses están entre 0 y 11, no entre 1 y 12

//tambien se pueden pedir el año completo, las horas y los minutos

console.log(fecha.getFullYear()); //Resultado: 2018
console.log(fecha.getHours());  //Resultado: 0, de acuerdo al formato de 24 horas
console.log(fecha.getMinutes());  //Resultado: 47

console.log(fecha.getTime()); //Resultado: 1531889289405, devuelve una cantidad de milisegundos dada un fecha base, que es un día donde se asume que el reloj es 0

/*Si new Date() no tiene argumentos, se toma la fecha en curso
Si var fecha = new Date(123), si le pasamos un numero toma el argumento como la cantidad de milisegundos a patir de la fecha base
*/ 

var fecha = new Date(2018,1,2,11,30,0,1000); //pasar varios enteros, el primero es el año, luego el mes tal como mes 1 es febrero, despues el dia 2 o sea 2 de febrero, luego la hora, 11 horas, 30 minutos, 0 segundos y mil milisegundos

//var fecha = new Date(año,mes,dia,hora,minutos,segundos,milisegundos)

/*Si solo pasamos un entero se toma como segundos desde la fecha base
si pasamos 2 enteros se asumen que son el año y el mes 
si pasamos 3 enteros se aumen que son el año el mes y el día
y así sucesivamente
*/ 

var fecha = new Date(2018,1,2,11,30,0,1000);

console.log(fecha.toDateString()); //Resultado: Fri Feb 02 2018
console.log(fecha.toISOString()); //Resultado: 2018-02-02T16:30:01.000Z

console.log(fecha.getDay()); //Resultado: 5
console.log(fecha.getDate()); //Resultado: 2
console.log(fecha.getMonth()); //Resultado: 1

console.log(fecha.getFullYear()); //Resultado: 2018
console.log(fecha.getHours());  //Resultado: 11
console.log(fecha.getMinutes());  //Resultado: 30

console.log(fecha.getTime()); //Resultado: 1517589001000

//--------------------------------------------TALLER 

function validacionNumero(numero){
    expresionRegular = new RegExp('[0-9]-[0-9]');
    resultado = numero.match(expresionRegular);
    return expresionRegular.test(resultado);
}

function validacionFecha(fecha){
    expresionRegular = new RegExp('^[0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]');
    resultado = fecha.match(expresionRegular);
    return expresionRegular.test(resultado);
}

function validacionCodigo(codigo){
    expresionRegular = new RegExp('^[0-9][0-9][0-9]');
    resultado = codigo.match(expresionRegular);
    return expresionRegular.test(resultado);
}

console.log(validacionNumero("123-1212"));
console.log(validacionFecha("12-01-1999"));
console.log(validacionCodigo("123"));

