let raqam = document.querySelector(".raqam")
let start = document.querySelector(".start")
let reset = document.querySelector(".reset")

let num = 0
start.onclick = () => {
    raqam.innerHTML = num++;
}


reset.onclick = () => {
    raqam.innerHTML = num--;  
}

