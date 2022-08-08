// Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
// Convert the prompt response to a number data type
// Create a variable to use for the output message containing the value "My Selection: "
// Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is selected
// Use the switch break to add combined results for prizes
// Output the message back to the user by concatenating your prize variable strings and the output message string

let prize = prompt("Set prize value 0 - 10");
prize = parseInt(prize, 10);

const outputMessage = `My selection: ${prize}`;

switch(prize) {
    case 0:
    case 1:
        endString = "You won a new car!"
        break;
    case 2:
    case 3:
        endString = "You won a smile! :)"
        break;
    case 4:
    case 5:
        endString = "You won a 1-month gym membership"
        break;
    case 6:
    case 7:
        endString = "You won a new dog!"
        break;
    case 8:
    case 9:
        endString = "You won a new lizard or turtle!"
        break;
    case 10:
        endString = "You won a rare plant!"
        break;
}

console.log(outputMessage, endString);