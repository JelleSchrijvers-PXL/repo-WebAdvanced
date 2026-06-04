const img = document.querySelector("img");

function updateCoordinates(top, left) {
    const element = document.querySelector(".coordinates");
    element.textContent = `Top: ${top}px, Left: ${left}px`;
}

document.addEventListener("keydown", (event) => {
    const key = event.key;

    let top = 0;
    if (img.style.top) {
        top = parseInt(img.style.top);
    }

    let left = parseInt(img.style.left) || 0;

    if (key === "ArrowUp" || key === "w") {
        top = top - 10;
    } else if (key === "ArrowDown" || key === "s") {
        top = top + 10;
    } else if (key === "ArrowRight" || key === "d") {
        left = left + 10;
    } else if (key === "ArrowLeft" || key === "a") {
        left = left - 10;
    }

    img.style.top = top + "px";
    img.style.left = left + "px";

    updateCoordinates(top, left);
});

document.addEventListener("click", (event) => {
    img.style.top = 0;
    img.style.left = 0;
    updateCoordinates(0, 0);
});