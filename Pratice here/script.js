const welcomeEl = window.document.getElementById("welcome-el")
function greetUser(name){
    welcomeEl.textContent = `Welcome back ${name}`
}
greetUser("eric")