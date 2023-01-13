let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn =  window.document.getElementById("input-btn")
const ulEl = window.document.getElementById("list-el")
const deleteEl = window.document.getElementById("del-el")
const tabBtn = window.document.getElementById('tab-btn')
const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// ? Gets the leads that are storage at the Array Obj and parse it to a string  saving in localStorage
tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active:true , currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
})

// * Renders out the Leads!
function render(leads){
    let  listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += 
        `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteEl.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

//? Function that get the value from the user and converts into a string 
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // ? Saving  Data into local Storage and converting our Array in to a String Type of data 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

