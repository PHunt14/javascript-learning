// Ask the user to enter a number and check whether it's greater than, equal to, or less than a dynamic number value in your code. Output the result to the user

const randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);
var userString = prompt("Enter your number ");
var userNumber = parseInt(userString);
var endString;

if (userNumber === randomNumber) {
    endString = "Great guess!"
} else if (userNumber > randomNumber) {
    endString = "You guessed too high"
} else if (userNumber < randomNumber) {
    endString = "You guessed too low"
} else {
    endString = "Something didn't work out there"
}
console.log(endString);
console.log(`Number: ${randomNumber} Your Number: ${userNumber}`);