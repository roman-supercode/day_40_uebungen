// Zeige die Daten wie auf dem Screenshot auf und nutze die Set Date Methode.
// In der letzten Zeile wurden 30 Tage auf das damals aktuelle Datum addiert.
// Denkt dran, dass euer Ergebnis sich aufgrund des Datums von dem Screenshot unterscheiden wird.
let output = document.querySelector("h1");

let date = new Date("Wed Oct 23 2222 13:25:11");
console.log(date);
output.innerHTML = date;


date.setDate(24);
date.setFullYear(2123);
date.setMonth(1);
console.log(date);
output.innerHTML += "<br>" + date;

date.setMonth(2);
console.log(date);
output.innerHTML += "<br>" + date;

date.setDate(3);
console.log(date);
output.innerHTML += "<br>" + date;

date.setDate(22);
date.setMonth(10);
date.setFullYear(2019);
console.log(date);
output.innerHTML += "<br>" + date;
