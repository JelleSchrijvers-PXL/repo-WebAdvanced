// lege array maken en vullen
const favorietekleuren = [];
favorietekleuren.push("rood");
favorietekleuren.push("blauw");
favorietekleuren.push("geel");

console.log(favorietekleuren);

// een bestaande array langs voor vullen
const hondenrassen = ["Labrador", "Golden Retriever", "Akita", "Barsoi"];

const invoer = prompt("Kies een nummer van 1 t/m 4:");
const keuze = parseInt(invoer, 10);

if (keuze >= 1 && keuze <= 4) {
    const gekozenRas = hondenrassen[keuze - 1];

    hondenrassen.unshift("Samoyed");

    const p = document.createElement("p");

    // Basiszin zonder span
    p.textContent = gekozenRas + " is bijna even mooi als een ";

    const highlight = document.createElement("span");
    highlight.textContent = hondenrassen[0];
    highlight.style.fontWeight = "700";

    p.appendChild(highlight);

    document.body.appendChild(p);
} else {
    const h1 = document.createElement("h1");
    h1.textContent = "Sorry, kattenliefhebbers niet toegelaten!";
    h1.style.color = "red";
    h1.style.textDecoration = "underline";
    document.body.style.backgroundColor = "#000";
    document.body.appendChild(h1);
}

// elementen van een array opvragen
const fruit = ["appel", "banaan", "kers", "druif", "mango"];

console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[4]);

console.log(fruit[fruit.length - 1]);

//op web
const container = document.createElement("div");
container.style.border = "1px dotted #67bf82";
container.style.padding = "10px";
container.style.width = "280px";

const pEerste = document.createElement("p");
pEerste.textContent = "Eerste: " + fruit[0];
pEerste.style.margin = "4px 0";
container.appendChild(pEerste);

const pDerde = document.createElement("p");
pDerde.textContent = "Derde: " + fruit[2];
pDerde.style.margin = "4px 0";
container.appendChild(pDerde);

const pLaatste = document.createElement("p");
pLaatste.textContent = "Laatste: " + fruit[fruit.length - 1];
pLaatste.style.margin = "4px 0";
container.appendChild(pLaatste);

document.body.appendChild(container);

// elementen van een array verwijderen
const dieren = ["hond", "kat", "vis", "vogel", "hamster"];

dieren.splice(2, 1);

console.log(dieren);

// array vullen via prompt
const takenlijst = [];
for (let i = 0; i < 3; i++) {
    const taak = prompt("Voer een taak in:");
    takenlijst.push(taak);
}

console.log(takenlijst);

// op web
const container2 = document.createElement("div");
container2.style.border = "1px solid purple";
container2.style.padding = "10px";
container2.style.width = "300px";

const title = document.createElement("h4");
title.textContent = "Taken";
title.style.color = "#6a1b9a";
title.style.margin = "0 0 6px 0";
container2.appendChild(title);

const ol = document.createElement("ol");
for (let i = 0; i < takenlijst.length; i++) {
    const li = document.createElement("li");
    li.textContent = takenlijst[i];
    ol.appendChild(li);
}
container2.appendChild(ol);

document.body.appendChild(container2);

// geneste arrays
const genesteArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(genesteArray[1][2]);