let mountains = [];
let invoer = "";

while (invoer !== "einde") {

    let land = prompt("Geef de landnaam in (typ 'einde' om te stoppen)");

    if (land === "einde") {
        invoer = "einde";
    } else {

        let bergNaam = prompt("Geef de bergnaam in");
        let hoogte = prompt("Geef de hoogte van de berg in");

        let berg = {
            land: land,
            bergNaam: bergNaam,
            bergHoogte: parseInt(hoogte)
        };

        mountains.push(berg);
    }
}

let table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "75%";
table.border = "2px solid #333";

let header = document.createElement("tr");

let th1 = document.createElement("th");
th1.textContent = "Land";

let th2 = document.createElement("th");
th2.textContent = "Berg";

let th3 = document.createElement("th");
th3.textContent = "Hoogte";

header.appendChild(th1);
header.appendChild(th2);
header.appendChild(th3);
table.appendChild(header);

for (let i = 0; i < mountains.length; i++) {

    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = mountains[i].land;

    let td2 = document.createElement("td");
    td2.textContent = mountains[i].bergNaam;

    let td3 = document.createElement("td");
    td3.textContent = mountains[i].bergHoogte;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    table.appendChild(row);
}
document.body.appendChild(table);