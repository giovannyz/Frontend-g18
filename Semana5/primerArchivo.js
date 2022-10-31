

let numero1 = 20;
let numero2 = 30;
let suma= 0;

suma= numero1+numero2;
resta=numero1-numero2;
/*
console.log("El resultado es :",suma);

console.log("El resultado es :", resta);

console.error("El resultado es :", resta);

console.warn("El resultado es :", resta);

alert("hola g18");*/

const valor1 = prompt("Ingresa el valor 1");

const valor2 = prompt("Ingresa valor 2");

const operacion = prompt("Ingresa una operacion +, -, *, /")


if(operacion === "+"){
    resultadoCalculadora = +valor1 + +valor2;
    console.log("resultado" , resultadoCalculadora);
}else if(operacion ==="-"){
    resultadoCalculadora = +valor1 - +valor2;
    console.log("resultado" , resultadoCalculadora);
}else if(operacion ==="*"){
    resultadoCalculadora = +valor1 * +valor2;
    console.log("resultado" , resultadoCalculadora);
}