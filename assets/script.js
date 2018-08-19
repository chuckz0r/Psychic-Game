var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessArray = [];
var guessedLetter = guessedLetter;


// Generate a random letter
var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log("The computer chooses " + computerChoice)

function updateScore() {
    document.getElementById("winsdiv").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("guessedLetters").innerHTML = "Letters you've guessed: " + guessArray;
}

function newCpuChoice() {
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
}

function resetChances() {
    guessesLeft = 10;
    guessArray = [];
}

function resetArray() {
    guessArray = [];
}

//Record the letter the player guesses

updateScore();

document.onkeyup = function (event) {
    var userChoice = event.key;
    console.log("The user chooses: " + userChoice);

    if (userChoice === computerChoice) {
        wins++;
        guessesLeft = 10;
        guessArray = [];
        updateScore();
        newCpuChoice();
        console.log("This is a win.");
        console.log(computerChoice);
    } else {
        guessesLeft--;
        guessArray.push(userChoice);
        updateScore();
        console.log("This is a wrong guess.")
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 10;
        updateScore();
        newCpuChoice();
        resetChances();
        guessArray.length = 0
        console.log("This is a loss.");
    }
};