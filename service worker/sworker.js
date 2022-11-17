let version = "version 4"
//sworker.js sera nuestro service worker

//1er etapa: instalamos
self.addEventListener("install",e=>{
    console.log("instalando service worker")
    //agregamos un recurso
    caches.open(version).then(cache=>{
        cache.add("service worker.html")
.then(res=>{
    console.log("informacion cacheada");
})//si hay un error que lo muestre en consola
.catch(e=>{
    console.log(e);
})
    })
})

//2da etapa: lo activamos
//2da b etapa: eliminamos el cache antiguo
self.addEventListener("activate",()=>{
    //console.log("el service worker esta activado")
    caches.keys().then(key=>{
        return Promise.all(
            key.map(cache=>{
                if(cache !== version){//si lo que hay en el cache es distinto de version nueva eliminalo
                    console.log("cache antiguo eliminado")
                    return caches.delete(cache)
                }
            })
        )
    })
})

//3er etapa: el service worker intercepta peticiones
//3er etapa b: queremos mostrar el sitio web offline
//Decimos que en caso que se intercepte una peticion, y tenemos informacion que queremos ver guardada en cache, respondemos positivamente o negativamente si no hay info guardada en cache y no hay internet. Esto funciona ya que el service worker esta activado en el navegador del usuario(3er etapa b)
self.addEventListener("fetch",e=>{
    //console.log("service worker interceptando peticion")
    
        const respuestaEnCache =  caches.match(e.request);//si la info requerida esta almacenada en cache mostraremos algo positivo y si no mostramos algo negativo
        if (respuestaEnCache == true) return respuestaEnCache;
        return e.request;
    ;
});

//4ta etapa: se recibe un mensaje del navegador
//self.addEventListener("message",e=>{
//    console.log("Mensaje recibido de el navegador")
//    console.log(e.data)//se recibe la data que envia el navegador
//    e.source.postMessage("hola brother")//le respondemos al navegador
//})