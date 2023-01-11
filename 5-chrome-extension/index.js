//? null -> how you as a developer signalize emptiness
// ? undefined -> how JavaScript signalizes emptiness

let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn =  window.document.getElementById("input-btn")
const ulEl = window.document.getElementById("list-el")

// * Get the leads from the local Storage

let leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // ? Saving  Data into local Storage and converting our Array in to a String Type of data 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
    console.log("Here!: "+leadsFromLocalStorage)
})

function renderLeads(){
    let  listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        listItems += 
        `
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

