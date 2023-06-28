const { createApp } = Vue;

createApp({
    data(){
        return{
            titulo: "Soy el titulo principal",
            subtitulo: "Soy el subtitulo",
            hrefGoogle: "www.google.com",
            nombre: "Denise",
            tecnologias: ["HTML", "CSS", "GIT", "JAVACRIPT", "VUE", "PYTHON", "SQL"],
            cursos: [{nombre: "Python FullStack", duracion: 4, cantAlumnos: 60}, {nombre:"Node.js FullStack", duracion: 5, cantAlumnos: 40}],
            frase: "Comision 23003"
        }
    },
    methods: {
        invertir: function(){
            this.frase = this.frase.split("").reverse().join("")
        }
    }
}).mount("#app");
