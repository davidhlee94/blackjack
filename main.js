//BlackJack Game

//constants
const dealer = document.getElementById('dealer')
const player = document.getElementById('player')
const dealerT = document.getElementById('dealer-total')
const playerT = document.getElementById('player-total')
const hit = document.getElementById('hit-btn')
const stay = document.getElementById('stay-btn')
const reset = document.getElementById('reset-btn')
const newGame = document.getElementById('newgame-btn')


//Card Suits and rank
const suit = ['♥', '♦', '♠', '♣']
const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']






//Creating a deck in order
let deck = [];
function creatingDeck() {
    for(let i = 0; i < suit.length; i++){
        for(let j = 0; j < rank.length; j++){
        deck.push(rank[j])
        }
    } return(deck)
}
creatingDeck();


// //Drawing a random card
function drawRandomCard() {
    let randomIndex = Math.floor((Math.random() * deck.length));
    let card = deck[randomIndex]
    return card //returns the random card
}


//Random suit generator
function randomSuitGenerator(){
    let randomSuit = Math.floor(Math.random() * suit.length)
    let rSuit = suit[randomSuit]
    return rSuit
}

let dealerHand = [];
let playerHand = [];

//Function of dealing cards to each hand
function deal(){
    dealerHand = [drawRandomCard(), drawRandomCard()]
    playerHand = [drawRandomCard(), drawRandomCard()]
} 
newGame.addEventListener('click', deal);




//Function of adding dealer total and displaying it
function dealerTotalF(){
    let dealerTotal = 0;
    
    if(dealerHand[0] === 'K' || dealerHand[0] === 'Q' || dealerHand[0] === 'J'){
        dealerHand[0] = 10
    }
    if(dealerHand[1] === 'K' || dealerHand[1] === 'Q' || dealerHand[1] === 'J'){
        dealerHand[1] = 10
    }
    if(dealerHand[0] === 'A'){
        dealerHand[0] = 11
    }
    if(dealerHand[1] === 'A'){
        dealerHand[1] = 11
    }
    for (let i = 0; i < dealerHand.length; i++){
        dealerTotal += dealerHand[i]
        
    }
    dealerT.innerText = 'Dealer Total: ' + dealerTotal;
    dealer.innerText = 'Dealer Hand: ' + dealerHand[0] + randomSuitGenerator() + dealerHand[1] + randomSuitGenerator();
}
newGame.addEventListener('click', dealerTotalF);





//Function of adding player total and displaying it
function playerTotalF(){
    let playerTotal = 0;

    if(playerHand[0] === 'K' || playerHand[0] === 'Q' || playerHand[0] === 'J'){
        playerHand[0] = 10
    }
    if(playerHand[1] === 'K' || playerHand[1] === 'Q' || playerHand[1] === 'J'){
        playerHand[1] = 10
    }
    if(playerHand[0] === 'A'){
        playerHand[0] = 11
    }
    if(playerHand[1] === 'A'){
        playerHand[1] = 11
    }
    for (let i = 0; i < playerHand.length; i++){
        playerTotal += playerHand[i]
        
    }
    playerT.innerText = 'Player Total: ' + playerTotal;
    player.innerText = 'Player Hand: ' + playerHand[0] + randomSuitGenerator() + playerHand[1] + randomSuitGenerator();
    
        
}
newGame.addEventListener('click', playerTotalF);

const hitPlayer = () => {
    const hitCard = drawRandomCard(deck);
    playerHand.push(hitCard);
}





// //Event listeners


// hit.addEventListener('click', hitPlayer());
// stay.addEventListener('click', stayButton());
// reset.addEventListener('click', resetButton());