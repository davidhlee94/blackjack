//BlackJack Game

//constants
const dealer = document.getElementById('dealer')
const player = document.getElementById('player')
const dealerT = document.getElementById('dealer-total')
const playerT = document.getElementById('player-total')
const hitPlayerBtn = document.getElementById('hit-p-btn')
const stayPlayerBtn = document.getElementById('stay-p-btn')
const hitDealerBtn = document.getElementById('hit-d-btn')
const stayDealerBtn = document.getElementById('stay-d-btn')
const reset = document.getElementById('reset-btn')
const newGame = document.getElementById('newgame-btn')


//Card Suits and rank
let suit = ['♥', '♦', '♠', '♣'];
let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];


//Player
const playerInfo = {
    hand: [],
    total: 0
}

//Dealer
const dealerInfo = {
    hand: [],
    total: 0
}



//Creating a deck in order
function creatingDeck() {
    for(let i = 0; i < suit.length; i++){
        for(let j = 0; j < rank.length; j++){
        deck.push(rank[j] + suit[i])
        }
    } return(deck)
}
creatingDeck();


// //Drawing a random card
function drawRandomCard() {
    let randomIndex = Math.floor((Math.random() * deck.length));
    let card = deck[randomIndex]
    return card
}

//Function of dealing cards to each hand
function deal(){
    dealerInfo.hand = [drawRandomCard(), drawRandomCard()]
    playerInfo.hand = [drawRandomCard(), drawRandomCard()]
    dealer.innerText = 'Dealer Hand: ' + dealerInfo.hand;
    player.innerText = 'Player Hand: ' + playerInfo.hand;

} 
newGame.addEventListener('click', deal);


//Function to calculate player total
function calcPlayerTotal(){
    let playerTotal = 0
    for(i = 0; i < playerInfo.hand.length; i++){
        if (playerInfo.hand[i].includes('J') || playerInfo.hand[i].includes('Q') || playerInfo.hand[i].includes('K')){
            playerTotal += 10;
        } else if (playerInfo.hand[i].includes('A')){
            playerTotal += 11;
        } else {
            playerTotal += parseInt(playerInfo.hand[i])
        }
        playerInfo.total = playerTotal
    } playerT.innerText = 'Player Total: ' + playerInfo.total 
    return playerInfo.total
}
newGame.addEventListener('click', calcPlayerTotal);


//Function to calculate dealer total
function calcDealerTotal(){
    let dealerTotal = 0
    for(i = 0; i < dealerInfo.hand.length; i++){
        if (dealerInfo.hand[i].includes('J') || dealerInfo.hand[i].includes('Q') || dealerInfo.hand[i].includes('K')){
            dealerTotal += 10;
        } else if (dealerInfo.hand[i].includes('A')){
            dealerTotal += 11;
        } else {
            dealerTotal += parseInt(dealerInfo.hand[i])
        }
        dealerInfo.total = dealerTotal
    } 
    dealerT.innerText = 'Dealer Total: ' + dealerInfo.total
    return dealerInfo.total
}
newGame.addEventListener('click', calcDealerTotal);

//Function that hits the player
function hitPlayer(){
    playerInfo.hand.push(drawRandomCard());
    calcPlayerTotal();
    player.innerText = 'Player Hand: ' + playerInfo.hand;
    if(playerInfo.total > 21){
        playerT.innerText = 'Player Total: Player went over 21! Dealer Wins.' 
    }
}

//Function that hits the dealer
function hitDealer(){
    dealerInfo.hand.push(drawRandomCard());
    calcDealerTotal();
    dealer.innerText = 'Dealer Hand: ' + dealerInfo.hand;
    if(dealerInfo.total > 21){
        dealerT.innerText = 'Dealer Total: Dealer went over 21! Player Wins.' 
    }
}

// let dealerTotal = 0;
// //Function of adding dealer total and displaying it
// function dealerTotalF(){

    
//     if(dealerHand[0] === 'K' || dealerHand[0] === 'Q' || dealerHand[0] === 'J'){
//         dealerHand[0] = 10
//     }
//     if(dealerHand[1] === 'K' || dealerHand[1] === 'Q' || dealerHand[1] === 'J'){
//         dealerHand[1] = 10
//     }
//     if(dealerHand[0] === 'A'){
//         dealerHand[0] = 11
//     }
//     if(dealerHand[1] === 'A'){
//         dealerHand[1] = 11
//     }
//     for (let i = 0; i < dealerHand.length; i++){
//         dealerTotal += dealerHand[i]
        
//     }
//     dealerT.innerText = 'Dealer Total: ' + dealerTotal;
//     dealer.innerText = 'Dealer Hand: ' + dealerHand[0] + randomSuitGenerator() + dealerHand[1] + randomSuitGenerator();
// }
// newGame.addEventListener('click', dealerTotalF);




// let playerTotal = 0;
// //Function of adding player total and displaying it
// function playerTotalF(){
    

//     if(playerHand[0] === 'K' || playerHand[0] === 'Q' || playerHand[0] === 'J'){
//         playerHand[0] = 10
//     }
//     if(playerHand[1] === 'K' || playerHand[1] === 'Q' || playerHand[1] === 'J'){
//         playerHand[1] = 10
//     }
//     if(playerHand[0] === 'A'){
//         playerHand[0] = 11
//     }
//     if(playerHand[1] === 'A'){
//         playerHand[1] = 11
//     }
//     for (let i = 0; i < playerHand.length; i++){
//         playerTotal += playerHand[i]
        
//     }
//     playerT.innerText = 'Player Total: ' + playerTotal;
//     player.innerText = 'Player Hand: ' + playerHand[0] + randomSuitGenerator() + playerHand[1] + randomSuitGenerator();
    
        
// }
// newGame.addEventListener('click', playerTotalF);




// function hitPlayer(){
//     playerHand.push(drawRandomCard());
//     console.log(playerHand)
// }
// hitPlayerBtn.addEventListener('click', hitPlayer);

// //Event listeners


// hit.addEventListener('click', hitPlayer());
// stay.addEventListener('click', stayButton());
// reset.addEventListener('click', resetButton());