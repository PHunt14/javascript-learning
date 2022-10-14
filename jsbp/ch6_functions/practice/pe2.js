// We are going to create a program that will randomly describe an inputted name.

// Create an array of descriptive words.
// Create a function that contains a prompt asking the user for a name.
// Select a random value from the array using Math.random.
// Output into the console the prompt value and the randomly selected array value.
// Invoke the function.

const descriptiveArray = ["fit", "healthy", "funny", "jarring", "energetic", "lazy"];

function nameFunction () {
    const userName = prompt("What is your name?");
    return userName;

}

const randArrayValue = Math.floor(Math.random() * 6);
console.log(`Hello ${descriptiveArray[randArrayValue]} ${nameFunction()}`);