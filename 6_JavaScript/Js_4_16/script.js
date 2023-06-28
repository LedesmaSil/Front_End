let persona = {
    nombre: "Denise", //Atributos
    apellido: "Garcia",
    edad: 30,
    dni: "11111111",
    nombreCompleto: function() { return this.nombre + " " + this.apellido} //Metodo
};
persona.nombre = "Jose";
console.log(persona.nombre);
console.log(persona.nombreCompleto());

let perro = new Object();
perro['nombre'] = "Chocolate";
perro.raza = "Pitbull";
let ladrando = function() { return "Guau"}
perro.ladrar = ladrando;
console.log(perro.ladrar());

// POO
class Auto{
    constructor(marca, color, anio, modelo){
        this.marca = marca;
        this.color = color;
        this.anio = anio;
        this.modelo = modelo;
    }
}

class AutoToyota{
    constructor(color, anio, modelo){
        this.color = color;
        this.anio = anio;
        this.modelo = modelo; 
        this.marca = "Toyota";
    }
}

let a1 = new Auto("Nissan", "Gris", 2019, "March"); // Instanciando un objeto auto
let a2 = new Auto("Toyota", "Azul", 2017, "Camry");
let a3 = new AutoToyota("Azul", 2017, "EEEE");
console.log(a1, a2, a3);

for(i in a3){
    console.log(i + " - " + a3[i]);
}