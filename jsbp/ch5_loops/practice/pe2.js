var age = prompt("Enter your age ");

let message;

if ( age >= 21) {
    message = "21 or over, you may enter and get shit-canned"
} else if (age >= 19) {
    message = "under 21 but you can still come in.  No getting wasted"
} else {
    message = "sorry, you cannot enter.  You're too young"
}
console.log(message);
