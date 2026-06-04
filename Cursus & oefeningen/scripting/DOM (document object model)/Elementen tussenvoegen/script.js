const button = document.querySelector("#add-button");

button.addEventListener("click", () => {
    const list = document.querySelector("#technologies-list");

    const newItem = document.createElement("li");
    newItem.textContent = "CSS";

    const lastItem = list.lastElementChild;

    list.insertBefore(newItem, lastItem);
});