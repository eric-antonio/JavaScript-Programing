let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn =  window.document.getElementById("input-btn")
const ulEl = window.document.getElementById("list-el")
let deleteEl = window.document.getElementById("del-el")

// * Get the leads from the local Storage in line 21
const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteEl.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
})

//? Function that get the value from the user and converts into a string 
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // ? Saving  Data into local Storage and converting our Array in to a String Type of data 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()


})

