// Zeige die Daten wie auf dem Screenshot an.

// let monate = [
//     "Januar",
//     "Februar",
//     "März",
//     "April",
//     "Mai",
//     "Juni",
//     "Juli",
//     "August",
//     "September",
//     "Oktober",
//     "November",
//     "Dezember"
// ];

// let wochenTag = [
//     "Sonntag",
//     "Montag",
//     "Dienstag",
//     "Mittwoch",
//     "Donnerstag",
//     "Freitag",
//     "Samstag"
// ];
// let output = document.querySelector("h1");

// let dateToday = new Date();
// output.innerHTML = dateToday;

// let dateMonth = dateToday.getMonth();
// output.innerHTML += "<br>" + dateMonth + " Monat";

// let dateDay = dateToday.getDay();
// output.innerHTML += "<br>" + dateDay + " Tag";

// let dateHour = dateToday.getHours();
// output.innerHTML += "<br>" + dateHour + " Stunde";

// let dateMinute = dateToday.getMinutes();
// output.innerHTML += "<br>" + dateMinute + " Minute";

// let dateWeekDay = wochenTag[dateToday.getDay()];
// output.innerHTML += "<br>" + dateWeekDay;

// let dateM = monate[dateToday.getMonth()];
// output.innerHTML += "<br>" + dateM;

// --- CSS Clock ---
let outputDatum = document.querySelector(".date");
let outputZeit = document.querySelector(".time");
let outputWochenTag = document.querySelector(".weekday");

function clock() {
    let datum = new Date();
    outputDatum.innerHTML = datum.toLocaleDateString("de-DE");

    let zeit = datum.toLocaleTimeString("de-DE");
    outputZeit.innerHTML = zeit;
    // console.log(zeit);

    let wochenT = [
        "Sun.",
        "Mon.",
        "Tue.",
        "Wed.",
        "Thu.",
        "Fri.",
        "Sat."
    ];

    let wochentag = wochenT[datum.getDay()];
    outputWochenTag.innerHTML = wochentag;

    // setTimeout Methode ruft eine Funktion auf oder führt sie nach einer bestimmten Anzahl von Millisikunden aus.
    // 1000 ms = 1 Sekunde
    // Durch diese Methode "läuft" die Uhr
    setTimeout(function () { clock(); }, 1000);

}

clock();
