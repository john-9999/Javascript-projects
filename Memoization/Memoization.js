"use strict"
//La informacion se almacenara en el cache.
let cache=[];
//creamos una funcion memoizer que le pasaremos un parametro a lo ultimo. Y retornamos un función que tenga otro parametro.
//e.toString()= convierte el valor que se retorna a entero.
const memoizer = func =>{
    return e=>{
        const index = e.toString() //valor que se almacenara en el cache.
        if(cache[index] !== undefined){ //si no existe este index...
            cache[index] = func(e);//lo ejecutamos.
        }
        return cache[index];//Y en caso de que ya exista, lo retornamos.
    }
}


const hacerAlgo = num =>{
    const a = 20;
    const b = 12;
    let c = 0;
    for(let i = num-1; i>=0; i--){
        for(let j = i-1; j>=0; j--){
            c+=a*b;
        }
    }
    return c;
}

//---FUNCION SIN MEMOIZER---
console.log("funcion sin memoizer")
const date = new Date();
hacerAlgo(90000);
console.log(new Date() - date)

const date2 = new Date();
hacerAlgo(90000);
console.log(new Date() - date2)

//---FUNCION CON MEMOIZER---
console.log("funcion con memoizer")

const memo = memoizer(hacerAlgo);

const date3 = new Date();
memo(90000);
console.log(new Date() - date3)

const date4 = new Date();
memo(90000);
console.log(new Date() - date4)
