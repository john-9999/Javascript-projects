//let edad = 25;

//if (edad > 18) console.log("es mayor de edad");
//else console.log("es menor de edad");

//(edad > 18) ? (
//               console.log("es mayor de edad"),
//               console.log("no puede pasar")
//              )
//            : console.log("es menor de edad")





//DESTRUCTURACIÓN DE UN ARRAY

//"use strict";
//el primero que mostramos en consola
//let valor1 = "valor 1";
//let valor2 = "valor 2";
//let valor3 = "valor 3";

//para desestructurar
//let arr = ["valor1","valor2","valor3"];

//console.log(valor1,valor2,valor3)
//console.log(...arr) //desestructurado con los 3 puntos


//CONCATENAR 2 ARRAYS

//"use strict";

//let arr  = ["juan","manuel"];
//let arr2 =["perez","perez 2"];

//concatenamos los arrays
//let arr3 = [...arr,...arr2]; //agregamos todo el array de una vez

//console.log(arr3)




//ARGUMENTO REST (SUMAMOS LO QUE HAY DENTRO DEL ARRAY)
"use strict";

const sumar = (num1,num2)=>{
    console.log(num1+num2)
}

let arr = [6,3];

sumar(...arr) //sumamos lo que hay dentro del array