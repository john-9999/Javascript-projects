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
    leerObjetos();
})
//Mostraremos si la base de datos NO se abrío correctamente.
IDBRequest.addEventListener("error",()=>{
    console.log("Ocurrió un error al abrir la base de datos");
})

//FUNCION PARA AGREGAR NOMBRES EN LA BARRA DE ANADIR
document.getElementById('add').addEventListener("click",()=>{
    let nombre = document.getElementById("nombre").value;
//EN CASO QUE QUEDEN NOMBRE SIN GUARDAR AVISAREMOS PARA QUE SE GUARDEN Y SALGA TODO CORRECTAMENTE. 
    if(nombre.length > 0){
        if(document.querySelector(".posible") != undefined){
            if(confirm("Hay elementos sin guardar: ¿Quieres continuar?")){
                addObjeto({nombre});
                leerObjetos()
            }//si desea continuar lo dejaremos continuar haciendo cambios
        } else{
            addObjeto({nombre});
            leerObjetos()
        }//si confirma entonces se guardaran los objetos.
    }
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
    const fragment = document.createDocumentFragment();//Fragmento creado para enlazar con los elementos HTML y agregarlos aqui dentro.
    //AL AGREGAR UN NOMBRE SE RESETEARA LA BARRA PARA AGREGAR NOMBRES
    document.querySelector(".nombres").innerHTML = "";
    //SI TODO ESTA BIEN, COMPLETAMOS LA ACCIÓN Y AVISAMOS QUE EL OBJETO SE AGREGÓ CORRECTAMENTE.
    cursor.addEventListener("success",()=>{
    if(cursor.result){
        let elemento = nombresHTML(cursor.result.key,cursor.result);//Definimos elemento, que contendrá los objetos que creemos adentro.
        fragment.appendChild(elemento);//Para que nos muestre el resultado de los objetos que hay dentro de la tabla y los elementos que creamos.
        cursor.result.continue();//Para que los objetos de la tabla se lean de forma continua
    } else document.querySelector(".nombres").appendChild(fragment);//Seleccionamos todos los objetos que contendra todo el contenido con nombres.
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


//OBTENEMOS LA DATA PARA APLICAR A LA BASE DE DATOS NoSQL en conjunto con el código que hagamos.
const getIDBData = (mode,msg)=>{
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres",mode);//mode es para aplicar readwrite o readonly dependiendo el caso de analisis o modificación a la base de datos.
    const objectStore = IDBtransaction.objectStore("nombres");//Creamos el almacen de objetos.
    IDBtransaction.addEventListener("complete",()=>{//Si todo carga correctamente, mostramos un mensaje.
        console.log(msg)
    })
    return objectStore;
}


//EMPEZAMOS A TRABAJAR CON LOS ELEMENTOS HTML. CREAMOS UNA FUNCION QUE OBTENGA EN ID Y EL NAME.
//DENTRO DE ESTA FUNCIÓN CREAMOS ELEMENTOS
const nombresHTML = (id,name) => {
    const container = document.createElement("DIV");
    const h2 = document.createElement("h2");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");
//LE DAMOS CLASES A ESTOS ELEMENTOS
    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");
//AGREGAMOS EL CONTENIDO QUE CONTENDRÁ CADA ELEMENTO.
    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";
    
    h2.textContent = name.value.nombre; //Tomara y mostrara en pantalla los objetos de la base de datos NoSQL lo que le agreguemos como objeto dentro de la tabla.
    h2.setAttribute("contenteditable","true");//Podremos editar el contenido de h2 que hemos agregado recientemente
    h2.setAttribute("spellcheck","false");//La barrita roja del corrector no aparecera.

    //AGREGAMOS A CADA ELEMENTO EN SU RESPECTIVO CONTENEDOR.
    options.appendChild(saveButton); //El boton "guardar" estara dentro del DIV class= options
    options.appendChild(deleteButton);//El boton "eliminar" estara dentro del DIV class= options
    container.appendChild(h2);//El h2 estara dentro del DIV class= container
    container.appendChild(options);//El DIV class= options estara dentro del DIV class= container
    
    //HAREMOS QUE GUARDAR SEA POSIBLE, EN EL CASO QUE QUERRAMOS CAMBIAR EL NOMBRE 
    h2.addEventListener("keyup",()=>{
        saveButton.classList.replace("imposible","posible");//Imposible se volvera posible, en el caso que se detecte un keyup(cambio de nombre)
    })

    saveButton.addEventListener("click",()=>{
        if(saveButton.className == "posible"){//si hacemos click en "posible" (guardar)
            modificarObjeto(id,{nombre:h2.textContent});//se modificara el contenido dentro del h2
            saveButton.classList.replace("posible","imposible");//Haremos imposible el cambio que era posible, de esta forma quedara guardado
        }
    })
    //ELIMINAMOS UN OBJETO
    deleteButton.addEventListener("click",()=>{
        eliminarObjeto(id);//eliminamos el objeto con su id
        document.querySelector(".nombres").removeChild(container);//eliminamos el objeto del container
    })

    return container; //Retornamos container ya que es elemento que tenemos que agregar.
}

