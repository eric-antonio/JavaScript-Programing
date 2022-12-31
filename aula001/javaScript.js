let count = 0
let countEl = window.document.getElementById("count-el")
let saveEl = window.document.getElementById('save-el')

function add(){
    
    countEl.innerText= count += 1

    /* I can crate a variable and than set the value or just set direct 
     window.document.getElementById('count-el').innerText = count+=1*/

}

function save(){
    
    let sum =  count + ` - `

    saveEl.innerText += sum
   
}
save()