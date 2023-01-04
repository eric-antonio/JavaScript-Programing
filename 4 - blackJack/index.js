let firstCard = getRandomCard()
let secondCard = getRandomCard()

let cards = [ firstCard , secondCard]

let sum =  firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = window.document.getElementById('message-el')
let sumEl =  window.document.getElementById('sum-el')
let cardsEl =  window.document.getElementById('cards-el')

 function getRandomCard(){
    
    let radom  = Math.floor( Math.random() * 13 ) + 1

    if( radom  ===  1){
        radom=   11
    }else if( radom >= 11 && radom <=13){
        radom = 10
    }
    return radom

}

function startGame(){
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
        hasBlackJack =  true
    }else{
        message = "You're out of the Game!"
        isAlive = false
    }
    
    messageEl.textContent =  message
}

function newCard(){
    let card =  getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    
}
