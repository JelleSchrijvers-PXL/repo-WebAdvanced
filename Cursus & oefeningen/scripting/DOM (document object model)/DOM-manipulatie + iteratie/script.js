const list = document.querySelector("ol");
const listItems = document.querySelectorAll("li");

list.addEventListener("mouseover", () => {
    listItems.forEach((item, i) => {
        if (i % 2 === 0) {
            item.classList.add("primary");
        } else {
            item.classList.add("secondary");
        }
    });
});

list.addEventListener("mouseleave", () => {
    listItems.forEach((item) => {
        item.classList.remove("primary", "secondary");
    });
});
