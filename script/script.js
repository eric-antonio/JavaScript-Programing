let largesCountries = ["Tuvalu" , "India", "USA","Indonesia", "Monaco"]

console.log("The 5 largest countries in the world:")
largesCountries.shift()
largesCountries.unshift("China")

for(let i = 0 ; i < largesCountries.length; i++){
    console.log(`- ${largesCountries[i]}`)
}
console.log("The 5 largest countries in the world:")
largesCountries.pop()
largesCountries.push("Monaco")

for(let i = 0 ; i < largesCountries.length; i++){
    console.log(`- ${largesCountries[i]}`)
}


