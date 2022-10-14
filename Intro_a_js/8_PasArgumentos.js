function saludar(amigo){
    console.log(`Hola ${amigo}`);
}

saludar('ana');

//Resultado: Hola ana

function saludarYMas(amigo, otraFuncion){  //otraFuncion que sería fin puede ser cualquier funcion y pasa a ser un segundo argumento
    console.log(`Hola ${amigo}`);
    otraFuncion()
}

function fin(){              
    console.log("Fin...")
}

saludarYMas('Pedro',fin);  

/*Resultado: 
Hola ana
Hola Pedro
Fin...
*/

//------------agregar amigo a fin

function saludar(amigo){
    console.log(`Hola ${amigo}`);
}

saludar('ana');

function saludarYMas(amigo, otraFuncion){  
    console.log(`Hola ${amigo}`);
    otraFuncion(amigo) //se le pasa un argumento amigo que toma el valor de Pedro
}

function fin(amigo){              
    console.log(`Fin del saludo...${amigo}`);
}

saludarYMas('Pedro', fin);  

/*Resultado: 
Hola ana
Hola Pedro
Fin del saludo...Pedro
*/

//------------------uso de callbacks

//Callbacks: (otraFuncion) funciones que se ejecutan en algun momento determinado y son necesaria spara lae ejecución de una función mas grande que es generica

function saludar(amigo){
    console.log(`Hola ${amigo}`);
}

saludar('ana');

function saludarYMas(amigo, otraFuncion){  //aunque llegue la función con ciertos argumentos la podemos llamar con nuesvor argumentos como Sergio
    console.log(`Hola ${amigo}`);
    otraFuncion('Sergio') //se le pasa un argumento
}

function fin(amigo){              
    console.log(`Fin del saludo...${amigo}`);
}

saludarYMas('Pedro', fin);  

/*Resultado: 
Hola ana
Hola Pedro
Fin del saludo...Sergio
*/

//---------------------------------funcion forEach

var amigos = ["Ana", "Luis", "Pedro"];

amigos.forEach(function(amigo){      //forEach es predefinida en js y es un metodo de un arreglo, lo que hace es llamar a la función tantas veces como elementos tenga el arreglo pasandole el elemento actual del mismo
    console.log(`Hola ${amigo}`);    //recibe una función como argumento
});

/*Resultado: 
Hola ana
Hola Luis
Hola Pedro

Es una forma diferente de ejecutar un for porque no es parte del lenguaje como estructura de control
sino que es una funci+on que recibe otra función usada en las iteraciones sobre un arreglo 
En esta fucnión el primer elemento es aquel sobre el cual estamos iterando y como segundo argumento se coloda el indice del elemento que estoy iterando
*/

var amigos = ["Ana", "Luis", "Pedro"];

amigos.forEach(function(amigo, index){      //forEach es predefinida en js y es un metodo de un arreglo, lo que hace es llamar a la función tantas veces como elementos tenga el arreglo pasandole el elemento actual del mismo
    console.log(`Hola ${amigo}, ${index}`);    //recibe una función como argumento
});

/*Resultado: 
Hola ana, 0
Hola Luis, 1
Hola Pedro, 2
*/