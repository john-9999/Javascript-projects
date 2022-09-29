"use strict";
//Abrimos una solicitud de base de datos (NOSQL) con indexDB y le colocamos un nombre.
const IDBRequest = indexedDB.open("juanbase",1);
//Mostraremos si la base de datos está creada o no está creada.
IDBRequest.addEventListener("upgradeneeded",()=>{
    console.log("La base de datos se creó correctamente");
    const db = IDBRequest.result; //creamos la base de datos
    db.createObjectStore("nombres",{ //cremos una tabla de objetos
        autoIncrement:true //Indicamos que esta incrementará de forma automática
    })
})
//Mostraremos si la base de datos se abrío correctamente.
IDBRequest.addEventListener("sucess",()=>{
    console.log("Todo salió correctamente");
})
//Mostraremos si la base de datos NO se abrío correctamente.
IDBRequest.addEventListener("error",()=>{
    console.log("Ocurrió un error al abrir la base de datos");
})

//CREAMOS EL ALMACEN DE OBJETOS.
const addObjeto = objeto =>{
    const db = IDBRequest.result; //Definimos el resultado del objeto
    const IDBtransaction = db.transaction("nombres","readwrite") //Indicamos que tipo de transaction queremos aplicarle, readonly o readwrite.
    const objectStore = IDBtransaction.ObjectStore("nombres");//Creamos el almacen de objetos dónde se aplicaran las acciones.
    objectStore.add(objeto);//Esto es para aádir un objeto correctamente.
    //SI TODO ESTÁ BIEN, COMPLETAMOS LA ACCIÓN Y AVISAMOS QUE EL OBJETO SE AGREGÓ CORRECTAMENTE.
    IDBtransaction.addEventListener("complete",()=>{
        console.log("objeto agregado correctamente")
    })
}

//AL TERMINAR ESTO SE TIENE QUE AGREGAR EL OBJETO QUE QUEREMOS EN CONSOLA:
//EJEMPLO: addObjeto({nombre:"juan"})
