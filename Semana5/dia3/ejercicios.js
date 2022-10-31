//crearemos nuestra funcion

function callMenu(){
    let nro_ejercicio= parseint(
        prompt("Ingrese el numero de ejercicio que quiere ejecutar: \r\n 1.suma. \r\n 2.Promedio de examenes \r\n 3.Calcular el area de un rectangulo ")
    );
    if(isNaN(nro_ejercicio)){
        alert("hey!! por favor ingresa valores ")
    }else{
        MenuEjercicios(nro_ejercicio)
    }
}

function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("ingresa el valor 1 a sumar "))
            let valor2 = parseFloat(prompt("Ingresa el valor 2 a sumar "))
            alert(ej1_sumarValores(valor1,valor2))
            break;
        case 2:
            let ex1 = parseFloat(prompt("ingresa nota 1"));
            let ex2 = parseFloat(prompt("Ingresa nota 2"));
            let ex3 = parseFloat(prompt("Ingresa note 3"));
            let ex4 = parseFloat(prompt("Ingresa numero 4"));
            alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4))
            break;
        case 3:
            let base_rect = parseFloat(prompt("Ingrese base"));
            let altura_rect = parseFloat(prompt("ingrese base"));
            alert (ej3_calcularAreaRectangulo(base_rect,altura_rect));      
    }
}

//Funciones de ejercicios
function ej1_sumarValores(a,b){
    if(isNan(a) || isNaN(blur)){
        return"porfavor ingresa valores";
    }else{
    return a+b
}
}

function ej2_calcularPromedio(ex1, ex2,ex3,ex4){

    if(isNaN(ex1)|| isNaN(ex2)|| isNaN(Ex3)|| isNaN(ex4)){
        return "porfavor ingresa las notas"
    }else{
    return(ex1 + ex2 + ex3 + ex4)/4;}

}

function ej3_calcularAreaRectangulo(base_rect,altura_rect){
    if(isNaN(base_rect) || isNaN(altura_rect){
        return"Ingresa datos";
    }else{

    }
}