
let button = document.querySelector(".switch");
let circle = document.querySelector(".circle");

let title = document.querySelector("h1")
let container = document.querySelector(".container");

let mode = "light"

function ligthMode (){
    button.className = "switch";
    container.className="container";
    circle.className="circle";
    title.textContent="ligth mode";
}

function darkMode (){
    button.className="darkButton";
    container.className="darkContainer";
    circle.className="darkCircle";
    title.textContent="Dark Mode"
}

circle.addEventListener("click",()=>{
    if(mode == "light"){
        darkMode();
        mode="dark"
    }else{
        ligthMode()
        mode="light"
    }
})