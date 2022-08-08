const randomNumber = Math.floor(Math.random() * 5);
console.log(randomNumber);
var userString = prompt("Enter your name ");
var endString;

switch(randomNumber) {
    case 0:
        endString = "It will be a productive day "
        break;
    case 1:
        endString = "It will be a fantastic day "
        break;
    case 2:
        endString = "It will be a slow day "
        break;
    case 3:
        endString = "It will be an interesting day "
        break;
    case 4:
        endString = "It will be a thought-provoking day "
        break;
    case 5:
        endString = "It will be a exciting day "
        break;
}

console.log(endString + userString);