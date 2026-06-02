let divSize = 30;
let randomSize = false;
let lastKnownScrollPosition = window.scrollY;

function GenerateColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function RandomDivSize() {
    divSize = Math.floor(Math.random() *256) ;
}

function ToggleRandomSize(event) {
    if (event.key === "r") {
        randomSize = !randomSize;
    }
}

function OnScrollDivSize() {
    if (window.scrollY > lastKnownScrollPosition) {
        divSize = Math.max(5, divSize - 5);
    } else {
        divSize += 5;
    }

    lastKnownScrollPosition = window.scrollY;
}

function CreateDivAndPlace () {
    divSize = 30;
    if (randomSize) {
        RandomDivSize();
    }

    let div = document.createElement("div");

    div.style.width = divSize + "px";
    div.style.height = divSize + "px";
    div.style.position = "absolute";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = GenerateColor();

    div.style.left = (event.clientX - divSize / 2) + "px";
    div.style.top = (event.clientY - divSize / 2) + "px";

    document.body.appendChild(div);
}

document.addEventListener("keydown", ToggleRandomSize);
document.addEventListener("scroll", OnScrollDivSize);
document.addEventListener("click", CreateDivAndPlace );