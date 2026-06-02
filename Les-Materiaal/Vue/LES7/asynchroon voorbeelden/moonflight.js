// Elementen ophalen uit de HTML
const selectElement = document.getElementById('mission-select');
const container = document.getElementById('result-container');
const getAllBtn = document.getElementById('get-all-btn');
const getSingleBtn = document.getElementById('get-single-btn');

// Pad naar jouw JSON-bestand
const JSON_URL = 'data/data.json';

// Zodra het script laadt, vullen we de dropdown automatisch met 20 nummers
function genereerSelectOpties() {
    for (let i = 1; i <= 20; i++) {
        const optie = document.createElement('option');
        optie.value = i;
        optie.textContent = `Missie #${i}`;
        selectElement.appendChild(optie);
    }
}
genereerSelectOpties();

// Koppel de event listeners aan de knoppen
getAllBtn.addEventListener('click', toonAlleData);
getSingleBtn.addEventListener('click', toonSpecifiekeData);

/**
 * Functie 1: Haalt ALLES op uit data.json en toont het op het scherm
 */
async function toonAlleData() {
    container.innerHTML = '<p class="status-message">Maanmissies database aan het laden...</p>';

    try {
        // Fetch de lokale JSON-file
        const response = await fetch(JSON_URL);

        // Controleer of het bestand goed is ingeladen
        if (!response.ok) throw new Error('Kan het JSON-bestand niet laden');
        const data = await response.json();

        container.innerHTML = ''; // Maak container leeg

        // Loop door alle missies en toon ze
        data.forEach(missie => {
            const card = maakMissieCard(missie);
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Fout:', error);
        container.innerHTML = '<p class="status-message" style="color: red;">Er ging iets mis bij het laden van het JSON-bestand.</p>';
    }
}

/**
 * Functie 2: Haalt de data op en filtert alleen het gekozen vluchtnummer (ID)
 */
async function toonSpecifiekeData() {
    // Lees het geselecteerde nummer uit de dropdown
    const gekozenId = parseInt(selectElement.value);

    container.innerHTML = `<p class="status-message">Missie #${gekozenId} aan het zoeken...</p>`;

    try {
        // We fetchen de hele file (omdat het een statisch JSON-bestand is)
        const response = await fetch(JSON_URL);
        if (!response.ok) throw new Error('Kan het JSON-bestand niet laden');
        const data = await response.json();
        // Filter in JavaScript de juiste missie eruit op basis van het ID
        const gevondenMissie = data.find(m => m.id === gekozenId);

        container.innerHTML = ''; // Maak container leeg

        if (gevondenMissie) {
            const card = maakMissieCard(gevondenMissie);
            container.appendChild(card);
        } else {
            container.innerHTML = `<p class="status-message">Missie #${gekozenId} staat niet in het JSON-bestand.</p>`;
        }

    } catch (error) {
        console.error('Fout:', error);
        container.innerHTML = '<p class="status-message" style="color: red;">Er ging iets mis.</p>';
    }
}

/**
 * Hulpfunctie: Bouwt de HTML-structuur voor een kaartje
 */
function maakMissieCard(missie) {
    const card = document.createElement('div');
    card.className = 'mission-card';

    // Maak de lijst met astronauten aan
    const astronautenHtml = missie.astronauten
        .map(astronaut => `<li>${astronaut}</li>`)
        .join('');

    card.innerHTML = `
        <h3>#${missie.id} - ${missie.missie_naam}</h3>
        <div class="mission-year"><strong>Jaartal:</strong> ${missie.jaartal}</div>
        <strong>Bemanning / Status:</strong>
        <ul class="astronauts-list">
            ${astronautenHtml}
        </ul>
    `;
    return card;
}