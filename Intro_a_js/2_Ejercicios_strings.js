//funcion de evento y lugar

function encabezadoEvento(evento,lugar){
    return `Evento: ${evento}. Lugar: ${lugar}`;
}

function limpiarNombreParticipante(nombre,apellido){
    var nom = nombre.trim();   //cortar espacios en blanco del nombre
    var ap = apellido.trim();
    return ap.toUpperCase() + ", " + nom.toLowerCase();   //poner todo el apellido en mayuscula y el nombre en minuscula
}

console.log(encabezadoEvento("Intercambio de libros","Biblioteca. ") + limpiarNombreParticipante("  ANA", "MENdEZ     "));

//-------------------------Solución Next_U

function encabezadoEvento(nombre, lugar){
    return `Evento: ${nombre}. Lugar: ${lugar}`;
}
  
console.log(encabezadoEvento("Intercambio de Libros", "Biblioteca"));
console.log(encabezadoEvento("Lectura de Poemas", "Sala A"));
  
function limpiarNombreParticipante(nombre, apellidos){
    return `${apellidos.trim().toUpperCase()}, ${nombre.trim().toLowerCase()}`;
}
  
console.log(limpiarNombreParticipante("    Luis", "Castro   "));
console.log(limpiarNombreParticipante(" ANA", "MENDEZ   "));
  
