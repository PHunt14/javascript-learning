// Ask the user to enter a name, using the switch statement to return a confirmation that the user is a friend if the name selected is known in the case statements. 
// You can add a default response that you don't know the person if it's an unknown name. 
// Output the result into the console.

var userEnteredName = prompt("Enter a name ");

switch (userEnteredName) {
    case "Fred":
    case "John":
    case "Peter" :
    case "Amelia":
    case "Francine":
        console.log(`Hey, ${userEnteredName}, I know them!`);
        break;
    default:
        console.log(`Hmmm... ${userEnteredName}... I don't know them.`);
        break;
}

// console.log(answerString)