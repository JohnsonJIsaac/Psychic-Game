const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);
console.log(letters.length);

let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessesSoFar = [];

const winsText = document.getElementById("wins-text");
const lossesText = document.getElementById("losses-text");
const guessesLeftText = document.getElementById("guesses-left-text");
const guessesSoFarText = document.getElementById("guesses-so-far-text");

const restart = function() {
	guessesLeft = 9;
	guessesSoFar = [];
    
}

document.onkeyup = function (event) {
    let userGuess = event.key;
    console.log(userGuess);
    console.log(computerGuess);
    if (guessesLeft > 0) {
        if (userGuess === computerGuess) {
            wins++;
            winsText.textContent = "Wins:" + wins;
            restart ();
        } if (userGuess !== computerGuess) {
            guessesLeft--;
            guessesLeftText.textContent = "Number of Guesses Left: " + guessesLeft;
        }  if (guessesLeft === 0){
            losses++;
            lossesText.textContent = "Losses: " + losses;
            restart ();
        }   
    

    }
}