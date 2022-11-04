
const crear = document.querySelector("#crear-session")
const obtener = document.querySelector("#obtener-session")
const eliminar = document.querySelector("#eliminar-session")

crear.onclick = function(){
    //para poder crear la variable ... invocar a session

    sessionStorage.setItem("variable_1","mi primera variable en session storage")

}
// segundo boton
obtener.onclick = function(){
    const variable = sessionStorage.getItem("variable_1");
    console.log(variable)
}

eliminar.onclick= function(){
    sessionStorage.clear()
}