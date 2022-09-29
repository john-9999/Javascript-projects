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
    const IDBData = getIDBData("readwrite","objeto agregado correctamente");
    IDBData.add(objeto);
    //Esto es para añadir un objeto correctamente.
    //SI TODO ESTÁ BIEN, COMPLETAMOS LA ACCIÓN Y AVISAMOS QUE EL OBJETO SE AGREGÓ CORRECTAMENTE.
}

//Agregar objeto en consola. Ejemplo:
//addObjeto({nombre:"juan manuel"})

//CREAMOS LA FUNCION PARA LEER LOS OBJETOS
const leerObjetos = ()=>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData.openCursor();//El cursor nos dejara leer los objetos.
    //SI TODO ESTÁ BIEN, COMPLETAMOS LA ACCIÓN Y AVISAMOS QUE EL OBJETO SE AGREGÓ CORRECTAMENTE.
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            console.log(cursor.result.value);//Para que nos muestre el resultado de los objetosw que hay dentro de la tabla
            cursor.result.continue();//Para que los objetos de la tabla se lean de forma continua
        } else console.log("todos los objetos fueron leidos");//Al terminar de leer todos los objetos mostraremos este mensaje.
    })
}

//CREAMOS UNA FUNCION PARA MODIFICAR OBJETOS
const modificarObjeto = (key,objeto)=>{
    const IDBData = getIDBData("readwrite","Objeto modificado correctamente");
    IDBData.put(objeto,key);//Agregamos o modificamos un objeto aplicando esto.
    //SI TODO ESTÁ BIEN, COMPLETAMOS LA ACCIÓN Y AVISAMOS QUE EL OBJETO SE MODIFICO CORRECTAMENTE.
}
//Escribir en consola ejemplo: modificarObjeto(2,{nombre:"Lionel Messi"});


//CREAMOS UNA FUNCION PARA ELIMINAR UN OBJETO
const eliminarObjeto = (key)=>{
    const IDBData = getIDBData("readwrite","Objeto eliminado correctamente"); 
    IDBData.delete(key);
    //Creamos el almacen de objetos dónde se aplicaran las acciones.  
    //SI TODO ESTÁ BIEN, COMPLETAMOS LA ACCIÓN Y AVISAMOS QUE EL OBJETO SE ELIMINO CORRECTAMENTE.
    //Indicamos que tipo de transaction queremos aplicarle, readonly o readwrite.
        
}

//Escribir en consola ejemplo:eliminarObjeto(2)

//OBTENEMOS LA DATA SIMPLIFICADA EN UNA FUNCIÓN Y LA APLICAMOS A LAS DEMAS FUNCIONES.
const getIDBData = (mode,msg)=>{
    const db = IDBRequest.result; //Definimos el resultado del objeto
    const IDBtransaction = db.transaction("nombres",mode);//[1]//Indicamos con mode, que tipo de transaction queremos aplicarle, readonly o readwrite.Ya que en algunos es uno u el otro.
    const objectStore = IDBtransaction.objectStore("nombres");//[0]//Creamos el almacen de objetos dónde se aplicaran las acciones.
    IDBtransaction.addEventListener("complete",()=>{
        console.log(msg)
    })
    return objectStore
}