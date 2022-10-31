
let boton=document.getElementById("btn-ejercicio")

boton.addEventListener("click", Ejercicios)


function Ejercicios(){
    let numeroEjercicio=prompt("Seleccione el ejercicio a desarrollar :"+"\n"
    +"1 Sumar"+"\n"+"2 promedio de examenes"+"\n"+"3 Area de rectangulo"+"\n"+"4 Area de triangulo"+"\n"+"5 Area de circunferencia"+"\n"+"6 Sueldo de un trabajador"+"\n"+"7 Convertir de pulgadas a base de metros"+"\n"+"8 Conversion de Soles a Dolares"+"\n"+"9 Determinar años del personal por fecha de nacimiento"+"\n"+"10 Identificar la persona de menor edad"+"\n"+"11 Bono por antiguedad a los empleados de la tienda"+"\n"+"12 Salario del profesor"+"\n"+"13 Calificaciones de alumnos"+"\n"+"14 Fabrica de focos"+"\n"+"15 Votacion proximas elecciones")

    switch(numeroEjercicio){
        case "1":
            let num1=parseFloat(prompt("Ingrese primer numero"))
            let num2=parseFloat(prompt("Ingrese segundo numero"))
            let sumar=num1+num2
            alert(sumar)
            break;
        case "2":
            let exa1=parseFloat(prompt("Examen 1"))
            let exa2=parseFloat(prompt("Examen 2"))
            let exa3=parseFloat(prompt("Examen 3"))
            let exa4=parseFloat(prompt("Examen 4"))
            let promedio=(exa1+exa2+exa3+exa4)/4
            alert(promedio)
            break;
        case "3":
            let base=parseFloat(prompt("Ingrese base del rectangulo"))
            let altura=parseFloat(prompt("Ingrese la altura del rectangulo"))
            let area=base*altura
            alert(area)
            break;
        case "4":
            let baset=parseFloat(prompt("Ingrese base del rectangulo"))
            let alturat=parseFloat(prompt("Ingrese la altura del rectangulo"))
            let areat=(baset*alturat)/2
            alert(areat)
            break;   
        case "5":
            let radio=parseFloat(prompt("Ingrese el radio de la circunferencia"))
            
            let areacir=(3.14)*(radio*2)
            
            alert(areacir)
            break;
        case "6":
            let horas=parseFloat(prompt("Horas trabajadas"))
            let shoras=parseFloat(prompt("Salarios por horas"))
            let SueldoSemanal=horas*shoras
            alert(SueldoSemanal)
            break;
        case "7":
            let pulgadas=parseFloat(prompt("Ingrese la medida en pulgadas"))
            let convertMetros=pulgadas*0.0254
            alert(convertMetros)
            break;
        case "8":
            let soles=parseFloat(prompt("Ingrese la cantidad de dinero en soles"))
            let dolares=soles*3.99
            alert(dolares)
            break;
        case "9":
             let age=parseInt(prompt("En que año naciste?"))
             let fecha=new Date().getFullYear()
             let edad=fecha-age
             alert(edad)
             break;
        case "10":
            let nombre=[];
            let eda=[];
            for(let i=0;i<3;i++){
                nombre[i]=prompt("Ingresar nombre")
                eda[i]=parseInt(prompt("Ingresar edad"))
            }
            if(eda[0]<eda[1] && eda[0]<eda[2]){

                alert("La primera persona con nombre: "+nombre[0]+"\n"+"y edad de: "+eda[0])
            }else if(eda[1]<eda[0] && eda[1]<eda[2]){
                alert("La Segunda persona con nombre: "+nombre[1]+"\n"+"y edad de: "+eda[1])
            }else{
                alert("La Tercera persona con nombre: "+nombre[2]+"\n"+"y edad de: "+eda[2])
            }
             break;
        case "11":
            let ageTienda=parseInt(prompt("Cuantos años lleva laborando en la tienda"))
            let bono;
            switch(ageTienda){
                case 1:
                    bono=100;
                    break;
                case 2:
                    bono=200;
                    break;
                case 3:
                    bono=300;
                    break;
                case 4:
                    bono=400;
                    break;
                case 5:
                    bono=500;
                    break;
                default:
                    bono=1000;
                    break;               
                }
                alert("Usted recibira un bono de: "+bono)
            break;
        case "12":
            alert("Aun no me sale :C")    
            break;
        case "13":
            let nAlumnos=[]
            let aprobados=0
            let desaprobados=0
            for(let i=0;i<=5;i++){
                nAlumnos[i]=parseInt(prompt("Ingrese su calificacion"))
                if(nAlumnos[i]>=13){
                    aprobados+=1
                }else{
                    desaprobados+=1
                }                
            }
            alert("El numero de Aprobados es: "+aprobados+"\n"+"El numero de desaprobados es: "+desaprobados)

            break;
        case "14":
            alert("Aun no me sale :C")
            break;
        case "15":
            let personaEdad=parseFloat(prompt("Ingrese su edad"))
            let nuevo =personaEdad+5
            if(nuevo>=18){
                alert("Puede votar las proximas elecciones")
            }else{
                alert("Aun no puede votar las proximas elecciones")
            }
            
            break;
                                      
        default:
            alert("Ingrese un numero")
            break
    }

}

