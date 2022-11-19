//BlackJack Game

//constants
const dealer = document.getElementById('dealer')
const player = document.getElementById('player')
const dealerT = document.getElementById('dealer-total')
const playerT = document.getElementById('player-total')
const hitPlayerBtn = document.getElementById('hit-p-btn')
const standPlayerBtn = document.getElementById('stand-p-btn')
const hitDealerBtn = document.getElementById('hit-d-btn')
const standDealerBtn = document.getElementById('stand-d-btn')
const newGame = document.getElementById('newgame-btn')

const modal = document.querySelector('#modal')
const openModal = document.querySelector('.open-button')
const closeModal = document.querySelector('.close-button')

document.getElementById('hit-d-btn').style.visibility = 'hidden'
document.getElementById('stand-d-btn').style.visibility = 'hidden'


openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click', () => {
    modal.close();
})

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
    dealer.innerText = dealerInfo.hand;
    player.innerText = playerInfo.hand;
    didDealerStand = false;
    didPlayerStand = false

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
    } 
    playerT.innerText = playerInfo.total;
    if (playerInfo.total === 21){
        playerT.innerText = 'BlackJack 21! Player wins.'}
    else if (playerInfo.total > 21){
        return playerT.innerText = `Player busted at ${playerInfo.total}.`
    }
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
    } dealerT.innerText = dealerInfo.total;
    if (dealerInfo.total === 21){
        dealerT.innerText = 'BlackJack 21! Dealer wins.'}
    else if (didPlayerStand === true && playerInfo.total === dealerInfo.total){
            return dealerT.innerText = `Dealer and Player tie at ${dealerInfo.total}.`
    } else if (dealerInfo.total > 21){ 
        return `Dealer busted at ${dealerInfo.total}.`}
}
newGame.addEventListener('click', calcDealerTotal);



//Function that hits the player
function hitPlayer(){
    // debugger
    playerInfo.hand.push(drawRandomCard());
    calcPlayerTotal();
    player.innerText = playerInfo.hand;
    if(playerInfo.total > 21){
        return playerT.innerText = `Player hits. Player busted at ${playerInfo.total}! Dealer wins.`
    } else if (playerInfo.total === 21){
        return playerT.innerText = 'BlackJack 21! Player wins.' 
    } else if (playerInfo.total < 21){
        return playerT.innerText = `Player hits. Player total is now ${playerInfo.total}.`
    } 
    return;
}
hitPlayerBtn.addEventListener('click', hitPlayer)



//Function that hits the dealer
function hitDealer(){
    dealerInfo.hand.push(drawRandomCard());
    calcDealerTotal();
    dealer.innerText = dealerInfo.hand;
    if(dealerInfo.total > 21){
        playerT.innerText = `${playerInfo.total}`
        return dealerT.innerText = `Dealer hits. Dealer busted at ${dealerInfo.total}! Player wins.`
    } else if (dealerInfo.total === 21){
        playerT.innerText = `${playerInfo.total}`
        return dealerT.innerText = 'BlackJack 21! Dealer wins.'
    }
}
hitDealerBtn.addEventListener('click', hitDealer)



//Stand Player Function
let didPlayerStand = false;
function standPlayer() {
    didPlayerStand = true;
    if(didDealerStand === true){
        if(playerInfo.total > dealerInfo.total){
            dealerT.innerText = `Dealer stands at ${dealerInfo.total}.`
            return playerT.innerText = `Player stands at ${playerInfo.total}. Player wins.`
        } else if (dealerInfo.total > playerInfo.total){
            playerT.innerText = `Player stands at ${playerInfo.total}.`
            return dealerT.innerText = `Dealer stands at ${dealerInfo.total}. Dealer wins.`
        } else if (dealerInfo.total >= 17){
                standDealer();
                if(dealerInfo.total > playerInfo.total){
                    return dealerT.innerText = `Dealer stands at ${dealerInfo.total}. Dealer wins.`
                } else if (dealerInfo.total < playerInfo.total && dealerInfo.total < 21){
                    return dealerT.innerText = `Dealer stands at ${dealerInfo.total}. Player wins`
                } else if (playerInfo.total === dealerInfo.total){
                    return dealerT.innerText = `Dealer and Player tie at ${dealerInfo.total}.`
                }
        } else if(dealerInfo.total < 17){
                hitDealer();
                if(dealerInfo.total > 21){
                    return dealerT.innerText = `Dealer hits. Dealer busted at ${dealerInfo.total}. Player wins.`
                } else if (dealerInfo.total < 17){
                    hitDealer();
                    if(dealerInfo.total > 21){
                        return dealerT.innerText = `Dealer hits. Dealer busted at ${dealerInfo.total}. Player wins.`
                    } 
                    else if(dealerInfo.total >= 17){
                        standDealer();
                    }
                }
        } else if (playerInfo.total === dealerInfo.total){
                return dealerT.innerText = `Dealer and Player tie at ${dealerInfo.total}.`
            }} 
    else if (dealerInfo.total < 17){
            hitDealer();
            if(dealerInfo.total > 21){
                return dealerT.innerText = `Dealer hits. Dealer busted at ${dealerInfo.total}. Player wins.`
            }
            else if (dealerInfo.total < 17){
                hitDealer();
                if(dealerInfo.total > 21){
                    return dealerT.innerText = `Dealer hits. Dealer busted at ${dealerInfo.total}. Player wins.`
                } else if (dealerInfo.total >= 17){
                    standDealer();
                } else if (playerInfo.total === dealerInfo.total){
                    return dealerT.innerText = `Dealer and Player tie at ${dealerInfo.total}.`
                }
            }
        } 
    else if(dealerInfo.total >= 17){
            if(dealerInfo.total === playerInfo.total){
                return dealerT.innerText = `Dealer and Player tie at ${dealerInfo.total}.`
            } else standDealer();
            return dealerT.innerText = `Dealer stands at ${dealerInfo.total}.`
    } 
    else if (playerInfo.total > dealerInfo.total && playerInfo.total < 21){
            return playerT.innerText = `Player stands at ${playerInfo.total}. Player wins.`
    } 
    else if (dealerInfo.total < playerInfo.total && playerInfo.total < 21){
            return playerT.innerText = `Player stands at ${playerInfo.total}. Dealer wins.`
    } 
    else if (didPlayerStand === true && playerInfo.total === dealerInfo.total){
            return dealerT.innerText = `Dealer and Player tie at ${dealerInfo.total}.`
        }
        
}
standPlayerBtn.addEventListener('click', standPlayer);



//Stand Dealer Function
let didDealerStand = false;
function standDealer() {
    didDealerStand = true;
    if(didPlayerStand === true){
        if(dealerInfo.total > playerInfo.total && dealerInfo.total < 21){
            dealerT.innerText = `Dealer stands at ${dealerInfo.total}. Dealer wins.`
            return playerT.innerText = `Player stands at ${playerInfo.total}.`
        } else if(dealerInfo.total < playerInfo.total ){
            playerT.innerText = `Player stands at ${playerInfo.total}. Player wins.`
            return dealerT.innerText = `Dealer stands at ${dealerInfo.total}.`
            }
    } else {
    return dealerT.innerText = `Dealer stands at ${dealerInfo.total}.` 
}
}
standDealerBtn.addEventListener('click', standDealer)



//Dealer Autopilot Hit
function dealerHitAuto() {
    if (playerInfo.total < 17){
        return dealerT.innerText = `${dealerInfo.total}`
    } else if (playerInfo.total > 21 && dealerInfo.total < 21){
        return dealerT.innerText = `${dealerInfo.total}`
    } 
    else if(dealerInfo.total < 17 && dealerInfo.total > 0){
        hitDealer();
        if(playerInfo.total === 21){
            return dealerInfo.total
        }
    } else if (dealerInfo.total >= 17){
        standDealer();
        if(dealerInfo.total < playerInfo.total && playerInfo.total < 21){
            return dealerT.innerText = `Dealer stands at ${dealerInfo.total}. Player wins.`
        } else if(dealerInfo.total > playerInfo.total && dealerInfo.total < 21){
            return dealerT.innerText = `Dealer stands at ${dealerInfo.total}. Dealer wins.`
        }
    } else if (playerInfo.total > 21){
        return playerT.innerText = `Player busted at ${playerInfo.total}. Dealer wins.`
    }
}
hitPlayerBtn.addEventListener('click', dealerHitAuto);


//Dealer Autopilot Stand
function dealerStandAuto(){
    if(didPlayerStand === true && dealerInfo.total < 17 && dealerInfo.total > 0){
        hitDealer();
    } else if (didPlayerStand === true && dealerInfo.total >= 17){
        standDealer();
    } else if (playerInfo.total === dealerInfo.total){
        return dealerT.innerText = `Dealer and Player tie at ${dealerInfo.total}.`
    }
}
standPlayerBtn.addEventListener('click', dealerStandAuto)
