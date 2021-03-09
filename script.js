"use strict"

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("Initialize program");

    splitIntoLetters();
}

function splitIntoLetters() {
    console.log("Splits word into letters");

    let textSplit;
    let fullSentence = document.querySelector("#cooltext");

    // Opretter et array og sætter hvert bogstav ind
    textSplit = fullSentence.textContent.split("");
    console.log(textSplit);

    // Tømmer containeren for tekst
    fullSentence.textContent = "";

    // For hvert bogstav laves et span element
    textSplit.forEach((letter, index) => {

        let animateLetter = document.createElement("span");
        animateLetter.classList.add("fadewave");
        animateLetter.style.setProperty("--delay", index);

        // Hvis 'bogstav' er mellemrum indsættes non breakable space
        if (letter === " ") {
            animateLetter.innerHTML = "&nbsp;";
        } else {
            animateLetter.textContent = letter;
        }

        // Indsæt span elementerne
        fullSentence.append(animateLetter);
    });

}

