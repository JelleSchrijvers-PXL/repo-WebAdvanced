const pokemonList = [
    {
        name: "Pikachu",
        image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    {
        name: "Charmander",
        image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
        name: "Bulbasaur",
        image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
        name: "Squirtle",
        image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
];

const pokemonListElement = document.querySelector("#pokemon-list");
const pokemonTemplate = document.querySelector("#pokemon-item");

pokemonList.forEach((pokemon) => {
    const clone = pokemonTemplate.content.cloneNode(true);

    clone.querySelector(".pokemon-name").textContent = pokemon.name;
    clone.querySelector(".pokemon-image").src = pokemon.image;
    clone.querySelector(".pokemon-image").alt = `${pokemon.name} afbeelding`;

    pokemonListElement.appendChild(clone);
});