"use strict"
//cache.add (agrega recursos al cache)
//1-ABRIMOS UN NUEVO ALMACENAMIENTO DE CACHE QUE SE LLAMARA "archivos-estaticos".
//2-ALMACENAMOS Y AGREGAMOS CON cache.add UN RECURSO QUE SERA EL "caché.html" y "Memoization.html" que tienen que estar dentro de la misma carpeta
//caches.open("archivos-estaticos").then(cache => {
//    cache.add("caché.html")
//    cache.add("Memoization.html")
//})

//cache.addAll (agrega varios recursos dentro de un array, al cache)
//Todo debe estar dentro de la misma carpeta para que pueda ser almacenados de forma correcta
//caches.open("archivos-estaticos-2").then(cache => {
//    cache.addAll(["index de prueba/indexp.html","index de prueba/estilop.css","index de prueba/codigop.js"])
//})

//cache.match (nos devuelve en consola el resultado de el archivo, que se encuentra dentro del cache, que le estamos pidiendo)
//cache.matchAll (nos devuelve en consola lo que le pedimos dentro del cache, pero si hay 1 o mas archivos con el mismo nombre nos devolvera todos esos archivos)
//caches.open("archivos-estaticos").then(cache => {
//    cache.match("Memoization.html").then(res=>{
//        console.log(res)
//    })
//})

//cache.delete (elimina un recurso)
//caches.open("archivos-estaticos").then(cache => {
//    cache.delete("Memoization.html")//eliminamos el recurso que guardamos en cache, "Memoization.html"
//})

//cache.keys (devuelve toda la data, osea los archivos o recursos almacenados en cache)
caches.open("archivos-estaticos").then(cache => {
    cache.keys().then(res=>{
        console.log(res)
    })
})
