
Vue.createApp({
    data(){
        return{
            usd: ""
        }
    },
    created(){
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(res => res.json())
        .then(data => {
            console.log(data.bpi.USD)
            this.usd = data.bpi.USD.code

        })
        .catch(err => console.log(err));
    }
}).mount("#app");