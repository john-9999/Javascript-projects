//1-SOLTAR Y QUE SE MUESTRE UNA IMG EN PANTALLA
const zona = document.querySelector(".zona-arrastre");

//Añadimos el evento dragover que es para cuando arrastramos y soltamos algo
//changeStyle es para cambiar el estilo de... el color
//CUANDO ENTRAMOS SE PONE DE ESTE COLOR #444
zona.addEventListener("dragover",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#444") 
})
///CUANDO SALIMOS SE PONE DE ESTE COLOR #888
zona.addEventListener("dragleave",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
})
//drop: En esta parte haremos que el archivo se lea en la misma página y no en otra pestaña.
zona.addEventListener("drop",e=>{
    e.preventDefault();
    changeStyle(e.srcElement,"#888");
    cargarArchivo(e.dataTransfer.files[0]);
})

//DEFINIMOS LA FUNCION changeStyle
const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

//DEFINIMOS LA FUNCION CargarArchivo
const cargarArchivo = ar=>{
    const reader = new FileReader();//ABRE EL READER
    reader.readAsDataURL(ar);//LEE EL ARCHIVO
    reader.addEventListener("load",e=>{//SI TODO CARGA BIEN...
        let url = URL.createObjectURL(ar); //CREAMOS URL TEMPORAL PARA LA IMG QUE SUBAMOS
        let img = document.createElement("IMG"); //CREAMOS EL ELEMENTO IMG (PODREMOS DARLE PROPIEDAES Y DEMAS EN CSS)
        img.setAttribute("src",url);//LA IMG TENDRA LOS ATRIBUTOS "src" Y url.
        document.querySelector(".resultado").appendChild(img);//FINALMENTE METEMOS LA IMG QUE SUBIMOS COMO SI LO HICIERAMOS EN HTML 
    })
}