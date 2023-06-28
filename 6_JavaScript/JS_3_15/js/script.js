function saludarPorConsola(){
    //console.log("Bienvenid@");
    document.write("Bienveni@");
}

saludarPorConsola();

function sumarDosNumero(num1, num2){
    console.log(num1 + num2);
    return num1 + num2;
}

let rdo1 = sumarDosNumero(1,2);
let rdo2 = sumarDosNumero(5,3);
console.log(rdo1, rdo2);

function tablaDeMultiplicar(num, veces){
   console.log("Tabla del " + num + ":");

    for (let i = 0; i <= veces ; i++) {
        console.log( num + " x " + i + " da como rdo " + i*num);
    } 
}

tablaDeMultiplicar(3,15);


function restarDosNumero(num1, num2){
    console.log(num1 - num2);
    return num1 - num2;
}

let rdo3 = restarDosNumero(1,2);
let rdo4 = restarDosNumero(5,3);
console.log(rdo3, rdo4);

// Funcion Anonima
let resta = function(num1, num2){
    return num1 - num2;
}
console.log(resta(3,5));


// Arrow Function
let multiplicar = (num1, num2) => num1 * num2;
console.log(multiplicar(3,4));

let sumarCien = num => num + 100;
console.log(sumarCien(100));

let primeroMayorAlSegundo = (num1, num2) => {
    let esMayor = false;

    if(num1 > num2){
        esMayor = true;
    }

    return esMayor;
}

console.log(primeroMayorAlSegundo(5,3));
console.log(primeroMayorAlSegundo(3,5));


function bienvenidaAlUsuario(nombre){
    console.log("Bienvenid@ " + nombre);
}

function despedirAlUsuario(nombre){
    console.log("Chau " + nombre);
}


function ejecutarFuncionConNombre(callback){
    let nombre = prompt("Ingrese su nombre: ");

    while(nombre == ""){
        nombre = prompt("Debe ingresar su nombre: ");
    }

    callback(nombre);    
}

ejecutarFuncionConNombre(bienvenidaAlUsuario);
ejecutarFuncionConNombre(despedirAlUsuario);