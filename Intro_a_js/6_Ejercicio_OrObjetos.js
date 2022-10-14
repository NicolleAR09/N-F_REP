class Evento{
    constructor(id, nombre, cantidadAsistente, precioPorAsistente){
        this.id =  id;
        this.nombre = nombre;
        this.cantidadAsistente = cantidadAsistente;
        this.precioPorAsistente = precioPorAsistente;
    }

    enlace(){
        return `/evento/${this.id}`;
    }

    dineroTotalRecaudado(){
        var total = this.cantidadAsistente*this.precioPorAsistente;
        return `${total}`;
    }
}

var evento1 = new Evento(1,"e1", 12, 5);
console.log(evento1.enlace());
console.log(evento1.dineroTotalRecaudado());