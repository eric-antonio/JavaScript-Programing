let myLeads = []
const tabs =[
    {
        url:'www.linkedin.com/in/eric-antónio'
    }
]
const inputEl = document.getElementById('input-el')
const inputBtn =  window.document.getElementById("input-btn")
const ulEl = window.document.getElementById("list-el")
let deleteEl = window.document.getElementById("del-el")
let tabBtn = window.document.getElementById('tab-btn')
// * Get the leads from the local Storage in line 21
const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("dblclick", function(){
    console.log("I'm here!")
})



// * Renders out  in a List the Leads!
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

