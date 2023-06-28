let alumno = {
    nombre: "Denise",
    apellido: "Eichenblat"
}
console.log(alumno);

let json = JSON.stringify(alumno);
console.log(json);

let objeto = JSON.parse(json);
console.log(objeto);
