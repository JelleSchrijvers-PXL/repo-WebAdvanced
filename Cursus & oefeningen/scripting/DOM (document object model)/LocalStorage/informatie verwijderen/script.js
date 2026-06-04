const form = document.querySelector("form");
const nameInput = document.querySelector("#name-input");
const greetingParagraph = document.querySelector("#greeting");
const deleteButton = document.querySelector("#delete-button");

function displayGreeting() {
    const storedName = localStorage.getItem("username");
    if (storedName) {
        greetingParagraph.textContent = `Hallo, ${storedName}!`;
    } else {
        greetingParagraph.textContent = "";
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    if (name) {
        localStorage.setItem("username", name);
        displayGreeting();
        nameInput.value = "";
    }
});

deleteButton.addEventListener("click", () => {
    localStorage.removeItem("username");
    displayGreeting();
});

displayGreeting();