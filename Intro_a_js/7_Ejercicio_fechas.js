/*Su función utiliza dos fechas: fecha (fecha del evento pasado) y fechaReferencia (fecha con la que se compara, se pondrá la fecha/hora actual). 
Además usa getTime para obtener la cantidad de milisegundos desde la fecha base (Enero 1 de 1970 0:0:0). 
Luego las convierte a segundos dividiendo entre mil. Para luego calcular la diferencia, restando la fecha de referencia menos la fecha del evento pasado. 
Y utiliza la estrategia de ir retornando a medida que consigue un valor. */

function fechaParaHumanos(fecha, fechaRerencia){
    var t1 = fecha.getTime() / 1000; // segundos
    var t2 = fechaRerencia.getTime() / 1000; // segundos
    var diferencia;
    diferencia = Math.round(t2-t1);
    
    if (diferencia < 1) {
        return "hace 1 segundo";
    }
    if (diferencia < 60) {
        return `hace ${diferencia} segundos`;
    }
    diferencia = Math.round(diferencia/60);
    if (diferencia < 1) {
        return "hace 1 minuto";
    }
    if (diferencia < 60) {
        return `hace ${diferencia} minutos`;
    }
    if (diferencia == 60) {
        return "Hace 1 hora";
    }
    diferencia = Math.round(diferencia/60); //pasar a horas
    if (diferencia > 1 && diferencia < 24){
        return `hace ${diferencia} horas`;
    }
    if (diferencia == 5){
        return `hace 5 horas`;
    }
    diferencia = Math.round(diferencia/24);
        return `hace ${diferencia} días`;

}

console.log(fechaParaHumanos(new Date(2022,10,9), new Date()));
console.log(fechaParaHumanos(new Date(2018,6,1,9,1,1,1000), new Date(2018,6,1,10,1,1,100),));

//------------------------------------------------------Solución next_U

function fechaParaHumanos(fecha, fechaRerencia){
    var t1 = fecha.getTime() / 1000; // segundos
    var t2 = fechaRerencia.getTime() / 1000; // segundos
    var diferencia
    diferencia = Math.round(t2-t1);
    if (diferencia < 1) {
        return "hace 1 segundo"
    }
    if (diferencia < 60) {
        return `hace ${diferencia} segundos`
    }
    diferencia = Math.round(diferencia/60);
    if (diferencia <= 1) {
        return "hace 1 minuto"
    }
    if (diferencia < 60) {
        return `hace ${diferencia} minutos`;
    }
    diferencia = Math.round(diferencia/60);
    if (diferencia <= 1) {
        return "hace 1 hora"
    }
    if (diferencia < 24) {
        return `hace ${diferencia} horas`
    }
    diferencia = Math.round(diferencia/24);
        return `hace ${diferencia} dias`

}

console.log(fechaParaHumanos(new Date(2018,6,1,9,1,1,1000), new Date(2018,6,1,10,1,1,100),));
