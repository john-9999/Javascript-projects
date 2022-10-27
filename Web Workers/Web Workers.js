"use strict";

const worker = new Worker("worker.js");
document.querySelector(".button").addEventListener("click",()=>ejecutarBucle())
//Mostramos el mensaje que está dentro del ejecutarBucle
worker.addEventListener("message",e=>{
    console.log(e.data)
})

const ejecutarBucle= ()=>{
    worker.postMessage("Hola todo bien?")
}

console.log(worker);