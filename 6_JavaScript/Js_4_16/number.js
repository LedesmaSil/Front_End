let num = new Number();
console.log(num.valueOf());

let num2 = new Number(2);
console.log("Numero 2 " + num2.valueOf());
console.log(`Numero 2: ${num2.valueOf()}`); // Template String o literal

let comision = "23003";
console.log(Number.isInteger(comision));
comision = Number.parseInt(comision);
console.log(Number.isFinite(comision)); // true
console.log(Number.isFinite(Infinity)); // false

