//Funcion saludo Y momento

var genero = "FEMENINO";

function momento(minutosQueFaltan){
    if (minutosQueFaltan < 60*24){
        return "hoy";
    } else if (minutosQueFaltan < 60*24*2){
        return "mañana";
    } else {
        return "pronto";
    }
}

function saludo(nombre, apellido, genero, evento, minutosQueFaltan,){
    if (genero == FEMENINO){
        return `Bienvenida ${nombre.trim().toUpperCase()} ${apellido.trim().toUpperCase()}, recuerda ${momento(minutosQueFaltan)} el evento (${evento})`

    } else {
        return `Bienvenido ${nombre.trim().toUpperCase()} ${apellido.trim().toUpperCase()}, recuerda ${momento(minutosQueFaltan)} el evento (${evento})`
    }

}

console.log(saludo("    LUIS", "perez", "MASCULINO", "Película", 600));
console.log(saludo("ana ", "peRez", "FEMENINO", "Comidas del Mundo", 1500));
console.log(saludo("  PEDRO ", "Gil", "MASCULINO", "Juego de Baloncesto", 5000));


//-------------------------------SOLUCIÓN NEXT_U

function saludo(nombre, apellido, genero, evento, minutosQueFaltan){
    var saludo = "";
    var dia = "";
  
  
    if (genero == "FEMENINO"){
        saludo = "Bienvenida";
    }
    else{
        saludo = "Bienvenido";
    }
  
    if (minutosQueFaltan < 60*24){
        dia = "hoy";
    }
    else if (minutosQueFaltan < 60*24*2){
        dia = "mañana";
    }
    else{
        dia = "pronto";
    }
  
    return `${saludo} ${nombre.trim().toUpperCase()} ${apellido.trim().toUpperCase()}, recuerda ${dia} el evento (${evento})`;
  
  }
  
  console.log(saludo("    LUIS", "perez", "MASCULINO", "Película", 600));
  console.log(saludo("ana ", "peRez", "FEMENINO", "Comidas del Mundo", 1500));
  console.log(saludo("  PEDRO ", "Gil", "MASCULINO", "Juego de Baloncesto", 5000));
  
  