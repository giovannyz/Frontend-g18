


const input= document.querySelectorAll("input")

const contenedor = document.querySelector("#container-list")

const ul = document.createElement("ul")

input.map((element)=>{
    const li = document.createElement("li");

    const elementText= document.createTextNode(element.value);

    li.appendChild(elementText)

    ul.appendChild(ul)
})