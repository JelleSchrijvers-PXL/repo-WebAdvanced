// eenvoudig voorbeeld
const personen = [
    { voornaam: "John", achternaam: "Duck", leeftijd: 34 },
    { voornaam: "Jane", achternaam: "Duck", leeftijd: 30 },
    { voornaam: "Gert", achternaam: "Verhulst", leeftijd: 57 },
    { voornaam: "Sam", achternaam: "Son", leeftijd: 16 },
];

const infoContainer = document.createElement("div");
infoContainer.style.border = "1px solid orange";
infoContainer.style.padding = "10px";
infoContainer.style.width = "300px";

const pVoornaam = document.createElement("p");
pVoornaam.textContent = "Voornaam tweede persoon : " + personen[1].voornaam;
pVoornaam.style.fontWeight = "700";
infoContainer.appendChild(pVoornaam);

const pLeeftijd = document.createElement("p");
pLeeftijd.textContent =
    "Leeftijd vierde persoon: " + personen[personen.length - 1].leeftijd;
pLeeftijd.style.fontWeight = "700";
infoContainer.appendChild(pLeeftijd);

document.body.appendChild(infoContainer);

// complex voorbeeld
const pikachu = {
    name: "pikachu",
    height: 4,
    weight: 60,
    abilities: [
        {
            ability: {
                name: "static",
                url: "https://pokeapi.co/api/v2/ability/9/",
            },
            is_hidden: false,
            slot: 1,
        },
        {
            ability: {
                name: "lightning-rod",
                url: "https://pokeapi.co/api/v2/ability/31/",
            },
            is_hidden: true,
            slot: 3,
        },
    ],
    sprites: {
        front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
    },
};

console.log(pikachu.name);
console.log(pikachu.height);
console.log(pikachu.abilities[0].ability.name);
console.log(pikachu.abilities[0].is_hidden);

const container = document.createElement("div");
container.style.border = "2px solid #333";
container.style.borderRadius = "10px";
container.style.padding = "20px";
container.style.width = "300px";

const title = document.createElement("h2");
title.textContent = pikachu.name.toUpperCase();
container.appendChild(title);

const img = document.createElement("img");
img.src = pikachu.sprites.front_shiny;
img.alt = pikachu.name;
container.appendChild(img);

const height = document.createElement("p");
height.textContent = `Height: ${pikachu.height}`;
container.appendChild(height);

const weight = document.createElement("p");
weight.textContent = `Weight: ${pikachu.weight}`;
container.appendChild(weight);

const abilitiesTitle = document.createElement("h3");
abilitiesTitle.textContent = "Abilities:";
container.appendChild(abilitiesTitle);

const abilitiesList = document.createElement("ul");

for (let i = 0; i < pikachu.abilities.length; i++) {
    const ability = pikachu.abilities[i];

    const abilityItem = document.createElement("li");
    let abilityText = ability.ability.name;
    if (ability.is_hidden) {
        abilityText += " (Hidden)";
    }
    abilityItem.textContent = abilityText;
    abilitiesList.appendChild(abilityItem);
}

container.appendChild(abilitiesList);
document.body.appendChild(container);