"use strict"
//TRABAJAMOS SOBRE PUBLICACIONES EN HTML ASI QUE LO SELECCIONAMOS E INICIAMOS
const publicaciones = document.querySelector(".publicaciones");

//CONTADOR DE PUBLICACIONES
let contador = 0;

const createPublicationCode = (name,content) =>{
    //CREAMOS LOS ELEMENTOS
    const container = document.createElement("DIV");
    const comentarios = document.createElement("DIV");
    const nombre = document.createElement("H3");
    const contenido = document.createElement("p");
    const btnComentario = document.createElement("INPUT");
    const btnEnviar = document.createElement("INPUT");

    //CREAMOS LAS CLASES DE ESOS ELEMENTOS
    container.classList.add("publicacion");
    comentarios.classList.add("comentarios");
    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");
    //ASIGNAMOS CADA ELEMENTO A SU CONTENEDOR
    btnComentario.setAttribute("placeholder","Introduce un comentario");
    nombre.textContent = name;
    contenido.textContent = content;

    btnEnviar.type = "submit";

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(nombre);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container
}

//PRUEBA CON 1 PUBLICACION PARA QUE CARGUE
//DEFINIMOS EL CONTENIDO
//let content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum quam quisquam impedit accusamus rerum exercitationem asperiores, deleniti facere sit, nulla harum, aliquam tenetur veritatis perspiciatis possimus in. Iusto, omnis!`;

//LLAMAMOS A LA FUNCION
//publicaciones.appendChild(createPublicationCode("Lio Messi"))


//AHORA SI CARGAMOS DE VERDAD TODAS LAS PUBLICACIONES (TRABAJAMOS CON SOLICITUDES FETCH)
const cargarPublicaciones = async num=>{
    const request = await fetch ("contenido json.txt");//solicitamos y definimos en donde vamos a solicitarla
    const content = await request.json();//convertimos a json la informacion que solicitamos.
    const arr = content.content;//para que se termine de ejecutar lo demas
    const documentFragment = document.createDocumentFragment()//Creamos un fragmento ya que mostraremos contenido dentro del bucle
//CREAMOS UN BUCLE QUE SE EJECUTARA LA CANTIDAD DE VECES QUE LE INDIQUEMOS
for(let i = 0; i < num; i++){
    //A createPublicationCode() le pasaremos el nombre/contenido y el contador para que lo muestre
    //Esto sera el contenedor con la publicacion basicamente
    const newPublicacion = createPublicationCode(arr[contador].nombre,arr[contador].contenido)
    documentFragment.appendChild(newPublicacion);//Este contenedor que contiene las publicaciones ira dentro del fragmento que creamos
    contador++;
}
publicaciones.appendChild(documentFragment);//el fragmento formara parte del contenedor publicaciones
}

cargarPublicaciones(5)