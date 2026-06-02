let imgNode = document.querySelector("#key");
let pNode = document.querySelector("#coordinaten");
let rotation = 0;

pNode.style.position = `fixed`;
imgNode.style.position = "absolute";
imgNode.style.width = "120px";

function toonCoordinaten(){
    let top = parseInt(imgNode.style.top);
    let left = parseInt(imgNode.style.left);2

    pNode.textContent = "X: " + left + "px | Y: " + top + "px";
}

function resetPosition(){
    imgNode.style.left = (window.innerWidth / 2) + "px";
    imgNode.style.top = (window.innerHeight / 2) + "px";
    rotation = 0;
    imgNode.style.transform = "rotate(0deg)";
    toonCoordinaten();
}

resetPosition();

function fctKeys(event){
    console.log("Je hebt op toets: " + event.key);

    let top = parseInt(imgNode.style.top);
    let left = parseInt(imgNode.style.left);
    let step = 25;

    if (event.key == "ArrowRight"){
        imgNode.style.left = (left + step) + "px";
        toonCoordinaten();
    }
    else if (event.key == "ArrowLeft"){
        imgNode.style.left = (left - step) + "px";
        toonCoordinaten();
    }
    else if (event.key == "ArrowDown"){
        imgNode.style.top = (top + step) + "px";
        toonCoordinaten();
    }
    else if (event.key == "ArrowUp"){
        imgNode.style.top = (top - step) + "px";
        toonCoordinaten();
    }
    else if (event.key == "r"){ //naar rechts draaien
        rotation += 25;
        imgNode.style.transform = "rotate(" + rotation + "deg)";
    }
    else if (event.key == "R"){ //naar links draaien
        rotation -= 25;
        imgNode.style.transform = "rotate(" + rotation + "deg)";
    }
    else if (event.key == "1"){
        imgNode.src = "unnamed.webp";
    }
    else if (event.key == "2"){
        imgNode.src = "Schermafbeelding 2026-01-26 201242.png";
    }
    else if (event.key == "3"){
        imgNode.src = "Schermafbeelding 2026-01-09 152638.png";
    }
    else if (event.key == "0"){ // reset positie
        resetPosition();
    }
}

document.addEventListener("keydown", fctKeys);