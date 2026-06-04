const form = document.querySelector("form");
const input = document.querySelector("#task-input");
const takenlijst = document.querySelector("#task-list");

const opslagSleutel = "takenlijst";
let taken = [];

function bewaarTaken() {
    localStorage.setItem(opslagSleutel, JSON.stringify(taken));
}

function laadTaken() {
    const opgeslagenTaken = localStorage.getItem(opslagSleutel);

    if (opgeslagenTaken !== null) {
        taken = JSON.parse(opgeslagenTaken);
    }
}

function toonTaken() {
    takenlijst.innerHTML = "";

    taken.forEach((taak, index) => {
        const taakElement = maakTaakElement(taak, index);
        takenlijst.appendChild(taakElement);
    });
}

function maakTaakElement(taak, index) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taak.voltooid;
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
        taken[index].voltooid = checkbox.checked;
        bewaarTaken();
    });

    const span = document.createElement("span");
    span.textContent = taak.tekst;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Verwijderen";
    deleteButton.addEventListener("click", () => {
        taken.splice(index, 1);
        bewaarTaken();
        toonTaken();
    });

    if (taak.voltooid) {
        li.classList.add("completed");
    }

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taakTekst = input.value.trim();
    if (taakTekst === "") return;

    taken.push({
        tekst: taakTekst,
        voltooid: false,
    });

    bewaarTaken();
    toonTaken();

    input.value = "";
    input.focus();
});

laadTaken();
toonTaken();