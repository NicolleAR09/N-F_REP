//EJERCICIOS FUNCIONES JS: https://playcode.io/javascript


//----------------Ejercico 1 de funciones en js: Funcion totalMinutos 

function totalMinutos(a,b){
    var hora = a*60; // variable hora multiplica el parametro a que corresponde a hora por 60 porque en 1 hora hay 60 minutos
    var totalMin = hora+b; // suma las horas pasadas a minutos y devuleve el resultado 
    return totalMin;
}

var resultado = totalMinutos(5,25);
console.log(resultado); // resultado esperado: 325

//----------------Ejercico 1 de funciones en js: Funcion cantidad recolectada simple

function cantidadRecolectadaSimple(a,b){
    var total = a*b;
    return total;
}

var cantidad = cantidadRecolectadaSimple(10,5);
console.log(cantidad); // resultado esperado: 50


//----------------Ejercico 1 de funciones en js: Funcion cantidad recolectada

function cantidadRecolectada(a,b,c,d){
    var estudiante = a*c;
    var adulto = b*d;
    return estudiante+adulto;
}

var result = cantidadRecolectada(1,5,20,4);
console.log(result); // resultado esperado: 40

//------------------------------------------------Solucion de Next_U

function totalMinutos(horas, minutos){
    return horas * 60 + minutos;
  }
  
console.log(totalMinutos(5, 25));
console.log(totalMinutos(1, 5));
console.log(totalMinutos(0, 15));
  
function cantidadRecolectadaSimple(costo, cantidad){
    return costo * cantidad;
}
  
console.log(cantidadRecolectadaSimple(10, 5));
console.log(cantidadRecolectadaSimple(1, 5));
  
function cantidadRecolectada(costoEstudiante, costoAdulto, cantidadEstudiantes, cantidadAdultos){
    return cantidadRecolectadaSimple(costoEstudiante, cantidadEstudiantes) + cantidadRecolectadaSimple(costoAdulto, cantidadAdultos);
}
  
console.log(cantidadRecolectada(1, 5, 20, 4));
console.log(cantidadRecolectada(0, 5, 20, 3));
  

  

