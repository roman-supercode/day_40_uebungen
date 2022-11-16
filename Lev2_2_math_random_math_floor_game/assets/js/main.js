// Schreibe ein kleines Spiel/Programm – das wie folgt funktioniert:

// Das Programm “denkt” sich eine Zahl zwischen 1-10 mithilfe von Math.Random aus und Du musst sie erraten.
// Nach Eingabe deiner Zahl sagt dir das Programm (in der Konsole), ob du richtig oder falsch geraten hast.

// Hinweis: In der Ergebnisvorschau wird die Methode prompt() verwendet.

function game() {
    let input = prompt("Schätze eine Zahl zwischen 1 und 10!");
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    // console.log(randomNumber);
    console.log(input);
    if (input !== null) {
        let result = (Number(input) === randomNumber) ? "Hey du hast gewonnen!" : "Du hast verloren. Die Zahl lautet " + randomNumber;
        console.log(result);
    }
}

game();
