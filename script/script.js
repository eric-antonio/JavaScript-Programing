// let messages = [
//     "Hey, how's it going?",
//     "I'm great , Thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// let newMessage = "Same Here!"

// messages.push(newMessage)
// for(i = 0 ; i < messages.length ; i++){
//     console.log(`Na posição : ${i} temos : ${messages[i]} `)
// }


// let setenceEl =  ["Hello" , "my","name" ,"is","Eric"]
// let greetingEl =  window.document.getElementById('greeting-el')


// for (let i = 0 ; i < setenceEl.length ;  i++){
//     greetingEl.textContent +=  setenceEl[i] + ""
// }

let player1Time = 102
let player2Time = 107

function getFastestRaceTime(){
    if( player1Time < player2Time){

        return player1Time

    }else if (player2Time < player1Time){

         
        return player2Time
    }else{
        return player1Time
    }
}
let fastestRace = getFastestRaceTime()
console.log(fastestRace)

function getTotalRaceTime(){
    return player1Time + player2Time
}  

let totalRaceTime =   getTotalRaceTime()

console.log(totalRaceTime)