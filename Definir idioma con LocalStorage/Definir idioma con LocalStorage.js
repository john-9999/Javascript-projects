"use strict";
const modal = document.querySelector(".modal-overlay");//selecciono el div modal-overlay

//funcion: si se hace click en cualquiera de los 2 botones se cambiará al idioma especificado.
const definirIdioma =()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
        cerrarModal()
    })
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","es");
        cerrarModal()
    })
}

//función: Cerrar el modal (que tiene la animación) una vez se haya seleccionado el idioma.
const cerrarModal = ()=>{
    modal.style.animation = "desaparecer 1s forwards";//selecciono la animación desaparecer
    setTimeout(()=>modal.style.display = "none",1000)//función para que el modal ya no se muestre desde css y desaparezca en 1seg
}

const idioma = localStorage.getItem("idioma"); //defino el idioma y lo obtengo del localstorage.

//Si el idioma a elegir es nulo, que retorne nuevamente el cartel o función para definir el idioma de la página.
if(idioma === null) definirIdioma()
else{
    console.log(`idioma: ${idioma}`)
    modal.style.display ="none" //si no, cuándo seleccione el idioma, mostrarlo en consola para ver que idioma eligió el usuario.
}