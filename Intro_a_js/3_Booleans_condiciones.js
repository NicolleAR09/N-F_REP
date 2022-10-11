var tieneCocina = false;
var tieneWifi = true;
var maximaOcupacion = 4;
var lugar = "Playa";

/*Los valores booleanso se usan para hacer condiciones que crean bifurcaciones en el codigo
es decir, determinar que conjunto de condiciones se jecutaran de acuerdo a dicha condicion 
*/

//cliente busca un hotel que tenga cocina 

if (tieneCocina) {
    console.log("Hotel A1");
} else {
    console.log("Hotel B2");
}

//respuesta: Hotel B2, porque la variable tieneCocina está en falso

//se puede negar la condicion agregando un ! al frente 

if (!tieneCocina) {
    console.log("Hotel A1");
} else {
    console.log("Hotel B2");
} //respuesta: Hotel A1 porque se negó el tieneCocina que estaba en falso, entonces ahora la condicion es que no tenga cocina


//usar AND
if (!tieneCocina && tieneWifi) {  //se tiene que cumplir que no tenga cocina y que tenga Wifi
    console.log("Hotel A1");
} else {
    console.log("Hotel B2");
} //respuesta: Hotel A1

//usar ==
if (lugar =="Lagos" && tieneWifi) {  //se tiene que cumplir que no tenga cocina y que tenga Wifi
    console.log("Hotel A1");
} else {
    console.log("Hotel B2");
} //respuesta: Hotel B2, porque no se cumple la primera condición para A1

//usar or ||
if (lugar =="Playa" && maximaOcupacion >10) {  //se tiene que cumplir que no tenga cocina y que tenga Wifi
    console.log("Hotel A1");
} else {
    console.log("Hotel B2");
} //respuesta: Hotel A1, se cumple la primera condición pero no la segunda

//ifs anidados
if (lugar =="Playa") {  //se tiene que cumplir que no tenga cocina y que tenga Wifi
    console.log("Hotel A1");
} else if (lugar == "Lagos"){
    console.log("Hotel B2");
} else {
    console.log("Hotel C3");
} 

//Si es playa es A1, si es lago es B2, y si no es ninguna de esas es C3

//----------------------------TALLER

var recetasVeg = ["Ensalada", " Sandwich vegetariano"];
var recetasNoVeg = ["Hambuerguesa", " Sandwich de pollo"];
var veg = true;

function menu(veg, recetasVeg){
    if (veg){
        return "Vegetarianos " + recetasVeg;
    } else {
        return "No vegetarianos" + recetasNoVeg;
    }
}

console.log("Menús: " + menu(veg,recetasVeg));

//-------------------SWITCH

var color = "verde";

if (color == "rojo"){
    console.log("FF0000");
} 
else if (color == "negro"){
    console.log(000000);
}
else if (color == "azul"){
    console.log("0000FF");
}
else {
    console.log("???")
}

//Respuesta: ??? 

//FORMA MAS LIMPIA DE ESCRIBIR EL MISMO CODIGO ANTERIOR USANDO SWITCH
//switch presenta los caso con base en una variable
var color = "azul";

switch (color){

    case "rojo":
        console.log("FF0000");
        break;                  //se debe colocar break para que no se siga ejecutando el código  

    case "negro":
        console.log("000000");
        break;  

    case "azul":
        console.log("0000FF");
        break;

    default:
        console.log("???"); //no se coloca break en el ultimo
}

//Resultado: azul