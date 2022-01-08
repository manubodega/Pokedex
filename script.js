window.onload = () => {
    let contenedor = document.querySelector('.contenedor')

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
        .then(response => response.json())
        .then(data => Pokedex(data))
        // .then(data => console.log(data))
        // .catch(mostrarError)

    function Pokedex(data){
        let {results} = data
        let pokemon = results
        // console.log(pokemon)


        pokemon.forEach((poke) => {
            //Destructuring del objeto
            let {name, url} = poke

            //Imprimir nombre de los pokemon
            let card = document.createElement('div')
            let divp = document.createElement('div')
            let nombre = document.createElement('p')

            card.className = 'card'
            divp.className = 'title'
            contenedor.appendChild(card)
            card.appendChild(divp)
            divp.appendChild(nombre)

            nombre.innerText = name

            //Imagen
            fetch(url)
                .then(response => response.json())
                .then(data => mostarImagen(data))

            function mostarImagen(data){
                let {sprites} = data
                let {front_default} = sprites
                // console.log(front_default)
            
                let img = document.createElement('img')
                img.src = front_default
                card.appendChild(img)
            }
        })   
    }

    

    
}


