let b = new String("Bienvenido");
console.log(b.valueOf());

console.log(b.length);
console.log(b.charAt(2)); // Devuelve el primero

let encontrada = b.indexOf('e'); //posicion
console.log(b.indexOf('e'));
console.log(b.lastIndexOf('e'));
if(encontrada != -1) {

}

for(let i = 0; i < b.length; i++){
    console.log(b[i]);  
}

console.log("NUEVO FOR: ")

for(i in b) {
    console.log(b[i]);  
}

b = b.replace("Bienvenido", "Bienvenidos");
console.log(b.repeat(3));

b = b.concat(" a la comision 23003");
console.log(b);

