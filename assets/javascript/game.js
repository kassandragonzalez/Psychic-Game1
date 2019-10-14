var letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var compuGuess = letter[Math.floor(Math.random() * letter.length)];
var guessCounter = 9;
var guessedLetter = [];

var wins = 0;
var losses = 0;

var userGuessText = document.getElementById("userguesses-text");
var guessCounterText = document.getElementById("num-guesses-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();
  console.log("Keypressed:", event.key);

  
  if (userGuess == compuGuess) {
    wins++;
    guessCounter = 9;
  } else {
    if (guessCounter != 1) {
      guessCounter--;
    } else {
      losses++;
      guessCounter = 9;
    }
  }

  userGuessText.textContent = "You chose: " + userGuess;
  guessCounterText.textContent = "Guesses left: " + guessCounter;
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
};

//for Psychic game

//For Word Game

/*
This goes in html:

<div id="user-progress"> --- </div>
*/
/*var words = ["apple", "pizza", "watermelon", "tacos"];
var compuChoice = words[0];
console.group(compuChoice);
var targetWord = compuChoice.split("");
console.log(targetWord);

function makeDashes() {
  for (var i = 0; i < targetWord.length; i++) {
    var userProgress = document.getElementById("user-progress");
    var theDashes = "";
    userProgress.textContent += "_";
  }
}*/
