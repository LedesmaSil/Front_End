// Creamos nuestra aplicacion.
const miAplicacion = Vue.createApp({
    components: {
        'home': componente1,
        'receta': componente2,
        'cocina': componente3,
        'sobre': componente4,
        'mifooter': componente9
    },
    data() {
        return {
            home_visible: false,
            receta_visible: false,
            cocina_visible: false,
            sobre_visible: false
        }
    },
    mounted() {
        this.home_visible = true
    },
    methods: {
        show(componente) {
            this.home_visible = false
            this.receta_visible = false
            this.cocina_visible = false
            this.sobre_visible = false
            console.clear()
            console.log(componente)
            if (componente == "home") {
                this.home_visible = true
            } else if (componente == "receta") {
                this.receta_visible = true
            } else if (componente == "cocina") {
                this.cocina_visible = true
            } else if (componente == "sobre") {
                this.sobre_visible = true
            }
        }
    }
}).mount("#app")