const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const computerGuess = letters[Math.floor(Math.random()*letters.length)];
console.log(computerGuess);
console.log(letters.length);

document.onkeyup = function(event) {
    let userGuess = event.key;
    console.log(userGuess);
}

let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessesSoFar = [];




// document.onkeyup = function(event) {

//     let userGuess = event.key.toLocaleLowerCase();
//     let check = letters.includes(userGuess);
    // if (userGuess.includes(key) && letters.includes(key)){
    //     if (key === computerGuess){
    //         winningLetter();
    //     } else {userGuess}
    // }


// alert("User guess: " + userGuess);

// alert("Computer guess: " + computerGuess);
// };