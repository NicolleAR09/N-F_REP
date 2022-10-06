function sumar(a,b){
    return a+b;
} 

// se declara una función con la palabra "function" seguida del nombre sumar porque es lo que quiero que haga. La funcón recibe los parametros a y b y se retorna la suma de los dos 

var resultado = sumar(4,5); //declarar un avriablee donde se almacenala adicion de dos valores
console.log(resultado); // se imprime a variable resultado, es 9

//en js una variable puede contener el valor de una función

var add = sumar; //la variabel add contiene el valor de la función sumar 

var d = add(5,2);
console.log(d); // se imprime 7 

//una variable puede ser usada como una función y se puede asignar  aotras variables

//-----------------------------NUEVO CODIGO

var x = "Prueba"; //asignar string prueba a variable x

function sumar(a,b){
    var suma = a + b //se declara una variable intermedia que almacena el valor de la suma de los parametros que recibe la función
    console.log(x); //se imprime el valor de x, que es una variable a nivel global en el código, al función puede buscar por todo el código esta variable hasta dar con ella
                    // perolas variables declaradas dentro de la función no se pueden imprimir ni localizar fuera de ella, esta variables funcionan solo de manera local dentro de la función
    return suma;    // el resultado es el mismo que cuando no se tenia la variable suma 
} 

var resultado = sumar(4,5);
console.log(resultado);


var add = sumar; 

var d = add(5,2);
console.log(d);

//RESULTADO GLOBAL: Prueba 9 Prueba 7, porque dentro de la función el imprimir x se ejecuta 2 veces 