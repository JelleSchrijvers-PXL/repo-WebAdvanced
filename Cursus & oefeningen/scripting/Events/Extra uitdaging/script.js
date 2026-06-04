const p = document.createElement("p")
document.body.appendChild(p)

const jsonOutput = document.createElement("div")
document.body.appendChild(jsonOutput)

const keys = {}

document.addEventListener("keydown", event => {
    p.textContent = event.key;

    const key = event.key.toLowerCase();
    if (keys[key] !== undefined) {
        keys[key] = keys[key] + 1
    }else{
        keys[key] = 1
    }

    jsonOutput.textContent = JSON.stringify(keys)

    showKeysInTable();
})

function showKeysInTable() {
    let table = document.createElement("table")

    if (!table){
        table = document.createElement("table")
    }

    table.textContent = ""

    const trHead = document.createElement("tr")
    table.appendChild(trHead)

    const thKey = document.createElement("th")
    thKey.textContent = "toets"
    trHead.appendChild(thKey)

    const thAmount = document.createElement("th")
    thAmount.textContent = "Aantal keer ingedrukt"
    trHead.appendChild(thAmount)

    for (const key in keys){
        const trKey = document.createElement("tr")
        trKey.appendChild(trKey)

        const tdKey =document.createElement("td")
        tdKey.textContent = key
        trKey.appendChild(tdKey)

        const tdAmount = document.createElement("td")
        tdAmount.textContent = keys[key]
        trKey.appendChild(tdAmount)
    }

    document.body.appendChild(table)
}