let array = [21,true, "Hola", "Chau", {}, "Hola"]; 
let alumnos = [{}, {}, {}, {}];
let array2 = new Array(1, "a", "j");

console.log(array2);
console.log(array[0]);
console.log(array.length); // ELEMENTOS
console.log(array[array.length - 1]);

console.clear();

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("Ciclor for 2")
for(i in array) {
    console.log(array[i]);
}

let numeros = [1,2,3,4,5];

numeros.push(6,7,8);
numeros.unshift(-1,0);
let eliminado = numeros.pop(); // Elimina el ultimo y DEVUELVE.
console.log(eliminado);

let numeros2 = [8,9,10,11,12];
numeros = numeros.concat(numeros2);

let pos = numeros.indexOf(15); // Primera posicion

if(pos !== -1) {
    ///
}

//console.log(pos);
//console.log(numeros);

let letras = ["g", "e", "a", "i", "a"];
let stringNum = ["10", "6", "1", "5", "20"];


console.log(letras.sort());
console.log(stringNum.sort());


let nums = [10, 6, 1, 5, 20, 30, 19];

function mayorDeEdad(edad) {
    return edad > 18;
}

console.log(nums.find(mayorDeEdad)); // DEVUELVE EL PRIMERO
console.log(nums.filter(mayorDeEdad)); // Devuelve array
//console.log(nums.sort());

