
document.getElementById('get-pokemon-btn').addEventListener('click', startFetch);

// Deze hoofdfunctie start het proces
function startFetch() {
    const container = document.getElementById('pokemon-container');
    container.innerHTML = ''; // Maak de container leeg

    // We maken een array van de getallen 1 tot en met 10
    const pokemonIds = [10, 21, 3, 45, 525, 621, 782, 810, 999, 1013];

    // Een .forEach wacht NIET op asynchrone functies.
    // Hij vuurt fetchSinglePokemon dus 10 keer tegelijkertijd af!
    pokemonIds.forEach(id => {
        fetchSinglePokemon(id, container);
    });

    console.log("Alle 10 de verzoeken zijn tegelijkertijd de deur uitgestuurd!");
}

// Deze aparte functie gebruikt async/await voor één specifieke Pokémon
async function fetchSinglePokemon(id, container) {
    try {
        console.log(`Verzoek voor Pokémon #${id} is onderweg...`);

        // Haal de data asynchroon op
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = await response.json();

        // Zodra DEZE specifieke Pokémon binnen is, loggen we dat direct
        console.log(`ALARM: #${id} (${pokemonData.name}) is binnen!`);

        const name = pokemonData.name;
        const imageUrl = pokemonData.sprites.back_default;

        // Maak het kaartje aan
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <div class="pokemon-number">#${id.toString().padStart(3, '0')}</div>
            <img src="${imageUrl}" alt="${name}">
            <div class="pokemon-name">${name}</div>
        `;

        // Plak hem direct op het scherm. Wie het eerst klaar is, staat vooraan!
        container.appendChild(card);

    } catch (error) {
        console.error(`Fout bij laden van #${id}:`, error);
    }
}