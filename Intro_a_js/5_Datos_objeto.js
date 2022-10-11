//Dcelarar variable de tipo objeto 

var persona;
persona = {nombre: "Nicolle", apellido: "Antequera"}; //nombre del atributo: valor, estructura de datos que puede representarse en una clase

console.log(persona.nombre); // resultado: Nicolle
console.log(persona.apellido); //resultado: Antequera 

//Forma alternativa de consultar propiedades del objeto a travez del uso de la notación sub

console.log(persona['nombre']); // resultado: Nicolle
console.log(persona['apellido']); //resultado: Antequera 

//-----------otra forma de acceder a un objeto en js

var persona;
persona = {nombre: "Nicolle", apellido: "Antequera"}; //nombre del atributo: valor, estructura de datos que puede representarse en una clase

var propiedad = "nombre";
console.log(persona[propiedad]);

//-----------------------------------

var persona;
persona = {nombre: "Nicolle", apellido: "Antequera", telefonos:["123123", "321321"]};

console.log(persona.telefonos[0]); //entrega el numero en la posición 0
console.log(persona.telefonos.length); //tamaño del arreglo de telelfonos, hay 2 numero de telelfono 

//------------objeto dentro de otro objeto
var persona;
persona = {nombre: "Nicolle", 
    apellido: "Antequera", 
    telefonos:["123123", "321321"],
    direccion:{
        estado: "principal",
        ciudad: "dorado",
        calle: "7",
        casa: 5
    }
}

console.log(persona.direccion.estado); //resultado: principal
console.log(persona.edad); //resultado: undefined

//cuando se usa un condicional indefinido lo toma como un valor de falso 

persona.edad = 20; 
console.log(persona.edad); //resultado: 20

//--------------------------TALLER

var deporteJudo = {
    nombre: "Judo",
    origen: "Japón",
    clubes: {
        dojo: ["Sensei VU", "Sensei Sato"],
        ciudad: ["Inmaculada", "Tokio"]
    }
}

function deporte(deporteJudo){
    return `Club de ${deporteJudo.nombre} ${deporteJudo.clubes.dojo[0]}, Ciudad: ${deporteJudo.clubes.ciudad[0]}`
}

console.log(deporte(deporteJudo));
//Resultado: Club de Judo Sensei VU, Ciudad: Inmaculada

