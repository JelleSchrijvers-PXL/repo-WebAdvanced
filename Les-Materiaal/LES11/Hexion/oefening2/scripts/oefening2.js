'use strict';

const  getActivities = function (){
    return [
		{id:1, name:"Boardgame Night", date:"06/04/2022", time:"18h30" , location: "Corda Campus", place:"Hasselt"},
        {id:2, name:"Lezing: De Mainframe", date: "24/03/2022", time:"19h - 21h45" , location:"Hogeschool PXL" , place:"Hasselt"},
        {id:3, name:"Hexilan", date:"18/03/2022", time:"19h" , location:"Hogeschool PXL" , place:"Hasselt"},
        {id:4, name:"Hexion Café-Avond Witte Non", date:"08/12/2022", time:"19h30-23h",  location: "Café De Witte Non" , place:"Hasselt"},
        {id:5, name:"De Alles-en-Nog-Wat CANTUS", date:"18/04/2022", time: "20h", location:"Europalaan 26" , place:"Genk"},
        {id:6, name:"De Alles-Vergeten CANTUS", date:"25/06/2022", time: "21h" , location:"Fitlink" , place:"Diepenbeek"}
    ];
}

const  sortByDate = function(array){
    let sortedArray=[];
    sortedArray = array.sort(function (a, b) {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
    })

    return sortedArray;
}

function activityDetails(event){
    return `
        ${event.name}
        ${event.date}
        ${event.time}
        ${event.location}, ${event.place}`
}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}