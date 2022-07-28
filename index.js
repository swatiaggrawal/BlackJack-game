
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.getElementById("card-el")
let player={
    name: "User",
    chips: 26
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+ " Rs. "+player.chips

function getRandomCard(){
    let randomNum= Math.floor(Math.random()*13 )+1
    
    if(randomNum > 10 ){
        randomNum=10
    }
    else if(randomNum ===1){
        randomNum=11
    }
    return randomNum
}

function startGame(){
    isAlive = true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards = [ firstCard , secondCard ]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame(){
    sumEl.innerText="Sum: "+sum
    cardEl.textContent="Card: ";
    for(let i=0;i<cards.length;i++)
    {
        cardEl.textContent+= cards[i] + "  ";
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

   messageEl.innerText=message
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
    let newCard = getRandomCard()
    sum+=newCard
    cards.push(newCard)
   
    renderGame()
    }
}
