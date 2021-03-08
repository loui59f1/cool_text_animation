"use strict"

let lettersArray = [];
let sentenceContainer = document.querySelector(".container");
let fullSentence = document.querySelector("#cooltext").textContent;

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("Initialize program");

    splitIntoLetters();
}

function splitIntoLetters() {
    console.log("Splits word into letters");

    // Tømmer containeren for tekst
    sentenceContainer.innerHTML = "";

    // Lægger alle bogstaver ind i array
    for (let i = 0; i < fullSentence.length; i++) {
        let letterI = fullSentence.substring(i, i + 1);

        lettersArray.push(letterI);
    }

}

// Nu skal alle bogstaver ind i sin egen span...
