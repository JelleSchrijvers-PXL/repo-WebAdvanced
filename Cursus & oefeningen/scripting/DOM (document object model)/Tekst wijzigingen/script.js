const button = document.querySelector("button");

button.addEventListener("click", () => {
    const h1Element = document.querySelector("h1");
    h1Element.textContent = "PXL Hogeschool";

    const h2Elementen = document.querySelectorAll("h2");
    const tweedeH2Element = h2Elementen[1];
    tweedeH2Element.textContent = "Word een programmeur bij PXL";
});