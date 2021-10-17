//                        BlackJack card game
//  1.1 Declare few variable:
    //    firstCard - keep value of first random cards
    //    secondCard - keep value of second random cards
    //    sum - keep value two cards.
    //    hasBlackJack - boolean variable - value change to TRUE, when player win the game
    //    isAlive - boolean - when player is still the game
//  2.1 Create game logic
//        function randomCards() - values form 2 to 11.
//        function startGame() -


//1.1 variable

let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ".";

//Objects

let player = {
   name: "Peter",
   chips: 145
}

//Arrays
let cards = [];

// HTML catchers
let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');//First method let sumEl = document.getElementById('sum-el'); Query selector. # when selector and dot "." if class and in HTML change from ID to class
let cardEl = document.getElementById('card-el');
let playerEl = document.getElementById("player-el");

// Click action
document.getElementById('startGame-el').addEventListener('click', gameStart);//when click Start Game
document.getElementById('newCard-el').addEventListener('click', newCard);//When click new card button


//functions
function getRandomCard(){
  card = Math.floor(Math.random() * 13) + 1;
  if(card === 1){
    return 1;
  }else if(card === 11 || card === 12 || card === 13){return 10;}
  else return card;
}

function gameStart() {
  playerEl.textContent = player.name + ": $" + player.chips;
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (i=0; i<cards.length; i++){
    cardEl.textContent += cards[i] + " ";
  }

    if (sum <= 20) {
      message = "Do you want to draw new card? ";
      sumEl.textContent ="Sum:" + sum;
    }else if (sum === 21) {
      message = "Wohoo!! You've got BlackJack! ";
      sumEl.textContent ="Sum:" + sum;
      hasBlackJack = true;
    }else {
      message = "You're out of game";
      sumEl.textContent ="Sum:" + sum;
      isAlive = false;
    }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false){

    let nextCard = getRandomCard();
    sum += nextCard;
    cards.push(nextCard);
    console.log("Drawing new card from the deck!");
    renderGame();

  }else return message  =  "Game Over";
}

console.log(cards);
