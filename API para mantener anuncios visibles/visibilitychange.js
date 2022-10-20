"use strict";

addEventListener("visibilitychange",e=>{
    if (e.target.visibilityState == "visible") {
        document.write("el anuncio sigue aqui");
    } else{
        alert("volviste, muy bien")
    }
})