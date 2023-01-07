let fruit = ["Apple" ,  "Orange" , "Apple" , "Apple" , "Orange" ]
let appleShelf =  window.document.getElementById('apple-shelf')
let orangeShelf = window.document.getElementById("orange-shelf")

function sortFruit(){
    for(let i = 0; i < fruit.length; i ++){
        if(fruit[i] === "Apple"){
            appleShelf.textContent += ` ${fruit[i]}  `
        }else if( fruit[i] ===  "Orange"){
            orangeShelf.textContent += ` ${fruit[i]}  `
        }
    }
}
sortFruit()