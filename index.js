var inquirer = require("inquirer");

var Word = require("./word.js");

// var iphone = new Word ("iphone");

// iphone.addword("iphone")

// console.log(newLetters)

var computerword = "building"
var guessesRemaining = 12;
// var lettersGuesses = [];
var gameWord = new Word(computerword)

gameWord.addWord()
gameWord.underScore();

console.log(gameWord.underScore())


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
                console.log(gameWord)
                askForALetter();
            }
            else if (lettersGuesses.includes(response.letter)) {
                console.log("You've already guessed this letter!")
                askForALetter();
            }
            else if (!letter1.splitArray.includes(response.letter) && !lettersGuesses.includes(response.letter)) {
                lettersGuesses.push(response.letter)
                console.log(lettersGuesses);
                guessesRemaining--
                console.log("Guesses Remaining: " + guessesRemaining)
                console.log(letter1.array1)
                console.log("That was an incorrect guesses !")
                askForALetter();
            }
            if (letter1.splitArray.includes(response.letter)) {
                for (var j = 0; j < letter1.splitArray.length; j++) {
                    if (letter1.splitArray[j] === response.letter) {
                        letter1.array1[j] = response.letter
                        guessesRemaining--
                    }
                }
                console.log(letter1.array1)
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