// This is a game between a player and the computer, where both will make a random selection of either Rock, Paper, or Scissors (alternatively, you could create a version using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and Scissors will beat out Paper. You can use JavaScript to create your own version of this game, applying the logic with an if statement. Since this project is a little more difficult, here are some suggested steps:

// Create an array that contains the variables Rock, Paper, and Scissors.
// Set up a variable that generates a random number 0-2 for the player and then do the same for the computer's selection. The number represents the index values in the array of the 3 items.
// Create a variable to hold a response message to the user. This can show the random results for the player and then also the result for the computer of the matching item from the array.
// Create a condition to handle the player and computer selections. If both are the same, this results in a tie.
// Use conditions to apply the game logic and return the correct results. There are several ways to do this with the condition statements, but you could check which player's index value is bigger and assign the victory accordingly, with the exception of Rock beating Scissors.
// Add a new output message that shows the player selection versus the computer selection and the result of the game.

const itemArray = ["rock", "paper", "scissors"];
const player1Choice = Math.floor(Math.random() * 3);
const player2Choice = Math.floor(Math.random() * 3);
var responseMessage;

console.log(`player #1 chose ${player1Choice} which is ${itemArray[player1Choice]}`);
console.log(`player #2 chose ${player2Choice} which is ${itemArray[player2Choice]}`);

if (player1Choice === player2Choice) {
    responseMessage = "tie, boring."
} else if (player1Choice > player2Choice && player2Choice != 0) {
    responseMessage = `Player 1 wins with ${itemArray[player1Choice]}`
} else if (player2Choice > player1Choice && player1Choice != 0) {
    responseMessage = `Player 2 wins with ${itemArray[player2Choice]}`
} else if (player2Choice === 0 && player1Choice === 2) {
    responseMessage = `Player 2 wins with ${itemArray[player2Choice]}`
} else if (player1Choice === 0 && player2Choice === 2) {
    responseMessage = `Player 1 wins with ${itemArray[player1Choice]}`
} else {
    responseMessage = `Note sure what happened: ${player1Choice}:${itemArray[player1Choice]} and ${player2Choice}:${itemArray[player2Choice]}`
}

console.log(responseMessage)

// if the players choice matches then they tie, no one wins
// if player1choice is larger than player2choice & player2choice is not 0 player1 wins
// if the opposite, then player2 wins