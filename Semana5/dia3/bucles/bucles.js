// bucle es una estructura que se repite ,
// los bucles son mayormente usados para poder recorrer arrays. objeto.
//leer CADA ELEMENTO DE MANERA INDEPENDIENTE

// iterador => indice
// i++
//i = i+i
//
/*
for(let i=0; i<=10;i++){
    console.log("hola mundo", i)
}

const numeros = [1,2,3,4,5,6,7,8,9,10];
*/
//ARRAYS DE OBJETOS
const laptops=[
    {
        marca : "mac",
        precio: 2500,
        nombre: "android",
},{
        marca:"acer",
        precio:1500,
        nombre:"juan",
},{
        marca:"lenovo",
        precio: 1500,
        nombre: "monito",
}
]

for (o = 0 ; o < laptops.length; o++){
    console.log(laptops[o].precio)
}

console.log(laptops[0].marca);

//------------------
// map
//

const productos =[
    {
        name: "tv",
        price: 1800.
    },
    {
        name:"celular",
        price: 2000,
    },
    {
        name: "monitor",
        price: 1200,                
    }
]

productos.map((productos,index)=>{
    console.log("indice", index)
    console.log("producto", productos.price)
})


//WHILE

let contador = 0;

while(contador <= 5){
    console.log("hola" , contador);
//no se olvid de alterar el contador en cada vuelta
    contador++;
}

//escribir un programa que pueda al usuario una palabra y una muestra en pantalla 10 veces
/*
const imprimirDiesVeces(palabra)=>{
    let contador = 0;
    while(contador < 20){
        console.log(palabra);
        contador++
    }
}*/

imprimirDiesVeces("holaaa chicosss")

//es un bucle es  como una mezcla del map y del for
//recorre arrays

const numeros2=[1,2,3,4,5,6,7,8,9,10]

numeros2.forEach((numeros2,index)=>{

    console.log("que hace", numeros2)
})

const productos2 =[
    {
        name:"guiovany",
        price:10000,
    },
    {
        name:"abraham",
        price: 20000,
    },
    {
        name:"daniel",
        price: 30000,
    },
];

productos2.forEach((productos2)=>{
    console.log(productos2)
})

productos2.forEach((productos2)=>console.log(productos2.price))
