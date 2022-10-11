//para declarar una clase se usa class y una palabra que empieza por mayuscula 

class Persona{
    constructor(){                //metodo contructor inicializa al objeto cuando se crea
        this.nombre =  "Luis";    //se asigna al objeto la propiedad nombre y la propiedad apellido
        this.apellido = "Torres";
    }
}

//se crea una instancia de la clase 

var p = new Persona();
console.log(p.nombre);  //Luis
console.log(p.apellido); //Torres

//-----------se agrega metodo nombreCompleto a la clase persona

class Persona{
    constructor(){                
        this.nombre =  "Luis";    
        this.apellido = "Torres";
    }

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

//se crea una instancia de la clase 

var p = new Persona();
console.log(p.nombreCompleto()); //debe terminar en parentesis porque es un metodo

//resultado: Luis Torres
//cada objeto tiene sus propios atributos que visualizamos usando sus propios metodos los cuales pueden operar sobre ellos 

class Mascota{
    constructor(nombreApodo){
        this.apodo = nombreApodo;
    }
}

var m1 = new Mascota("Tobby"); //la variable m1 representa el objeto de la clase mascota, en este caso si se agrega un parametro a constructor que es usado para inicializar la prompiedad interna del objeto
console.log(m1.apodo);  //resultado:Tobby

//--------------------------Incluir al propietario de la mascota

class Persona{
    constructor(){                
        this.nombre =  "Luis";    
        this.apellido = "Torres";
    }

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

var p = new Persona();

class Mascota{
    constructor(nombreApodo){
        this.apodo = nombreApodo;
    }
    setPropietario(propietario){         //metodo setPropietario que representa al dueño de la mascota
        this.propietario = propietario;   //no hay que asignar todos los atributos del objeto del constructor, se pueden crear metodos que creen atributos de forma dinámica
    }
}

var m1 = new Mascota("Tobby");
console.log(m1.apodo);
m1.setPropietario(p); //se asigna a la mascota tobby la persona creada anterior mente, p, como su propietario
console.log(m1.propietario.nombreCompleto()); //resultado: Luis Torres

//se conectan objetos y se establece una relacion entre la mascota tobby y la persona p, navegando entre objetos que estén relacionados


//--------------------Analizar como funciona la herencia usando clase persona

class Persona{
    constructor(){                
        this.nombre =  "Luis";    
        this.apellido = "Torres";
    }

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    }
}

class Empleado extends Persona{    //la clase empleado se extiende de la clase persona porque todo empleado es una persona
    constructor(id){
        super();  //cuando se tiene una herencia se llama al metodo super que llama al cosntructor de la clase padre, o sea que super() llama al constructor de persona 
        this.id = id;  //eso es necesario para que persona pueda crear el objeto

    }
}

//cuando creamos un empleado en el constructor indicamos que se genere el objeto persona y de allí que se hereden los correspondientes metodos y atributos 
//con el metodo herencia existe el chance de instanciar un empleado e imprimir sus propiedades

var emp = new Empleado(123);// es una instancia de empleado y tiene un id
console.log(emp.id); //constructor asigna el id al objeto //Resultado: 123
console.log(emp.nombre); //Resultado: Luis
console.log(emp.nombreCompleto()); //Resultado: Luis Torres

//el empleado hereda todos los atributos de persona



