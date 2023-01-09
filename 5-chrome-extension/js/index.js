let myLeads = []
const inputEl =  window.document.getElementById("input-el") 
const inputBtn =  window.document.getElementById("input-btn")
inputBtn.addEventListener('click',function(){
    myLeads.push("www.awesomeLead.com")
})

console.log(myLeads)