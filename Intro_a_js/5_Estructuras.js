//diferenciación entre variables simples y complejas 

var color = "blanco";
var color2 = color;
console.log(color);
console.log(color2);
//resultado: blanco blanco 

color2 = "verde";
console.log(color);
console.log(color2);
//resultado: blanco verde

//con variables complejas no se hace esa copia sino una referencia en memoria

var personas
personas = [{
    nombre: "Luis"
}]

console.log(personas);
//resultado: [{nombre: "Luis"}]


//-----------------------agregando un push

var personas
personas = [{
    nombre: "Luis"
}]


personas.push({              //push: agrega al final de un arreglo
    nombre: "marcos",
    edad: 10
})

console.log(personas);
//resultado: [{nombre: "Luis"},{nombre: "marcos", edad: 10}]

//--------------creando variable amigos

var personas
personas = [{
    nombre: "Luis"
}]


personas.push({              //push: agrega al final de un arreglo
    nombre: "marcos",
    edad: 10
})

personas[1].amigos = ["Roberto", "Ana"];

console.log(personas);
//resultado: [{nombre: "Luis"},{nombre: "marcos", edad: 10, amigos: ["Roberto", "Ana"]}]

var usuario = personas;
console.log(usuario); 
//resultado: [{nombre: "Luis"},{nombre: "marcos", edad: 10, amigos: ["Roberto", "Ana"]}]

usuario[1].nombre = "pedro";
console.log(personas); //resultado: [{nombre: "Luis"},{nombre: "pedro", edad: 10, amigos: ["Roberto", "Ana"]}]
console.log(usuario); //resultado: [{nombre: "Luis"},{nombre: "pedro", edad: 10, amigos: ["Roberto", "Ana"]}]

//cuando se hace el cambio en usuarios[1] se cambia tanto en usuarios como en personas
//las dos variables están unidas por una referencia haciendo que ambas tengan igual valor y se imprima el mismo contenido luego del cambio.
