// Forma 1: con fetch
const getNombre = (idPost) => {
    fetch(`http://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then(res => {return res.json()})
        .then(post => {
            console.log("Ejemplo Fetch");
            console.log(post.userId);
            console.log(post.title);
            console.log(post.body);
            fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(res => {
                    return res.json()
                })
                .then(user => {
                    console.log(user.name);
                    console.log(user.email);
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
}
// getNombre(12);
getNombre(99);






// Forma 2: con Async Await
const getNombreAsync = async(idPost) => {
    try {
        console.log("Ejemplo Async-Await");
        const resPost = await fetch(`http://jsonplaceholder.typicode.com/posts/${idPost}`);
        const data = await resPost.json();
        console.log(data.userId);

        const resUser = await fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
        const user = await resUser.json();
        console.log(user.name);
    } catch (error) {
        console.warn(error);
    }
}

getNombreAsync(12);

// Forma 3: con el package Axios
const getNombreAxios = async(idPost) => {
    try {
        console.log("Ejemplo Axios");
        const resPost = await axios(`http://jsonplaceholder.typicode.com/posts/${idPost}`);
        console.log(resPost.data.userId);
        const resUser = await axios(`http://jsonplaceholder.typicode.com/users/${resPost.data.userId}`);
        console.log(resUser.data.name);
    } catch (error) {
        console.log(error);
    }
}

getNombreAxios(12);
