var inquirer = require('inquirer');
var Word = require('./word');

// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
var alphabet = ["abcdefghijklmnopqrstuvwxyz"];
// video game characters
var videoGameCharacters = [
    "Mario", 
    "Yoshi", 
    "Link", 
    "Zelda", 
    "Princess Peach", 
    "Luigi", 
    "Bowser", 
    "Mega Man", 
    "Samus", 
    "Zero Suit Samus", 
    "Cloud", 
    "Tifa", 
    "Ganondorf", 
    "Pac-Man", 
    "Sonic The Hedghog", 
    "Donkey Kong", 
    "Little Mac", 
    "Toad", 
    "Rosalina", 
    "Toadette"
];

// Randomly selects a word and uses the Word constructor to store it
var randomIndex = Math.floor(Math.random() * videoGameCharacters.length);
var randomWord = videoGameCharacters[randomIndex];

var gameWord = new Word(randomWord);
var needNewWord = false;
var correctLetters = [];
var incorrectLetters = [];
var remainingGuesses = 10;

function playGame() {
    if (needNewWord) {
        var randomIndex = Math.floor(Math.random() * videoGameCharacters.length);
        var randomWord = videoGameCharacters[randomIndex];
        var gameWord = new Word(randomWord);
        var needNewWord = false;
    }
    var completedWord = [];


// Prompts the user for each guess and keeps track of the user's remaining guesses
if (completedWord.includes(false)) {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter: ",
            name: "userGuess"
        }
    ]).then(function(input) {
        if(!letterArray.includes(input.userGuess) || input.userGuess.length > 1) {
            console.log("Guess again!");
            playGame();
        }else {
            if(correctLetters.includes(input.userGuess) || incorrectLetters.includes(input.userGuess) || input.userGuess === "") {
                console.log("Try Again this was already guessed or was left blank.");
                playGame();
            }else {
                
            }
        }
    }
    
}else {
    console.log("Winner, Winner, Chicken Dinner!")
}
}
}
