const {createApp,  ref, computed} = Vue;

let carrito = Vue.createApp ({
    data(){
        return {
           nuevaCompra: "",
            cantidad: 0,
            compras: [] 
        }
    },
    methods: {
        ingresarCompra(){
            this.compras.push({compra: this.nuevaCompra, cantidad: this.cantidad});
        }
    }
}).mount("#form");