//Desarrollar tres funciones 

//Función minimo 

function minimo(donaciones){
    var min = 99999;
    for (monto of donaciones){
        if (monto<min){
            min = monto;
        }
    }  
    return min;
}

//funcion maximo 

function maximo(donaciones){
    var max = 0;
    for (monto of donaciones){
        if (monto>max){
            max = monto;
        }
    }
    return max;
}

//funcion promedio

function promedio(min, max, donaciones){
    var prom = 0;
    var i=0;
    for (monto of donaciones){
      if(monto > min && monto < max){
          prom = prom + monto;
        i++;
    }
      }  
      
    return prom/(i);
}

var donaciones = [5,15,22,25,30,52,5,1,0];
var min = minimo(donaciones);
var max = maximo(donaciones);

console.log(min);
console.log(max);
console.log(promedio(min, max, donaciones));

//---------------------Solucion Next_U

function maximo(donaciones){
    var max = 0;
    for (monto of donaciones){
        if (monto > max){
            max = monto;
        }
    }
    return max;
  }
  
function minimo(donaciones){
    var min = 1000;
    for (monto of donaciones){
        if (monto < min){
            min = monto;
        }
    }
    return min;
}
  
function promedio(min, max,donaciones){
    var sum = 0;
    var cantidad = 0;
    for (monto of donaciones){
        if (monto > min && monto < max){
            sum += monto;
            cantidad++;
        }
    }
    return sum/cantidad;
}
  
var donaciones = [5,15,22,25,30,52,5,1,0];
var min = minimo(donaciones);
var max = maximo(donaciones);
console.log(min);
console.log(max);
console.log(promedio(min, max, donaciones));