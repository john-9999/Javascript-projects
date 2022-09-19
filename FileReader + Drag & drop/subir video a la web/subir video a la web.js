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
    zona.style.border = "4px solid #888"
})

//DEFINIMOS LA FUNCION changeStyle
const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}

//DEFINIMOS LA FUNCION CargarArchivo
const cargarArchivo = ar=>{
    const reader = new FileReader();//ABRE EL READER
    reader.readAsArrayBuffer(ar);//LEE EL ARCHIVO
    reader.addEventListener("progress",e=>{//SI TODO CARGA BIEN...
        let carga = Math.round(e.loaded / ar.size * 100);
        zona.textContent=`${carga}%`;
        document.querySelector("barra-de-carga").style.padding =  "75px 20px";
        document.querySelector("barra-de-carga").style.width = `${carga/3.6}%`
        
    })
    reader.addEventListener("loadend",e=>{//CUANDO TERMINE LA CARGA...
        changeStyle(zona,"#2e7");
        zona.style.borderStyle="solid";
        document.querySelector(".barra-de-carga").style.background="#27e";
        setTimeout(()=>{
            zona.style.color = "#00ffff";
            zona.style.animation = "aparecer 1s forwards";
            zona.textContent="¡carga completa!"
        },0.5)
    })
    reader.addEventListener("load",e=>{//SI TODO CARGA BIEN...
        let video = new Blob([new Uint8Array(e.currentTarget.result)],{type:'video/mp4'})
        let url = URL.createObjectURL(video); //CREAMOS URL TEMPORAL PARA EL VIDEO QUE SUBAMOS
        let img = document.createElement("VIDEO"); //CREAMOS EL ELEMENTO DE LA IMG DEL VIDEO (PODREMOS DARLE PROPIEDAES Y DEMAS EN CSS)
        img.setAttribute("src",url);//LA IMG TENDRA LOS ATRIBUTOS "src" Y url.
        document.querySelector(".resultado").appendChild(img);//FINALMENTE METEMOS LA IMG QUE SUBIMOS COMO SI LO HICIERAMOS EN HTML 
        img.play()//CON ESTO LE PODREMOS DAR PLAY AL VIDEO
    })
}