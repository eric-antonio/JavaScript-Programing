let firstCard = 10 
let secondCard = 11
let sum =  firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = window.document.getElementById('message-el')
let sumEl =  window.document.getElementById('sum-el')
let cardsEl =  window.document.getElementById('cards-el')


function startGame(){
    sumEl.textContent = `Sum: ${sum}`
    // cardsEl.textContent =  firstCard
    cardsEl.textContent =  `${firstCard} - ${secondCard}`

    if ( sum <= 20 ){
        message = "Do you want to draw a new card?😏"
    }else if(sum === 21){
        message = "You'v got BlackJack! 🥳"
        hasBlackJack =  true
    }else{
        message = "You're out of the Game!🫡"
        isAlive = false
    }
    
    messageEl.textContent =  message
    
    

}