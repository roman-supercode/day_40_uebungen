// Erstell eine Funktion roundTo(Zahl, Genauigkeit){...}, die eine Zahl auf genaue Dezimalstellen rundet.

// Die folgende Methode könnte für Dich nützlich sein:
// toFixed()

// Um es zu testen, schreibe:
// console.log(roundTo(3.1415926535, 5)); // 3.14159

function roundTo(Zahl, Genauigkeit) {
    let number = Zahl;
    let result = number.toFixed(Genauigkeit);
    console.log(result);
}

roundTo(3.1415926535, 5);
roundTo(5.52375921875983476, 3);