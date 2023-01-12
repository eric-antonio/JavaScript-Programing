let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

let btnEl = window.document.getElementById('btn')
let pEl =  window.document.getElementById('p-el')
btnEl.addEventListener("click", function(){
    pEl.textContent = ` ${data[0].player} ${data[0].score}`
})
