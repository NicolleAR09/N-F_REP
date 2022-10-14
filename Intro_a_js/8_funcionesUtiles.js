//------------------FILTRADO: filtrar los elementos de un arreglo

var filtrado 
var edades
edades = [20,15,30,22,17,18,25,27,29];

filtrado = edades.filter(function(x){   //filter se le puede aplicar a cualquier arreglo y es una funcion que recibe otra función que va a realiar el filtrado
    return x%2 == 0
})

/*la función del argumento retorna verdadero o falso, si es verdadero pasa el filtro, sino no se toma en cuenta.
En este caso la función retorna verdad si el residuo de la división entre 2 es un entero, o sea el numero es par
*/

console.log(filtrado); //Resultado: [20,30,22,10]

//--------------------------
var filtrado 
var edades
edades = [20,15,30,22,17,18,25,27,29];

filtrado = edades.filter(function(x){   
    return x > 22;  //retorna numero mayores que 22
})

console.log(filtrado); //Resultado: [30,25,27,29]

//---------------------------------en ES6 hay otra sintaxis

var filtrado 
var edades
edades = [20,15,30,22,17,18,25,27,29];

filtrado = edades.filter(x => {   //se pone x que es el argumento que estamso iterando yuna flecha que indica que es una funcion
    return x%2 == 0
})

console.log(filtrado); //Resultado: [20,30,22,10]

//----------MAS COMPLEJO

var resultado;
var personas = [
    {
        nombre: "luis",
        edad: 20
    },
    {
        nombre: "ana",
        edad: 15
    },
    {
        nombre: "marcos",
        edad: 25
    }
];

//cada una de las 3 posiciones del arrglo es un objeto de js

resultado = personas.filter(x => {
    return x.edad > 19;
})

console.log(resultado);
//Resultado: [{"nombre":"luis","edad":20},{"nombre":"marcos","edad":25}]

//-----------------------------MAP

/*map: es una variante de filtrado que lo que hace es transformar la estructura en lo que nosotros decidamos que retorne la función interna 
La función interna nos retorna el nombre que hace que se recorran cada una de las posiciones del arreglo
y se sustituya por un arreglo que solo incluye el nombre y nada más 
*/
var resultado;
var personas = [
    {
        nombre: "luis",
        edad: 20
    },
    {
        nombre: "ana",
        edad: 15
    },
    {
        nombre: "marcos",
        edad: 25
    }
];

resultado = personas.map(x => {
    return x.nombre;
})

console.log(resultado);
//Resultado: ["luis","ana","marcos"]

resultado = personas.map(x => {
    return x.edad;
})

console.log(resultado);
//Resultado: [20,15,25]

resultado = personas.map(x => {
    return x.edad + 50;
})

console.log(resultado);
//Resultado: [70,65,75]

//map tranforma la estructura en lo que queremos obtener en otra estructura resultante 

//--------------------------------------FIND
//find: es una función que busca en el arreglo basandose en la condición declarada en la función interna y devuelve el primer el elemento que cumple la misma 

var resultado;
var personas = [
    {
        nombre: "luis",
        edad: 20
    },
    {
        nombre: "ana",
        edad: 15
    },
    {
        nombre: "marcos",
        edad: 25
    }
];

resultado = personas.find(x => {
    return x.nombre == "ana";  //buscar a las personas cuyo nombre sea ana
})

console.log(resultado);
//Resultado: {"nombre":"ana","edad":15}


//----------------------------------------TALLER

//----------------------------arreglo1

var arreglo1 = [1,2,3,4,5];

var resultado1 = arreglo1.map(x => {
    return x*2;
})

var resultado2 = arreglo1.filter(x => {
    return x%2 !== 0;
})

var resultado3 = arreglo1.map(x => {
    if (x%2 !== 0){
        return x*2;
    } else {
        return x/2;
    }
})

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

//-----------------------------arreglo2


var arreglo2 = [1,2,4,8];

var resultado1 = arreglo2.map(x => {
    return x*2;
})

var resultado2 = arreglo2.filter(x => {
    return x%2 !== 0;
})

var resultado3 = arreglo2.map(x => {
    if (x%2 !== 0){
        return x*2;
    } else {
        return x/2;
    }
})

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
