const form = document.querySelector("#post-form");
const template = document.querySelector("#post-template");
const main = document.querySelector("main");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const title = formData.get("title")?.toString().trim();
    const content = formData.get("content")?.toString().trim();

    const clone = template.content.cloneNode(true);
    const section = clone.querySelector("section");
    if (section) {
        const h2 = section.querySelector("h2");
        h2.textContent = title;

        const p = section.querySelector("p");
        p.textContent = content;

        main.prepend(clone);

        form.reset();
    }
});

function updateFooterYear() {
    const footerYear = document.querySelector("footer span");
    const currentYear = new Date().getFullYear();
    footerYear.textContent = currentYear.toString();
}

updateFooterYear();
