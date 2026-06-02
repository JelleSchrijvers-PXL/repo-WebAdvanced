let countries=[
    {desc: "BE", countryname: "Belgium"},
    {desc: "NL", countryname: "Netherlands"},
    {desc: "DE", countryname: "Germany"},
]

const select = document.createElement("select");
select.id = "countries";

countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.desc;
    option.textContent = country.countryname;
    select.appendChild(option);
});
document.body.appendChild(select);