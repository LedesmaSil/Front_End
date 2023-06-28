const getNombre= (idPost) => {
    fetch(`http://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then(res=> {
            return res.json();
        })
        .then(post=>{
            console.log(post.userId)
            console.log(post.title)
            console.log(post.body) 
        fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(res => {
                return res.json();
            })
            .then(user => {
                console.log(user.name); // SE VE EN LA CONSOLA, NO DESDE EL HTML
            })
        })
    }

getNombre(12); // Al ejercutar pasan el userId
