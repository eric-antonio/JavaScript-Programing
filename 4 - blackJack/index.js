let player = {
    name :  "Éric",
    chips : 2000
}
let cards = []
let sum =  0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = window.document.getElementById('message-el')
let sumEl =  window.document.getElementById('sum-el')
let cardsEl =  window.document.getElementById('cards-el')
let congratsEl = window.document.getElementById("congrats-el")


let playerEl = window.document.getElementById('player-el')
playerEl.textContent = `${player.name} :$${player.chips}`

 function getRandomCard(){
    
    let radom  = Math.floor( Math.random() * 13 ) + 1
    if(radom > 10 ){
        return 10
    }else if( radom === 1){
        return 11
    }else{
        return radom
    }

}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards= [ firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame(){
    sumEl.textContent = `Sum: ${sum}`
   
    cardsEl.textContent =  `Cards:`
    for(let i = 0 ; i < cards.length ;  i++){
        cardsEl.textContent += cards[i] + "-"
    }

    if ( sum <= 20 ){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "You'v got BlackJack!"
        congratsEl.textContent ="🎉🎉🎉🎉"
        hasBlackJack =  true
    }else{
        message = "You're out of the Game!"
        isAlive = false
    }
    
    messageEl.textContent =  message
}

function newCard(){

    if(isAlive && hasBlackJack === false){
        let card =  getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}
