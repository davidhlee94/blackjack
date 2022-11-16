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


//Creating a deck in order
let deck = [];
function creatingDeck() {
    for(let i = 0; i < suit.length; i++){
        for(let j = 0; j < value.length; j++){
        deck.push(value[j] + " of " + suit[i])
        }
    } return(deck)
}
creatingDeck();


//Drawing a random card
function drawRandomCard(deck) {
    const random = Math.floor((Math.random() * deck.length) + 1);
    let card = deck.splice(random, 1)
    return card
}
console.log(drawRandomCard(deck));


// //Start of the game
// function start(){
//     playerHand = [drawRandomCard(deck) + ", " + drawRandomCard(deck)]
//     dealerHand = [drawRandomCard(deck) + ", " + drawRandomCard(deck)]
// }
// start();
// // console.log('Player Hand: ' + playerHand);
// // console.log('Dealer Hand: ' + dealerHand);



// //Giving the card to the player and dealer
// document.getElementById('dealer-hand').innerText = 'Dealer hand: ' + dealerHand;
// document.getElementById('player-hand').innerText = 'Player hand: ' + playerHand;

// //Event listeners
// hit.addEventListener('click', hitButton());
// stay.addEventListener('click', stayButton());
// reset.addEventListener('click', resetButton());