

function sumar (numero1 ,numero2){

    const converNumero1 = +numero1;
    const converNumero2 = +numero2;

    const suma = converNumero1 + converNumero2
    
console.log("es el resultado" ,suma)

}

sumar(40,20)

//que cosa es return
//return es la palabra clave la que se encarga de retornarnos un valor

const suma2 =(a,b,c,d)=>{
    return (a+b+c+d+e)

}

console.log("otra forma",suma2(60,30,10,10,10))

// recapitular

//tipo de datos

let nombre = "maria";//string
let age = 34; //number
let talla = 1.76 //number float
let boll = true //booleano
let indefinido ;
let nulo = null;
let simboo = symbol('zcd');
let objetc = {};

console.log(nombre, typeof (nombre))
console.log(age,typeof (age))
console.log(boll,typeof (boll))

// cambiar tipo de datos

console.log(age,typeof toString(age))
console.log(nombre,typeof parseInt(nombre))
console.log(talla,typeof parseFloat(talla))


//tipos de funciones
//funcion expresiva
function suma3 (a,b){
    return a+b
}

//funcion anonima

let restar = function(x,y){
    return x-y
}

// funciones flecha

let multiplicar =()=>{
    return x*y
}

console.log("funcion expresiva",suma3(10,10))
console.log("funcion anonima",restar(10,10))
console.log("funcion flecha",multiplicar(10,10))