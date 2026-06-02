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

//Info consoleLog
console.log(pikachu.name);
console.log(pikachu.height);
console.log(pikachu.abilities[0].ability.name);
console.log(pikachu.abilities[0].is_hidden);

// Plaatsen in html
const container = document.createElement("div");
container.style.border = "2px solid #333";
container.style.borderRadius = "10px";
container.style.padding = "20px";
container.style.width = "300px";
container.style.height = "340px";

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

//oef2
const card = {
    id: 89631139,
    name: "Blue-Eyes White Dragon",
    type: "Normal Monster",
    frameType: "normal",
    desc: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.",
    atk: 3000,
    def: 2500,
    level: 8,
    race: "Dragon",
    attribute: "LIGHT",
    archetype: "Blue-Eyes",
    card_images: [
        {
            id: 89631139,
            image_url: "https://images.ygoprodeck.com/images/cards/89631139.jpg",
            image_url_small:
                "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
            image_url_cropped:
                "https://images.ygoprodeck.com/images/cards_cropped/89631139.jpg",
        },
        {
            id: 89631140,
            image_url: "https://images.ygoprodeck.com/images/cards/89631140.jpg",
            image_url_small:
                "https://images.ygoprodeck.com/images/cards_small/89631140.jpg",
            image_url_cropped:
                "https://images.ygoprodeck.com/images/cards_cropped/89631140.jpg",
        },
        {
            id: 89631141,
            image_url: "https://images.ygoprodeck.com/images/cards/89631141.jpg",
            image_url_small:
                "https://images.ygoprodeck.com/images/cards_small/89631141.jpg",
            image_url_cropped:
                "https://images.ygoprodeck.com/images/cards_cropped/89631141.jpg",
        },
    ],
    card_prices: [
        {
            cardmarket_price: "0.40",
            tcgplayer_price: "0.58",
            ebay_price: "10.95",
            amazon_price: "3.90",
            coolstuffinc_price: "1.99",
        },
    ],
};

// Vraag een getal tussen 1 en 3
const invoer = prompt("Kies een nummer van 1 t/m 3 voor de afbeelding:");
const keuze = parseInt(invoer);

// Maak container
const container2 = document.createElement("div");
container2.style.border = "2px solid #333";
container2.style.borderRadius = "10px";
container2.style.padding = "16px";
container2.style.width = "320px";
container2.style.backgroundColor = "#f9f9f9";

if (keuze >= 1 && keuze <= 3) {
    const title = document.createElement("h3");
    title.textContent = card.name;
    title.style.marginBottom = "8px";
    container2.appendChild(title);

    const info = document.createElement("p");
    info.textContent = card.type + " — ATK " + card.atk + " / DEF " + card.def;
    info.style.marginBottom = "6px";
    container2.appendChild(info);

    const desc = document.createElement("p");
    desc.textContent = card.desc;
    desc.style.marginBottom = "6px";
    container2.appendChild(desc);

    const index = keuze - 1;
    const imgUrl = card.card_images[index].image_url;

    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = card.name;
    img.style.width = "100%";
    img.style.borderRadius = "6px";
    container2.appendChild(img);
} else {
    const msg = document.createElement("h4");
    msg.textContent = "Kies een getal van 1 t/m 3 a.u.b.";
    msg.style.color = "#d32f2f";
    msg.style.margin = "0";
    container2.appendChild(msg);
}
document.body.appendChild(container2);