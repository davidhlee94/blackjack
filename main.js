//BlackJack Game

//constants
// const dealer = document.getElementById('dealer')
// const player = document.getElementById('player')
// const hit = document.getElementById('hit-btn')
// const stay = document.getElementById('stay-btn')
// const reset = document.getElementById('reset-btn')

//Card Suits and values

const suit = ['♥', '♦', '♠', '♣']
const value = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King']


let deck = [];
function creatingDeck() {
    for(let i = 0; i < suit.length; i++){
        for(let j = 0; j < value.length; j++){
        deck.push(value[j] + " of " + suit[i])
        }
    } console.log(deck)
}
creatingDeck();

console.log(deck[Math.floor(Math.random() * deck.length)])


// function randomCard(){
//     let randomSuit = suits[Math.floor(Math.random() * suits.length)];
//     let randomValue = value[Math.floor(Math.random() * value.length)];
//     let cardSelected = `${randomValue} of ${randomSuit}`;
//     console.log(cardSelected);
// }
// console.log(randomCard())