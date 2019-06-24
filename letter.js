
var Letter = function (str) {

    this.array1 = (str);
    this.letterGuess;
    this.setup = function (str) {
        if (this.letterGuess === true) {
            return this.array1;
        }
        else {
            return (" _ ");
        }
    }
}

module.exports = Letter;



