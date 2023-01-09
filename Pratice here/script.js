let container = window.document.getElementById("box")
container.innerHTML = "<button onclick=buy()> Add to card </button>" 

function buy(){
   container.innerHTML += "<p>Thank you for you'r order! </p>"
}