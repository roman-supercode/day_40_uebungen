// Schreibe eine Funktion, um AM und PM zu erhalten.
// Wenn die Uhrzeit kleiner als 12 Uhr ist, wird AM angezeigt.
// Wenn die Uhrzeit größer als 12 Uhr ist, wird PM angezeigt.

// Teste sie mit folgenden Argumenten:
// date1 = new Date(1999, 10, 5, 15) //PM
// date2 = new Date()
// date3 = new Date(2019, 12, 3, 12) //AM
// date4 = new Date(2000, 1, 1, 11) //AM


function uhrzeit(date) {
    let hours = date.getHours();
    // console.log(date);

    let check = hours < 12 ? "AM" : "PM";
    console.log(check);
}

let date1 = new Date(1999, 10, 5, 15);
let date2 = new Date();
let date4 = new Date(2000, 1, 1, 11);
let date3 = new Date(2019, 12, 3, 12);
uhrzeit(date1);
uhrzeit(date2);
uhrzeit(date3);
uhrzeit(date4);