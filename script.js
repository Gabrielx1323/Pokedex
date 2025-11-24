const pokeName = document.querySelector(".pokemon__name")
const pokeId = document.querySelector(".pokemon__number")
const pokeImage = document.querySelector(".pokemon__image")
const next = document.querySelector(".next")
const back = document.querySelector(".back")
let numberpoke = 1

const form = document.querySelector(".form")
const input = document.querySelector("#itxt")

const fetchPokemon = async (pokemon) => {
    pokeName.innerHTML = "Procurando..."
    const apiResposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (apiResposta.status === 200) {
        const data = await apiResposta.json()
    return data
    }

    
    
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon)
    if (data) {
        pokeImage.style.display = 'block'
    pokeName.innerHTML = data.name
    pokeId.innerHTML = data.id
    pokeImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    input.value = ""
    numberpoke = data.id
    } else {
    pokeName.innerHTML = "Not Found :C"
    pokeId.innerHTML = ""
    pokeImage.style.display = 'none'
    }
    
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    renderPokemon(input.value.toLowerCase())
})

renderPokemon(1)

    next.addEventListener("click", (event) => {
        numberpoke = numberpoke + 1
        renderPokemon(numberpoke)
    })
    back.addEventListener("click", (event) => {
        numberpoke = numberpoke - 1
        if (numberpoke > 0) {
        renderPokemon(numberpoke)
        } else {
            numberpoke = 1
        }
        
    })





