const { createApp } = Vue;

createApp({
    data(){
        return {
            html: " <h1> Aprendiendo componentes </h1> <h3> Esta buenisimo! </h3>"
        }
    },

    components: {
        "prueba":{
            template: '<section class="prueba"><ul> <li> Soy el item 1 </li> </ul> </section>'
        }
    }
}).mount("#app")