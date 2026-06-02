function berekenOppervlakte(lengte, breedte){
    return lengte * breedte;
}

let lengte = Number(prompt("Wat is de lengte?"));
let breedte = Number(prompt("Wat is de breedte?"));

console.log("De oppervlakte is:", berekenOppervlakte(lengte, breedte));