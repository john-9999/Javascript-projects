//vemos si el service worker esta registrado
if(navigator.serviceWorker){
    navigator.serviceWorker.register("sworker.js")
}

//enviamos un mensaje como: el navegador.
navigator.serviceWorker.ready.then(res=> res.active.postMessage("hola hermano como andas?. soy el navegador"))

//avisamos que se ha recibido un mensaje de el service worker, en caso de que nos responda
navigator.serviceWorker.addEventListener("message",e=>{
    console.log("Se ha recibido un mensaje de el service worker")
    console.log(e.data)
})