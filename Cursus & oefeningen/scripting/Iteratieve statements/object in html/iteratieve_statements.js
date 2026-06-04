// Schrijf 3 iteraties zo eenvoudig mogelijk
for (let x = 0; x > 3; x++){
   console.log("Iteratie " + (x+1))
}

// Voorbeeld van een while-lus
const kleuren = ["rood", "groen", "blauw"];

let i = 0; // Initialiseer de teller i met 0
while (i < kleuren.length) {
    console.log("De kleur is: " + kleuren[i]);
    i++; // Verhoog de teller i met 1 voor de volgende iteratie
}

// som van getallen 1 tot 10
let som = 0;

for (let x = 1; x <= 10 ; x++){
    som = som + x
}
console.log("De som van de getallen van 1 tot en met 10 is: " + som);

// code versimpelen
let invoer;
let invoer2;

while (invoer !== "STOP" && invoer2 !== "STOP") {
    invoer = prompt("Speler 1, blad - steen - schaar? (of STOP om te stoppen)");
    invoer2 = prompt("Speler 2, blad - steen - schaar? (of STOP om te stoppen)");

    if (invoer === null || invoer2 === null) {
        alert("Het is verplicht om een waarde in te voeren");
        break;
    }

    invoer = invoer.toLowerCase();
    invoer2 = invoer2.toLowerCase();

    if (invoer === "STOP" || invoer2 === "STOP") {
        alert("Het spel is gestopt.");
        break;
    }

    if (invoer === invoer2) {
        alert("Gelijkspel!");
    } else if (
        (invoer === "blad" && invoer2 === "steen") ||
        (invoer === "steen" && invoer2 === "schaar") ||
        (invoer === "schaar" && invoer2 === "blad")
    ) {
        alert("Speler 1 wint!");
    } else if (
        (invoer2 === "blad" && invoer === "steen") ||
        (invoer2 === "steen" && invoer === "schaar") ||
        (invoer2 === "schaar" && invoer === "blad")
    ) {
        alert("Speler 2 wint!");
    } else {
        alert("Ongeldige invoer!");
    }
}
