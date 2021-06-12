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
// Store message-el paragraph in variable
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
// Create startGame() function
function startGame() {
	sumEl.textContent += sum;
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
	// display message-el print to the HTML
	messageEl.textContent = message;
}
