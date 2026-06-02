let array_data = [[7,8,9] ,[4,5,6], [1,2,3], [0,".","="]];
const handleLoad = () =>{}

window.addEventListener("load", handleLoad);

let container = document.getElementById("output_calculator");
let results = document.getElementById("output_results");

let table = document.createElement("table");
ul = document.createElement("ul");

results.appendChild(ul);

let waarde = "";

for (let i = 0; i < array_data.length; i++) {

    let tr = document.createElement("tr");

    for (let j = 0; j < array_data[i].length; j++) {

        let td = document.createElement("td");

        let button = document.createElement("button");
        button.classList.add("button" , "button_x");
        button.textContent = array_data[i][j];
        button.addEventListener("click", clickButton);

        td.appendChild(button);
        tr.appendChild(td);
    }

    table.appendChild(tr);
}

container.appendChild(table);

function clickButton(event){

    let value = event.target.textContent;

    if(value === "="){

        if(waarde !== ""){

            let li = document.createElement("li");
            li.textContent = waarde;

            ul.appendChild(li);

            waarde = "";
        }

    }else{
        waarde += value;
    }
}