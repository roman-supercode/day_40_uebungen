// Schreibe eine Funktion, die das aktuelle Datum anzeigt.
// Erwartete Ergebnisse: tt-mm-jjjj oder tt/mm/jjjj. (Tag, Monat, Jahr)
// Nutze Befehle:
// getDate(), getMonth(), getFullYear()
// Ternary Operator 
// getElementById
// Lass Dir das Ergebnis im HTML-Dokument anzeigen.

const output = document.querySelector("h1");

let date = new Date();
console.log(date);

let datum = date.getDate();
let monat = date.getMonth();
let jahr = date.getFullYear();

let result = datum && monat && jahr ? `${datum}-${monat}-${jahr}` : "etwas stimmt nicht";
console.log(result);

output.innerHTML = result


