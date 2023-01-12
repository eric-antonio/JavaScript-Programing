const imgs =[
    "user.png",
    "user.png",
    "user.png"
]

const container = window.document.getElementById("container")

function renderImg(){
    let imgDom =""
    for(let i =0 ;i < imgs.length; i++ ){
        imgDom += `<img src='${imgs[i]}' alt="">`
    }

    container.innerHTML = imgDom
}
renderImg()