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

