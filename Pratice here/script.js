const player = "Eric"
const opponent = "Nick"
const  game = "AmazingFighter"
let points = 0
let hasWon = false

points += 100
hasWon =  true

if(hasWon){
    console.log(`${player} got ${points} points and won the ${game} Game!`)
}else{
    console.log(`The Winner is ${opponent}! and ${player} lost the game.`)
}