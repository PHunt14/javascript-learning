// Modify the calculator that you made in Practice exercise 6.2 to return added values instead of printing them. Then, call the function 10 or more times in a loop, and store the results in an array. Once the loop finishes, output the final array into the console.

// Set up an empty array to store the values that will be calculated within the loop.
// Create a loop that runs 10 times, incrementing by 1 each time, creating two values each iteration. For the first value, multiply the value of the loop count by 5. For the second value, multiply the value of the loop counter by itself.
// Create a function that returns the value of the two parameters passed into the function when it is called. Add the values together, returning the result.
// Within the loop, call the calculation function, passing in the two values as arguments into the function and storing the returned result in a response variable.
// Still within the loop, push the result values into the array as it iterates through the loop.
// After the loop is complete, output the value of the array into the console.
// You should see the values [0, 6, 14, 24, 36, 50, 66, 84, 104, 126] for the array in the console.

function calculatorFunction (operand1, operand2, operatorString) {
    if (operatorString === "-") {
        return operand1 - operand2;
    } else {
        return operand1 + operand2;
    }
}

const iterations = 10;
let resultArray = [];
for (i = 0; i < iterations; i++) {
    const var1 = i * 5;
    const var2 = i * i;
    const response = calculatorFunction(var1, var2, "+");
    resultArray.push(response);
}

console.log(resultArray);