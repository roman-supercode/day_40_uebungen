// Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.

// Speichere die Werte in einer Variable (date1, date2, …)
// Nutze innerHTML um das Ergebnis darzustellen.
// Teste dann die Werte:
// new Date("September 2, 2019 09:00:00")
// new Date(0)
// new Date(31556908800)
// new Date(86400000)
let output = document.querySelector("h1");

let date1 = new Date();
output.innerHTML += date1;
console.log(date1);


let date2 = new Date("September 2, 2019 09:00:00");
output.innerHTML += "<br>" + date2;
let date3 = new Date(0);
output.innerHTML += "<br>" + date3;
let date4 = new Date(31556908800);
output.innerHTML += "<br>" + date4;
let date5 = new Date(86400000);
output.innerHTML += "<br>" + date5;

console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
