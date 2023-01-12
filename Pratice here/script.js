let largestCountries = ["China", "USA", "INDIA"]

let fruits = ["Apples", "banana's"]

function generateSentence(desc, arr){

    if(desc === "largest countries"){
        console.log(` The 3 largest countries are ${largestCountries}`)
    }else if(desc === "best fruits"){
        console.log(`The 2 best fruits are ${fruits}`)
    }

}

generateSentence("best fruits", largestCountries)