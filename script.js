

let timesPlayed = 0;

let timesWon = 0;

let winRatio = 0;

var inputHappened = function(currentInput){

    let secretNumber = randomNum();

    let guessedNumber = parseInt(currentInput);

    console.log('Secret number is ' + secretNumber);

    console.log('Chosen number is ' + guessedNumber);

    hasWon(guessedNumber, secretNumber);

    timesPlayed ++;

    winRatio = (timesWon/timesPlayed * 100).toFixed(2);

    document.getElementById("timesPlayed").textContent = timesPlayed;

    document.getElementById("timesWon").textContent = timesWon;

    document.getElementById("winRatio").textContent = winRatio;

};

// function signature
// guessedNumber(number), secretNumber(number) --> won(boolean)

// function header:
// hasWon( guessedNumber, secretNumber )


const hasWon = function(guessedNumber, secretNumber) {
    if (guessedNumber === secretNumber) {
        display('You have won!');

        timesWon ++;

    } else {
        display('Please try again!')
    }
}

const randomNum = function() {
    return Math.floor(Math.random() * 10);
}