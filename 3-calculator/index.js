let num1 =  8
let num2 = 2
let calculate = 0

window.document.getElementById("num1-el").textContent = num1
window.document.getElementById("num2-el").textContent = num2
let result = window.document.getElementById("sum-el")

function add(){
    calculate =  num1 + num2
    result.textContent = ` Sum : ${calculate}`

}

function subtract(){
    calculate = num1 - num2
    result.textContent = ` Sum : ${calculate}`
}
function divide(){
    calculate = num1 / num2
    result.textContent = ` Sum : ${calculate}`

}
function multiply(){
    calculate =  num1 * num2
    result.textContent =  ` Sum : ${calculate}`
}