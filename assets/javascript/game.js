// Created an array of the computer choices and user guesses

//var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//var userGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var computerChoices = ["a"];
var userGuesses = ["a"];

// Created wins/losses and guesses variables

var Wins = 0;
var Losses = 0;
var guessesLeft = 9;
var userGuesses = "";

// Create variable that refrence the html

var directionsText = document.getElementById("directions-text");
var userGuesses = document.getElementById("userGuesses-text");
var winsText = document.getElementById("wins-text");
var guessesLeft = document.getElementById("Guessesleft-text");


// This function is run whenever the user presses a key.

document.onkeyup = function (event) {

    // Determines which key was pressed.

    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    // Reworked our code from last step to use "else if" instead of lots of if statements.
    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
   
    if (userGuess === "a") {
        if ((userGuess === "r" && computerGuess === "s") ||
            (userGuess === "s" && computerGuess === "p") ||
            (userGuess === "p" && computerGuess === "r")) {
            wins++;
        } else if (userGuess === computerGuess) {
            ties++;
        } else {
            losses++;
        }
       
        // Hide the directions
        
        directionsText.textContent = "";
        
        // Display the user and computer guesses, and wins/losses/ties.
        
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
    }
};
