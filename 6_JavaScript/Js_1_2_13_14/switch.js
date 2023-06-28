// Ejemplo 1 
let diaSemana = "Lunes";

switch(diaSemana){
    case "Lunes":
        console.log("Es lunes");
        break;
    case "Martes":
        console.log("Es martes");
        break;
    case "Miercoles":
        console.log("Es miercoles");
        break;
    case "Jueves":
        console.log("Es jueves");
        break;
    case "Viernes":
        console.log("Es viernes");
        break;
    case "Sabado":
        console.log("Es sabado");
        break;
    case "Domingo":
        console.log("Es domingo");
        break;
    default:
        console.log("DIA INVALIDO");
        break;
}







// Ejemplo 2

let dia = "Lunes";
dia = dia.toLowerCase();

switch(dia){
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Es dia de semana");
        break;
    case "sabado":
    case "domingo":
        console.log("Es fin de semana!!");
        break;
    default:
        console.log("DIA INVALIDO");
        break;
}