sessionStorage.setItem("nombre", "Denise"); // TEMPORAL
sessionStorage.getItem("nombre");

if(typeof(Storage) !== "undefined"){
    localStorage.setItem("nombre","Maria");
    console.log("Dato guardado");
    alert("Bienvenid@ " + localStorage.getItem("nombre"));
}else{
    console.log("Web Storage no soportado");
}