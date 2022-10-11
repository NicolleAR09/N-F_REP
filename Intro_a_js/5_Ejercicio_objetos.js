//Validación de eventos 

function stringValido(string, largo){      //validar nombre, diferente a no null y a undefined, minimo 3 caracteres y quitar espacios en blanco
    if (string==null || string==undefined){
        return false;
    } 
    if (string.trim().lenght<largo){
        return false;
    }

    return true;
}   

function fechaValida (fecha,minimaFecha){
    if (fecha==null || fecha==undefined){
        return false;
    } 
    if (fecha.getTime()<minimaFecha.getTime()){
        return false;
    }

    return true;
}


function eventoValido(evento){
    if (evento==null || evento==undefined){
        return false;
    } 
    
    return (
        stringValido(evento.nombre, 3) &&
        stringValido(evento.descripcion, 10) &&
        fechaValida(evento.fecha, new Date(2018,1,1))
    )
}

var evento = {
    nombre: "Evento 1",
    descripcion: "Esto es una descripción",
    fecha: new Date(2018,10,1)
};

console.log(eventoValido(evento));