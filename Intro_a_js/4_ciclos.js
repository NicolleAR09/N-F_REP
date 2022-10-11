for (var i=0; i<10 ;i++){   //se inicializa la variable i; se evalúa hasta i<10; se incrementa de 1 en 1 
    console.log(i);
}

//resultado: 1 2 3 4 5 6 7 8 9

//ciclos con arreglos 

var arreglo = [3, 4, 5, 6, 7];

var suma = 0;

for (var i=0; i<arreglo.length; i++){   //length es la longitud del arreglo qeu es 5
    suma = suma + arreglo[i];
}

console.log(suma); //respuesta: 25

//------------------------------------------otra forma 

var arreglo = [3, 4, 5, 6, 7];

var suma = 0;

for (var i in arreglo){   // for tiene otras variantes para integrar objetos, i es el valor de l avaribale que va a ir tomando los valores del indice del arreglo, y el arreglo es lo que vamos a recorrer
    suma = suma + arreglo[i];
}

console.log(suma); //respuesta: 25


//------------------OTRA SINTAXIS

var arreglo = [3, 4, 5, 6, 7];

var suma = 0;

for (var elemento of arreglo){   // elemento hace lo mismo que i 
    suma = suma + elemento;
}

console.log(suma); //respuesta: 25


//--------------------------------while

var contador = 1;

while (contador < 10){
    console.log(contador);
    contador ++;
}

//resultado: 1 2 3 4 5 6 7 8 9

//usando do while, primero se ejecuta el codigo y despues se evalua 
var contador = 1;
do {
    console.log(contador);
    contador ++;
}
while (contador < 10);

//resultado: 1 2 3 4 5 6 7 8 9

//break: hace que nos salgamos del ciclo de una manera abrupta
var contador = 1;
do {
    console.log(contador);
    
    if(contador > 5){
        break;
    }
    contador ++;
}
while (contador < 10);

//resultado: 1 2 3 4 5 6 

/*continue: si tenemos muchas instrucciones y deseamos volver a ejecutar el ciclo
hace que se vuelva a inciar el bucle*/

var contador = 1;
do {

    contador ++;
    
    if(contador > 5){
        continue;
    }
    console.log(contador);
    
}
while (contador < 10);

//resultado: 2 3 4 5 

/*se incia contador en 1 y entra ene l ciclo se convierte en 2 luego si no es mayor que 5 se imprime
y asi continua incrementando el contador hasta llegar a 6 donde se cumple la condicion
y se ejecuta el continue y se vuelve a ejecutar la instrucción modificando el contador 
no se vuelve a imprimir sino que se vulve a iniciar el ciclo*/


//----------------------TALLER

var canciones = ["song1", "song2", "song3", "song4", "song5"];

function songs(canciones){
    console.log("Mi lista de canciones preferidas");
    for (var i=0; i<canciones.length; i++){
        console.log(canciones[i]);
    }

}

console.log(songs(canciones));
