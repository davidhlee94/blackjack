//BlackJack Game

//constants
const dealer = document.getElementById('dealer')
const player = document.getElementById('player')
const hit = document.getElementById('hit-btn')
const stay = document.getElementById('stay-btn')
const reset = documnent.getElementById('reset-btn')

//Card Suits and values

const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades']
const value = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']


function randomCard(){
    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    let randomValue = value[Math.floor(Math.random() * value.length)];
    let cardSelected = `${randomValue} of ${randomSuit}`;
    console.log(cardSelected);
}
console.log(randomCard())