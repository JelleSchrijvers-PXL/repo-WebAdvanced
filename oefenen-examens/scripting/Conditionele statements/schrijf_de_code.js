// oef1
const voornaam = prompt("Wat is je voornaam?");
const achternaam = prompt("Wat is je achternaam?");

console.log("Mijn naam is " + voornaam + " " + achternaam);

// oef2
const leeftijd = prompt("Wat is je leeftijd?");
alert("Je bent " + leeftijd + "jaar oud.");

// oef3
const getal = Number(prompt("Voer een getal in:"));

if (getal === 7) {
    alert("Je hebt het juiste getal ingevoerd!");
} else {
    alert("Helaas, dat is niet het juiste getal.");
}

// oef4
const voornaam2 = prompt("Wat is je voornaam?");
const achternaam2 = prompt("Wat is je achternaam?");
const leeftijd2 = prompt("Wat is je leeftijd?");
const lievelingskleur = prompt("Wat is je lievelingskleur?");

if (leeftijd2 < 18) {
    alert("Mijn naam is " + voornaam + " " + achternaam2 + ", ik ben minderjarig en mijn lievelingskleur is " + lievelingskleur.toLowerCase());
}else{
    alert("Mijn naam is " + voornaam + " " + achternaam2 + ", ik ben volwassen en mijn lievelingskleur is " + lievelingskleur.toLowerCase());
}

//oef5
const leeftijd3 = prompt("Voer je leeftijd in:");
const volwassen  = prompt("Ben je volwassen? (ja/nee)");

if (leeftijd3 >= 18 || volwassen.toLowerCase() === "ja") {
    console.log("Je mag binnen");
} else {
    console.log("Je bent niet volwassen, je mag niet binnen.");
}