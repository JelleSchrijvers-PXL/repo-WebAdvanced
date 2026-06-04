const form = document.querySelector("form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

function createTaskElement(taskText) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
    });

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Verwijderen";
    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === "") return;

    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);

    input.value = "";
    input.focus();
});