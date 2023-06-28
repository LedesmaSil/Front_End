// COMENTARIO DE LINEA
/*
    Comentario de bloque
*/

let nombre; // undefined
const IVA = 0.21; // float = numero decimal
// int = numeros enteros

nombre = "Mariano"; // string
console.log("El nombre es: " + nombre);

let costo = 10000;

let montoTotalAPagar = costo * (1 + IVA);
console.log("El monto total a pagar es de $" + montoTotalAPagar);

let numDos = 2;
console.log(numDos+numDos);
console.log(numDos**3); // Elevar
console.log(10 % 2) // Modulo % devuelve el resto
console.log(10 % 3) //1


let nota = 7;
let aprobaste;

if(nota == 10){
    console.log("Felicitaciones. Te sacaste 10");
    aprobaste = true;
}else if(nota >=7){
    console.log("Felicitaciones, podes promocionar la materia.")
    aprobaste = true;
}else if(nota >=4 ){
    console.log("Felicitaciones, aprobaste.");
    aprobaste = true;
}else if(nota < 4){
    console.log("Desaprobo");
    aprobaste = false;
}else{
    console.log("Valor ingresado incorrecto");
}

10 == 10 // comparo valores true
10 === 10// coamparo valores y tipo de dato true
10 == "10" // true
10 === "10"// false

//let edad = parseInt(prompt("Ingresame tu edad: "));
//let genero = prompt("Ingresame tu genero F o M: ");
let edad = 10;
let genero = "M";
genero = genero.toUpperCase();
/*
if(genero == "F" && edad >= 60){
    console.log("Podes jubilarte");
}else if(edad >= 65){
    console.log("Podes jubilarte");
}else{
    console.log("No podes jubilarte");
}*/
if(edad >= 65 || (genero == "F" && edad >= 60)){
    console.log("Podes jubilarte");
}else{
    console.log("No podes jubilarte");
}

console.log(typeof edad);

// || or


// For

let numUno = 1;
numUno++; //2 numUno = numUno + 1
console.log(numUno) //2

console.log("Tabla del 5: ")
for(let i = 0; i <= 10; i++){
    console.log("5 x " + i + " da como rdo " + i*5);
}

// While y Do While
let contador = 5;

console.log("WHILE");

while(contador < 5){
    console.log("Menor a 5");
    contador++;
}

let contador2 = 5;
console.log("DO WHILE");
do{
    console.log("Menor a 5");
    contador2++;
}while(contador2 < 5);

console.log(10 == 10.0)// true
console.log(10 === 10.0)// true