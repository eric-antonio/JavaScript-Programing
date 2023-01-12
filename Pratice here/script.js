let myCourses = ["Learn Css Animations ", "Ui Design Fundamentals" , "Intro to Clean Code"]

function getCourses(arr){
    for(let i = 0; i < arr.length; i++ ){
        console.log(`* ${arr[i]}`)
    }
}

getCourses(myCourses)