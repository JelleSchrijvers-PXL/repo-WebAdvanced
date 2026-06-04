const input = document.querySelector("input");
const p = document.querySelector("p");

input.addEventListener("input", (event) => {
    const value = event.target.value;
    p.textContent = value.split("").reverse().join("");
});