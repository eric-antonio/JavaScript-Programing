
let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn =  window.document.getElementById("input-btn")
const ulEl = window.document.getElementById("list-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    // ? Convertendo nosso Array em uma String?
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads()
    console.log(localStorage.getItem("myLeads"))
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

