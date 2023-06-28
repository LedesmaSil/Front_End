// Scope (vida de una variable) - let vs var
let a = 5;  // variables locales
var b = 10; // variables globales

y = 30; // implicito el var

if (b === 10) {
  let a = 4; 
  var b = 15;

  y = 40;
 console.log("Dentro del if")
 console.log("-----------------")
 //console.log(a);
 console.log(b);    
}

console.log();
console.log();

console.log("Fuera del if")
console.log("-----------------")
//console.log(a);
console.log(b);
console.log(y);
