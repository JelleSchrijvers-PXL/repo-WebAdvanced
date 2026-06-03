// object uitlezen met for loop
const student = {
    naam: "John Duck",
    leeftijd: 22,
    isIngeschreven: true,
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// object weergeven in html
const wagen = {
    merk: "Opel",
    model: "Manta 400",
    bouwjaar: 1981,
};

const tbodyWagen = document.querySelector("#wagen-info");

if (tbodyWagen) {
    for (const key in wagen) {
        const value = wagen[key];

        const tr = document.createElement("tr");
        const tdKey = document.createElement("td");
        tdKey.innerText = key;

        const tdValue = document.createElement("td");
        tdValue.innerText = value;

        tr.appendChild(tdKey);
        tr.appendChild(tdValue);

        tbodyWagen.appendChild(tr);
    }
}

// array uitlezen
const dieren = ["Hond", "Kat", "Papegaai", "Hamster"];

for (let dier of dieren) {
    console.log(dier);
}

// array weergeven in html
const lijst = document.querySelector("#dierenlijst");

if (lijst) {
    for (const dier of dieren) {
        const li = document.createElement("li");
        li.innerText = dier;
        lijst.appendChild(li);
    }
}

// combinatie: objecten in arrays
let studenten = [
    { naam: "John Duck", leeftijd: 34, isIngeschreven: true },
    { naam: "Jane Duck", leeftijd: 20, isIngeschreven: false },
    { naam: "Samson", leeftijd: 35, isIngeschreven: true },
];

studenten = studenten.filter((student) => student.leeftijd < 35);

const studentenTabel = document.querySelector("#studenten-tabel");

if (studentenTabel && studenten.length > 0) {
    const tableHead = studentenTabel.querySelector("thead");
    const tableBody = studentenTabel.querySelector("tbody");

    const headerRow = document.createElement("tr");
    const eigenschappen = Object.keys(studenten[0]);

    for (const eigenschap of eigenschappen) {
        const th = document.createElement("th");
        th.innerText =
            eigenschap.charAt(0).toUpperCase() + eigenschap.slice(1);
        headerRow.appendChild(th);
    }

    tableHead.appendChild(headerRow);

    for (const student of studenten) {
        const row = document.createElement("tr");

        for (const eigenschap of eigenschappen) {
            const td = document.createElement("td");

            if (eigenschap === "isIngeschreven") {
                td.innerText = student[eigenschap]
                    ? "Ingeschreven"
                    : "Niet ingeschreven";
            } else {
                td.innerText = student[eigenschap];
            }

            row.appendChild(td);
        }

        tableBody.appendChild(row);
    }
}