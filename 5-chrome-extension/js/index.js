let myLeads = [ "www.awesomeLead.com", "www.epicLead.com"," www.greatLead.com"]
const inputEl = document.getElementById('input-el')
const inputBtn =  window.document.getElementById("input-btn")
const ulEl = window.document.getElementById("list-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i = 0; i < myLeads.length; i++){
    ulEl.textContent += `${myLeads[i]} `
}