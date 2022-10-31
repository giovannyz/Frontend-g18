// existe de js el documento ... este atributo de js me permite obtener elementos de html....

//obtener elemento segun el nombre de su etiqueta
//tag = etiqueta en ingles
//h1 -div -input

const inputs=document.getElementsByTagName("input")
console.log("input", inputs.value);

//convertir un html collect a array normal
const newInputs = Array.from(inputs);
console.log("newinput", newInputs)

//bucle map
newInputs.map((newInput)=>{
    console.log("nueva forma", newInput.value)
})

//bucle for

for(let i = 0;i < inputs.length;i++){
    console.log("input", inputs[i].value);
}

//-----------------------------
//por id selector
const password = document.getElementById('input_password')

console.log("password", password )

// vamos a acceder al elemento seleccionando el value de mi input

password.style.backgroundColor = "#000";
password.style.color="#fff";

// por clases

const inputsName = document.getElementsByClassName("last_name");

console.log(inputsName)

const inputName = Array.from(inputsName)
console.log(inputName)

inputName.forEach((input)=>{
    console.log(input.value)

})
