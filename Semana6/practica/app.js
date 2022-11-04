

function guardar(){
    let persona={
        nombre:"guiova",
        edad:23,
        correo:"guiovany@gmail.com"
    }

    let nombre="juan"
    localStorage.setItem("persona", JSON.stringify(persona) );

}

guardar();

function obtener(){
    let obte=localStorage.getItem("persona")
    console.log(obte)
}

//obtener();
function eliminar(){
    localStorage.removeItem("persona")
}
eliminar()
