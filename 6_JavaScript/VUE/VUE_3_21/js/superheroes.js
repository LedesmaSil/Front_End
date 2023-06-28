const {createApp} = Vue;

createApp({
    data() {
        return{
            equipo: "",
            members: []
        }
    },

    created(){
        fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.equipo = data.squadName;
            this.members = data.members;
        })
        .catch(err => console.log(err))
    }
}).mount("#app")