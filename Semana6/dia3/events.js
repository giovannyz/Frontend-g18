
const btnPrueba = document.querySelector('#btn-prueba')
const btnPregunta=document.querySelector("#btn-pregunta")


// atrape el boton

btnPrueba.onclick= function(){
    console.log("click desde el boton")
    
    swal.fire("hola mundo")

}

btnPregunta.onclick = function(){
    swal.fire("Alguna pregunta ","Aca el texto de la pregunta en cuestion")
}