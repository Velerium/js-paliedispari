var short = document.getElementById('output-pal');
var userWord = document.getElementById('userWord');

function palindrome (y) {

    var check = true;

    y = y.toLowerCase();
    
    for(i = 0; i < y.length; i++) {
        if(y[i] !== y[y.length - (i + 1)]) {
            check = false;
        }
    }

    return check;
}

function again() {  // Because why not?

    var word = prompt('Insert a word!');

    if (!word || word.length === 0) {
    alert('Invalid value.');
    userWord.innerHTML = '';
    } else {
        userWord.innerHTML = 'The word ' + '<span id="underline">' + word + '</span>' + ':';
    }

    if (word) {
        var check = palindrome(word);
    }  // This prevents errors if a null value is entered.

    if (!word || word.length === 0) {
        short.innerHTML = 'Please try again.';
    } else if (check) {
        short.innerHTML = 'IS a palindrome!!'
    } else {
        short.innerHTML = 'is NOT a palindrome...'
    }
}
again();

// ----------- PARI O DISPARI? ----------- //

var short2 = document.getElementById('output-player');
var short3 = document.getElementById('output-cpu');
var choices = document.getElementsByClassName('choices');
var winner = document.getElementById('winner');

function numberGame() { //Triggered only by button.

    if (choices[0].checked === false && choices[1].checked === false) {
        winner.innerHTML = 'Please select a choice!'
        return;
    }

    var playerNumber = parseInt(prompt('Pick a number from 1 to 5!'));

    if (playerNumber < 1 || playerNumber > 5) {
        winner.innerHTML = 'Please pick a number between 1 and 5.'
        return;
    }

    short2.innerHTML = playerNumber;

    var cpuNumber = Math.floor(Math.random() * 5) + 1;
    short3.innerHTML = cpuNumber;

    var total = playerNumber + cpuNumber;

    if (choices[0].checked === true) { // EVEN
        if (total % 2 === 0) {
            winner.innerHTML = 'You win!!'
        } else {
            winner.innerHTML = 'You lose...'
        }
    } else { // ODD
        if (total % 2 === 1) {
            winner.innerHTML = 'You win!!'
        } else {
            winner.innerHTML = 'You lose...'
        }
    }
}