let quiz = [
    {"id":1  , "vraag":"In welk werelddeel ligt China ?"  , "optie_1": "Azie" , "optie_2": "Europa","optie_3": "Afrika", "antwoord": "Azie" },
    {"id":2  , "vraag":"Welk land ligt rechts van Nederland ?"  , "optie_1": "Belgie" , "optie_2": "Duitsland","optie_3": "Polen", "antwoord": "Duitsland" },
    {"id":3  , "vraag":"In welk land ligt Los Angeles ?"  , "optie_1": "Rusland" , "optie_2": "Zweden","optie_3": "Amerika", "antwoord": "Amerika" },
    {"id":4  , "vraag":"Welk land heeft de vorm van een laars ?"  , "optie_1": "Engeland" , "optie_2": "Italie","optie_3": "Denemarken", "antwoord": "Italie" },
    {"id":5  , "vraag":"Van welk land is Moskou de hoofdstad ?"  , "optie_1": "Kroatie" , "optie_2": "Rusland","optie_3": "Spanje", "antwoord": "Rusland" },
];

let btn = document.getElementById("vragenKnop");
let output = document.getElementById("vragen");

btn.addEventListener("click", genereerQuiz);

function genereerQuiz(){

    output.textContent = "";

    let aantal = document.getElementById("aantal").value;
    if (aantal === ""){
        alert("Je hebt geen input gegeven");
        return
    }
    if(aantal > 5){
        alert("Er zijn max 5 vragen");
        return;
    }

    let titel = document.createElement("h3");
    titel.textContent = "De grote landenquiz";
    output.appendChild(titel);

    let hr = document.createElement("hr");
    output.appendChild(hr);
    let gebruikteVragen = [];
    for(let i = 0; i < aantal; i++){
        let keuzeIndex = "";
        do {
            keuzeIndex = parseInt(5 * Math.random());
        }while (gebruikteVragen.indexOf(keuzeIndex) !== -1)
        gebruikteVragen.push(keuzeIndex);

        let vraagObj = quiz[keuzeIndex];

        let label = document.createElement("label");
        label.textContent = vraagObj.vraag;
        output.appendChild(label);

        let opties = [vraagObj.optie_1, vraagObj.optie_2, vraagObj.optie_3];

        for(let j = 0; j < opties.length; j++){

            let button = document.createElement("button");

            button.textContent = opties[j];
            button.setAttribute("name", opties[j]);
            button.setAttribute("value", vraagObj.antwoord);

            button.addEventListener("click", controleerAntwoord);

            output.appendChild(button);
        }

        let hr2 = document.createElement("hr");
        output.appendChild(hr2);
    }
}

function controleerAntwoord(event){

    let knop = event.target;

    if(knop.classList.contains("juist") || knop.classList.contains("fout")){
        return;
    }

    if(knop.name === knop.value){
        knop.classList.add("juist");
        alert("Het is juist!!!")
    }else{
        knop.classList.add("fout");
        alert("Oei, het is fout!!!")
    }
}