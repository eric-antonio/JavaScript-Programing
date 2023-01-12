const welcomeEl = window.document.getElementById("welcome-el")
function greetUser(greeting){
    welcomeEl.textContent = ` ${greeting}  Eric Ivan`
}
greetUser("Welcome back")