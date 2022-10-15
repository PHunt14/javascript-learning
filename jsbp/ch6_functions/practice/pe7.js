let start = 10;

function countdown(value) {
    console.log(value);
    if (value < 1 ) {
        return;
    }
    if (value >= 1 ) {
        countdown(--value)
    }
}

function countdownTwo(value) {
    console.log(value);
    if (value < 0 ) {
        return;
    }
    if (value >= 0 ) {
        countdownTwo(--value)
    }
}

countdown(start);