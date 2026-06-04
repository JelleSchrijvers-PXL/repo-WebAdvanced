// leeg object maken en vullen
const student = {}
student.naam = "Jan";
student.leeftijd = 20;
student.isIngeschreven = true;

console.log(student);

// op web
const paragraph = document.createElement("p");
paragraph.innerText =
    student.naam +
    " is " +
    student.leeftijd +
    " jaar oud en is Ingeschreven is: " +
    student.isIngeschreven;

document.body.appendChild(paragraph);

// Dot-notatie tegenover bracket-notatie
const product = {
    naam: "Sweater",
    prijs: 19.99,
};
product["materiaal"] = "katoen";

console.log(product.materiaal); // dot-notatie
console.log(product["materiaal"]); // bracket-notatie

// op web
const container = document.createElement("div");
container.style.border = "1px solid #f20000";
container.style.padding = "10px";
container.style.backgroundColor = "#45bacc";
container.style.width = "260px";

const p1 = document.createElement("p");
p1.textContent = "Materiaal (dot): " + product.materiaal;
container.appendChild(p1);

const p2 = document.createElement("p");
p2.textContent = "Materiaal (bracket): " + product["materiaal"];
container.appendChild(p2);

document.body.appendChild(container);

// eigenschap bijwerken
const course = { titel: "Web", studiepunten: 3 };

course.studiepunten += 2;

console.log(
    `Het vak ${course.titel} telt nu ${course.studiepunten} studiepunten`
);

// op web
const wrapper = document.createElement("div");
wrapper.style.borderLeft = "6px solid #4caf50";
wrapper.style.padding = "8px 12px";
wrapper.style.marginTop = "10px";

const heading = document.createElement("h3");
heading.textContent = `Het vak ${course.titel} telt nu ${course.studiepunten} studiepunten`;
heading.style.margin = "0";
heading.style.color = "#2e7d32";

wrapper.appendChild(heading);
document.body.appendChild(wrapper);

// eigenschap verwijderen
const gebruiker = {
    naam: "John Duck",
    email: "john@duck.com",
    wachtwoord: "quackquack",
};

delete gebruiker.wachtwoord;

console.log(gebruiker);

// op web
const card = document.createElement("section");
card.style.border = "1px solid #67bf82";
card.style.borderRadius = "8px";
card.style.padding = "10px";
card.style.width = "280px";

const title = document.createElement("h4");
title.textContent = "Gebruiker";
title.style.margin = "0 0 8px 0";
card.appendChild(title);

const naamEl = document.createElement("p");
naamEl.textContent = "Naam: " + gebruiker.naam;
card.appendChild(naamEl);

const emailEl = document.createElement("p");
emailEl.textContent = "Email: " + gebruiker.email;
card.appendChild(emailEl);

document.body.appendChild(card);

// objecten vullen met prompt
const naam = prompt("Wat is je naam?");
const leeftijd = prompt("Wat is je leeftijd?");
const stad = prompt("In welke stad woon je?");

const profiel = {
    naam: naam,
    leeftijd: leeftijd,
    stad: stad,
};

alert(
    `Naam: ${profiel.naam}, Leeftijd: ${profiel.leeftijd}, Stad: ${profiel.stad}`
);

// op web vanplaats alert
const container2 = document.createElement("div");
container2.style.backgroundColor = "#fffbe6";
container2.style.padding = "12px";
container2.style.border = "1px solid #f0e1a1";
container2.style.width = "300px";

const heading2 = document.createElement("h3");
heading2.textContent = "Profiel";
heading2.style.marginTop = "0";
container2.appendChild(heading2);

const pNaam2 = document.createElement("p");
pNaam2.textContent = "Naam: " + profiel.naam;
pNaam2.style.margin = "4px 0";
container2.appendChild(pNaam2);

const pLeeftijd2 = document.createElement("p");
pLeeftijd2.textContent = "Leeftijd: " + profiel.leeftijd;
pLeeftijd2.style.margin = "4px 0";
container2.appendChild(pLeeftijd2);

const pStad2 = document.createElement("p");
pStad2.textContent = "Stad: " + profiel.stad;
pStad2.style.margin = "4px 0";
container2.appendChild(pStad2);

document.body.appendChild(container2);

// geneste objecten
const persoon = {
    naam: "John Duck",
    adres: {
        straat: "Eendenlaan",
        nr: 101,
        gemeente: "Duckstad",
    },
};

console.log(
    `${persoon.adres.straat.toUpperCase()} ${
        persoon.adres.nr
    }, ${persoon.adres.gemeente.toUpperCase()} - ${persoon.naam.toUpperCase()}`
);

// op web
const container3 = document.createElement("div");
container3.style.padding = "8px";
container3.style.border = "1px dashed #bbb";
container3.style.width = "320px";

const h4 = document.createElement("h4");
h4.textContent = "Adres";
h4.style.color = "#1565c0";
container3.appendChild(h4);

const p3 = document.createElement("p");
p3.textContent =
    persoon.adres.straat.toUpperCase() +
    " " +
    persoon.adres.nr +
    ", " +
    persoon.adres.gemeente +
    " - " +
    persoon.naam;
container3.appendChild(p3);

document.body.appendChild(container3);
