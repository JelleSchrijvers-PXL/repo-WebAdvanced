
const naam = prompt("Wat is je naam?");
const leeftijd = prompt("Wat is je leeftijd?");
const stad = prompt("In welke stad woon je?");

const profiel = { naam, leeftijd, stad };

alert(
    `Naam: ${profiel.naam}, Leeftijd: ${profiel.leeftijd}, Stad: ${profiel.stad}`
);

const container = document.createElement("div");
container.style.backgroundColor = "#fffbe6";
container.style.padding = "12px";
container.style.border = "1px solid #f0e1a1";
container.style.width = "300px";

const heading = document.createElement("h3");
heading.textContent = "STUDENT";
heading.style.marginTop = "0";
container.appendChild(heading);

const pNaam = document.createElement("p");
pNaam.textContent = "Naam: " + profiel.naam;
pNaam.style.margin = "4px 0";
container.appendChild(pNaam);

const pLeeftijd = document.createElement("p");
pLeeftijd.textContent = "Leeftijd: " + profiel.leeftijd;
pLeeftijd.style.margin = "4px 0";
container.appendChild(pLeeftijd);

const pStad = document.createElement("p");
pStad.textContent = "Stad: " + profiel.stad;
pStad.style.margin = "4px 0";
container.appendChild(pStad);

document.body.appendChild(container);