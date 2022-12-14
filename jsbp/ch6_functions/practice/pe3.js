// Create a basic calculator that takes two numbers and one string value indicating an operation. If the operation equals add, the two numbers should be added. If the operation equals subtract, the two numbers should be subtracted from one another. If there is no option specified, the value of the option should be add.

// The result of this function needs to be logged. Test your function by invoking it with different operators and no operator specified.

// Set up two variables containing number values.
// Set up a variable to hold an operator, either + or -.
// Create a function that retrieves the two values and the operator string value within its parameters. Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly (remember if not presented with a valid operator, the function should default to addition).
// Within console.log(), call the function using your variables and output the response to the console.
// Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated arguments.

function calculatorFunction (operand1, operand2, operatorString) {
    if (operatorString === "-") {
        return operand1 - operand2;
    } else {
        return operand1 + operand2;
    }
}

const var1 = 15
const var2 = 25

console.log(calculatorFunction(var1, var2, "*"));