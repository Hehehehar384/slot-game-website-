const reels = document.querySelectorAll(".reel");
const spinButton = document.getElementById("spin-button");
const resultDisplay = document.getElementById("result");

// Hier kannst du die Symbole für jede Rolle definieren
const symbols = [
    ["Symbol 1", "Symbol 2", "Symbol 3", "Symbol 4", "Symbol 5"],
    // Füge hier Symbole für weitere Reels hinzu
];

spinButton.addEventListener("click", () => {
    // Drehe die Rollen
    spinReels();
    
    // Überprüfe, ob der Spieler gewonnen hat
    const winResult = checkWin();
    
    // Zeige das Ergebnis an
    resultDisplay.textContent = "Result: " + winResult;
});

function spinReels() {
    reels.forEach((reel, index) => {
        const randomIndex = Math.floor(Math.random() * symbols[index].length);
        const randomSymbol = symbols[index][randomIndex];
        reel.innerHTML = randomSymbol;
    });
}

function checkWin() {
    // Hier kannst du die Logik für Gewinnkombinationen implementieren
    // Zum Beispiel, wenn alle Symbole in einer horizontalen Linie gleich sind, ist es ein Gewinn.
    // Du musst diese Logik entsprechend deinen Bedürfnissen anpassen.
    return "No win"; // Hier wird der Standardwert "No win" zurückgegeben
}
