/*

var letter = ["a", "b", "c", "d", "e"];
var compuGuess = letter[0];

document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();
  console.log("Keypressed:", event.key);

  if (compuGuess == userGuess) {
    alert("You Win!");
  } else {
    alert("You Lost!");
  }
};

//for Psycic game 
*/

//For Word Game

/*
This goes in html:

<div id="user-progress"> --- </div>
*/
var words = ["apple", "pizza", "watermelon", "tacos"];
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
}
