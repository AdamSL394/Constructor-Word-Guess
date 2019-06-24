var Letter = require("./letter.js")


var Word = function (str) {
    this.wordArray = [];
    this.word = (str)
    this.addWord = function () {
        for (var i = 0; i < this.word.length; i++) {
            this.wordArray.push(new Letter(this.word[i]))
        }

    }
    this.underScore = function () {
        var placeHolder = '';
        for (var i = 0; i < this.wordArray.length; i++) {
            placeHolder += this.wordArray[i].setup();
        }
        return placeHolder;

    }
    this.checker = function (response) {
        for (var i = 0; i < wordArray.length; i++) {
            if (response === this.wordArray[i].array1) {
                this.wordArray[i].letterGuess = true;
            }
        }
    }
}

module.exports = Word;