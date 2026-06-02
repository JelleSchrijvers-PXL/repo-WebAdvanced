spaceflights= [{ id: 1, name : "Apollo 7"}, { id: 2, name : "Gemini 3"}, { id: 3, name : "Apollo 11"}]
members= [{ id: 1, name: "Eisele", captain : "n", space_id : 1 },
    { id: 2, name: "Schirra", captain : "y", space_id : 1 },
    { id: 3, name: "Cunningham", captain : "n", space_id : 1 },
    { id: 4, name: "Grissom", captain : "y", space_id : 2 },
    { id: 5, name: "Young", captain : "n", space_id : 2 },
    { id: 6, name: "Alldrin", captain  : "n", space_id : 3 },
    { id: 7, name: "Armstrong", captain: "y", space_id : 3 },
    { id: 8, name: "Collins", captain : "n", space_id : 3 }]

let divSelect = document.getElementById("div_select");

let select = document.createElement("select");
select.addEventListener("change", GetMembers)
select.id = "select_flight";

spaceflights.forEach(flight => {
    let option = document.createElement("option");
    option.value = flight.id;
    option.textContent = flight.name;

    select.appendChild(option);
});

divSelect.appendChild(select);


function GetMembers() {
    let output = document.querySelector("output");

    makeElementEmpty(output);

    let flight = document.getElementById("select_flight");
    let flightId = parseInt(flight.value);

    let ul = document.createElement("ul");

    for (let i = 0; i < members.length; i++) {
        if (members[i].space_id === flightId) {
            let li = document.createElement("li");
            li.textContent = members[i].name;

            if (members[i].captain === "y") {
                li.style.color = "red";
            }

            ul.appendChild(li);
        }
    }
    output.appendChild(ul);
}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}