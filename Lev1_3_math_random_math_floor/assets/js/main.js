// In dieser Übung werden wir Math.random() und Math.floor() kennenlernen.

// Deklariere die Variable randomNum und und gebe darin eine zufällige Nummer aus.
// Deklariere die Variable randomNum1_10 und gebe darin eine zufällige Nummer zwischen 1 und 10 aus.
// Deklariere die Variable randomNum1_100 und gebe darin eine zufällige Nummer zwischen 1 und 100 aus.

const randomNum = Math.random();
console.log(randomNum);

const randomNum1_10 = (Math.floor(Math.random() * 10) + 1);
console.log(randomNum1_10);

const randomNum1_100 = (Math.floor(Math.random() * 100) + 1);
console.log(randomNum1_100);