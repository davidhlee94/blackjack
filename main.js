//BlackJack Game

//Card Suits and values
const cards = {
    suits: ['Diamonds', 'Hearts', 'Clubs', 'Spades'],
    value: ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'],
    usedCards: [],
    
}


function randomCard(){
    let randomSuit = cards.suits[Math.floor(Math.random() * cards.suits.length)];
    let randomValue = cards.value[Math.floor(Math.random() * cards.value.length)];
    let cardSelected = `${randomValue} of ${randomSuit}`;
    console.log(cardSelected)
}
console.log(randomCard())