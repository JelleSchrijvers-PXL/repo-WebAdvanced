
document.getElementById('get-pokemon-btn').addEventListener('click', fetchPokemonInRandomOrder);

function fetchPokemonInRandomOrder() {
    const container = document.getElementById('pokemon-container');

    // Maak de container leeg voor een nieuwe start
    container.innerHTML = '';

    // We lussen van id 1 tot en met 36
    for (let id = 1; id <= 36; id++) {

        console.log(`Verzoek voor Pokémon #${id} is verstuurd...`);

        // We vuren voor elk nummer direct een aparte fetch af.
        // JavaScript wacht NIET tot deze fetch klaar is, maar gaat direct door naar het volgende id in de loop!
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(pokemonData => {
                // Zodra er eentje binnenkomt (ongeacht welke), maken we DIRECT de HTML aan
                // en plakken we hem meteen op het scherm.
                console.log(`ALARM: Data voor Pokémon #${id} (${pokemonData.name}) is BINNEN!`);

                const name = pokemonData.name;
                const imageUrl = pokemonData.sprites.front_shiny;

                const card = document.createElement('div');
                card.className = 'pokemon-card';
                card.innerHTML = `
                    <div class="pokemon-number">#${id.toString().padStart(3, '0')}</div>
                    <img src="${imageUrl}" alt="${name}">
                    <div class="pokemon-name">${name}</div>
                `;

                // Plak hem direct in de container. Wie het eerst komt, wie het eerst maalt!
                container.appendChild(card);
            })
            .catch(error => console.error(`Fout bij laden van #${id}:`, error));
    }

    console.log("De 'for'-loop is al helemaal klaar, maar de meeste data moet waarschijnlijk nog binnenkomen!");
}