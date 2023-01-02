let firstCard = 10 
let secondCard = 7 
let sum =  firstCard + secondCard 
let hasBlackJack = false
let isAlive = true

if ( sum <= 20 ){
    console.log("Do you want to draw a new card?😏")
}else if(sum === 21){
    console.log("Wohooo! You'v got BlackJack! 🥳")
    hasBlackJack =  true
}else{
    console.log("You're out of the Game!🫡")
    isAlive = false
}
 console.log("Win? : "+ hasBlackJack)
 console.log(`In the game? : ` + isAlive)