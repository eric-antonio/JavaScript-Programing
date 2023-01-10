//* Tinhamos uma variavel do tipo String !
let myLeads = `["www.awesomeLeads.com"]`

//* Na linha a baixo convertemos para um array!
myLeads = JSON.parse(myLeads)

//* Depois que a variavel foi convertida já é posssivel adicionar novamente as funções de um Array !
myLeads.push("www.epicLead.com")

console.log(myLeads)

const inputEl = document.getElementById('input-el')
const inputBtn =  window.document.getElementById("input-btn")
const ulEl = window.document.getElementById("list-el")

localStorage.setItem("site",  "www.google.com")
console.log(localStorage.getItem("site"))
localStorage.clear()

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''

    renderLeads()
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

