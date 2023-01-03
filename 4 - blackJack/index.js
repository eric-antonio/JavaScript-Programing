let firstCard = 10 
let secondCard = 1
let sum =  firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = window.document.getElementById('message-el')

function startGame(){
    if ( sum <= 20 ){
        message = "Do you want to draw a new card?😏"
    }else if(sum === 21){
        message = "You'v got BlackJack! 🥳"
        hasBlackJack =  true
    }else{
        message = "You're out of the Game!🫡"
        isAlive = false
    }
    
     console.log("Win? : "+ hasBlackJack)
     console.log(`In the game? : ` + isAlive)
     messageEl.textContent =  message
    

}