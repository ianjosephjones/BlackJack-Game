// Variables to for cards
let firstCard = 10;
let secondCard = 9;
// total cards drawn
let sum = firstCard + secondCard;
// boolean if the person won or now
let hasBlackjack = false;
let isAlive = true;
// create meassage to inform the person if they won or lost
let message = '';
// Create startGame() function
function startGame() {
	// create if/else statements
	if (sum <= 21) {
		message = 'Do you a want to draw a new card?';
	} else if (sum === 21) {
		message = "Wohoo! You've got Blackjack!";
		hasBlackjack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}
	console.log(message);
}
// print to the HTML
