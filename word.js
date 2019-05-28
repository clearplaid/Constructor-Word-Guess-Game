// Word.js should only require Letter.js

var Letter = require("./letter");

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
function Word(answer) {
    // An array of new Letter objects representing the letters of the underlying word
    this.letterArray = [];

    for (let i = 0; i < answer.length; i++) {
        var letter = new Letter (answer[i]);
        this.letterArray.push(letter);
    }
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.display = function() {
        var answerDisplay = "";
        for (let i = 0; i < this.letterArray.length; i++) {
            answerDisplay += this.letterArray[i] + " ";
        }
        console.log(answerDisplay)
    };
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.userGuess = function(input) {
        for (let i = 0; i < this.letterArray.length; i++){
            this.letterArray[i].guess(input);
        }
    };
}


module.exports = Word;