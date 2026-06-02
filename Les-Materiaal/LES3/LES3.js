
const persoon = {
    naam: "Schrijvers",
    voornaam: "Jelle",
    straatnaam: "Oude barrier",
    huisnummer: 67,
    woonplaats: "Beringen",
};

let Title = document.getElementById("Title");
let naam= document.querySelector("#naam");
let Voornaam= document.querySelector("#Voornaam");
let Straatnaam= document.querySelector("#Straatnaam");
let Huisnummer= document.querySelector("#huisnummer");
let Woonplaats= document.querySelector("#Woonplaats");

Title.textContent = "Student";
naam.textContent = persoon.naam;
Voornaam.textContent = persoon.voornaam;
Straatnaam.textContent = persoon.straatnaam;
Huisnummer.textContent = persoon.huisnummer;
Woonplaats.textContent = persoon.woonplaats;

