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


let setenceEl =  ["Hello " , " my ","name" ," is "," Eric"]
let greetingEl =  window.document.getElementById('greeting-el')


for (let i = 0 ; i < setenceEl.length ;  i++){
    greetingEl.textContent += setenceEl[i]
}