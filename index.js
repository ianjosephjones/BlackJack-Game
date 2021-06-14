// an array of cards
let cards = [];
// total cards drawn
let sum = 0;
// boolean if the person won or now
let hasBlackjack = false;
let isAlive = false;
// create meassage to inform the person if they won or lost
let message = '';
// Store message-el paragraph in variable
let messageEl = document.getElementById('message-el');
// Added querySelector instead of getElelmentById
let sumEl = document.querySelector('#sum-el');
// Store cards-el paragraph in variable
let cardsEl = document.querySelector('#cards-el');

// Create Random Card Function
function getRandomCard() {
	let randomCard = Math.floor(Math.random() * 13 + 1);
	if (randomCard > 10) {
		return 10;
	} else if (randomCard === 1) {
		return 11;
	} else {
		return randomCard;
	}
}
// Create startGame() that renders renderGame()
function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard + secondCard];
	sum = firstCard + secondCard;
	renderGame();
}
// Create startGame() function
function renderGame() {
	cardsEl.textContent = 'Cards: ';
	// Create for loop to render all cards
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + ' ';
	}

	sumEl.textContent = 'Sum: ' + sum;
	// create if/else statements
	if (sum <= 20) {
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

// Add New card function
function newCard() {
	// Add hard code variable number
	let card = getRandomCard();
	sum += card;
	cards.push(card);
	console.log(cards);
	renderGame();
}
