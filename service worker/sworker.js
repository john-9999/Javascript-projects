//sworker.js sera nuestro service worker

//1er etapa: instalamos
self.addEventListener("install",e=>{
    console.log("instalando service worker")
})

//2da etapa: lo activamos
self.addEventListener("activate",()=>{
    console.log("el service worker esta activado")
})

//3er etapa: el service worker intercepta peticiones
self.addEventListener("fetch",()=>{
    console.log("service worker interceptando peticion")
})

//4ta etapa: se recibe un mensaje del navegador
self.addEventListener("message",e=>{
    console.log("Mensaje recibido de el navegador")
    console.log(e.data)//se recibe la data que envia el navegador
    e.source.postMessage("hola brother")//le respondemos al navegador
})