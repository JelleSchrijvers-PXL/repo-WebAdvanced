// Functiedeclaratie
function berekenOppervlakte(lengte, breedte) {
    return lengte * breedte;
}

// Functie-expressie
const berekenOmtrek = function (lengte, breedte) {
    return 2 * (lengte + breedte);
};

document.addEventListener("DOMContentLoaded", function () {

// form opbouw gebruik functies
const form = document.querySelector("form");

    if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const lengte = Number(document.querySelector("#lengte").value);
        const breedte = Number(document.querySelector("#breedte").value);

        const oppervlakte = berekenOppervlakte(lengte, breedte);
        const omtrek = berekenOmtrek(lengte, breedte);

        const oppervlakteElement = document.querySelector("#oppervlakte");
        const omtrekElement = document.querySelector("#omtrek");

        if (oppervlakteElement) {
            oppervlakteElement.innerText = `De oppervlakte is ${oppervlakte} m².`;
        }

        if (omtrekElement) {
            omtrekElement.innerText = `De omtrek is ${omtrek} m.`;
        }
    });
}
//Anonieme arrow-functie
const cijfers = [1, 2, 3, 4, 5];
const cijfersMaalDrie = cijfers.map((cijfer) => cijfer * 3);

const output = document.querySelector("#output");

if (output) {
    output.innerText = cijfers.join(", ");
    output.innerText += "\n";
    output.innerText += cijfersMaalDrie.join(", ");
}


//Cookie clicker clone
const cookieElement = document.querySelector("#cookie");
const scoreElement = document.querySelector("#score");

let score = 0;

if (cookieElement && scoreElement) {
    cookieElement.addEventListener("click", function () {
        score++;
        scoreElement.innerText = `Score: ${score}`;
    });
}
});