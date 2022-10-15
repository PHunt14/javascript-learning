function factorialFunction (number) {
    if ( number === 0 ) {
        return 1;
    }
    else {
        return number * factorialFunction(number - 1)
    }
}

console.log(factorialFunction(7));