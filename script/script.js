let person ={
    name: "Eric",
    age: 23,
    country: "Mozambique"

}

function logData(){
    let personData =`${person.name} is ${person.age} years old and lives in ${person.country}`
    console.log(personData)
}
logData()