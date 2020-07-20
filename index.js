var inquirer = require("inquirer");
var Word = require("./word.js");
var computerword = "building"
var guessesRemaining = 12;
var lettersGuesses = [];

var gameWord = new Word(computerword)
gameWord.addWord()
gameWord.underScore();


console.log(gameWord.underScore())
// console.log("word array",gameWord.wordArray);

function askForALetter() {
    if (guessesRemaining > 0) {
        inquirer.prompt([
            {
                type: "prompt",
                message: "Guess a letter!",
                name: "letter"
            }
        ]).then(function (response) {
            if (response.letter === "") {
                console.log("You did not guess a letter!")
                console.log("Guesses Remaining: " + guessesRemaining)
                askForALetter();
            }
            else if (lettersGuesses.includes(response.letter)) {
                console.log("You've already guessed this letter!")
                askForALetter();
            }
            else if (!gameWord.word.includes(response.letter) && !lettersGuesses.includes(response.letter)) {
                lettersGuesses.push(response.letter)
                console.log("Incorrect Letters Guessed ",lettersGuesses);
                guessesRemaining--
                console.log("Guesses Remaining: " + guessesRemaining)
                console.log(gameWord.underScore())
                console.log("That was an incorrect guesses !")
                askForALetter();
            }
            if (gameWord.word.includes(response.letter)) {
                 for (var j = 0; j < gameWord.word.length; j++) {
                     if (gameWord.word[j] === response.letter) {
                         let guessedLetter = response.letter
                         gameWord.checker(guessedLetter);
                     }
                 }
                console.log("Incorrect Letters Guessed ",lettersGuesses);
                console.log(gameWord.underScore())
                console.log("Guesses Remaining: " + guessesRemaining)
                askForALetter();
            }

        });
    }
    else {
        console.log("Game over")
        inquirer.prompt([
            {
                type: "list",
                message: "Play again?",
                choices: ["Yes", "No"],
                name: "again"
            }
        ]).then(function (response) {
            if (response.again === "Yes") {
                guessesRemaining = 12;
                askForALetter();
            }
            else {
                if (response.again === "No") {
                    console.log("Good game");
                }
            }

        })
    }
}
askForALetter();