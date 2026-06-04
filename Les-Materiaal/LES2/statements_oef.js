
const Voornaam = prompt("Voer je voornaam in:");
const Achternaam = prompt("Voer je achternaam in:");
const Leeftijd = prompt("Voer je leeftijd in:");
const Lievelingskleur = prompt("Voer je lievelingskleur in:");

if (Leeftijd > 18) {
    alert("Mijn naam is "+ Voornaam+" "+ Achternaam+", ik ben volwassen en mijn lievelingskleur is "+Lievelingskleur+".");
} else {
    alert("Mijn naam is "+ Voornaam +" " +Achternaam+", ik ben minderjarig en mijn lievelingskleur is "+ Lievelingskleur+".");
}