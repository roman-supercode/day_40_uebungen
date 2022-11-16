// Schreibe eine Funktion, die den Monatsnamen anhand eines bestimmten Datums ermittelt.
// Verwende den Code aus dem Kommentar.
// Nutze getMonth() um die Aufgabe zu lösen.
// Überprüfe deine Funktion mit folgenden Argumenten in der Konsole:
// console.log(monatsName("2001,3,4")); //März
// console.log(monatsName("2019,12,24")); //Dezember
// console.log(monatsName("1410,07,15")); //Juli

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

function monatsName(year, month, datE) {

    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month - 1);
    date.setDate(datE);

    console.log(list[date.getMonth(month)]);
};

monatsName(2001, 3, 4);
monatsName(2019, 12, 24);
monatsName(1410, 07, 15);