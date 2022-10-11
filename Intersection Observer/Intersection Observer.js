"use strict"
//SELECCIONAMOS LAS CAJA3 PARA INTERSEPTARLA
//const caja3 = document.querySelector(".caja3")

//CONFIGURAMOS LO QUE SE MOTRARA EN CONSOLA CUANDO LA CAJA SEA INTERCEPTADA
//const verifyVisibility = (entries) =>{
//    const entry = entries[0];
//    console.log(entry.isIntersecting)
//}

//LE PASAMOS EL CALLBACK Y OPTIONS (IMPORTANTE)
//const observer = new IntersectionObserver(verifyVisibility)

//CON EL PARAMETRO observer.observe se activara la observacion del elemento que indiquemos
//observer.observe(caja3)




//SELECCIONAMOS LAS CAJAS PARA INTERSEPTARLAS
const cajas = document.querySelectorAll(".caja")

//CONFIGURAMOS LO QUE SE MOTRARA EN CONSOLA CUANDO LA CAJA SEA INTERCEPTADA
const verifyVisibility = (entries) =>{
    for(const entry of entries){//Recorremos las entradas de las cajas
        if(entry.isIntersecting) console.log("se está viendo la caja",entry.target.textContent)
    }
}

//LE PASAMOS EL CALLBACK Y OPTIONS (IMPORTANTE)
const observer = new IntersectionObserver(verifyVisibility)

//CON EL PARAMETRO observer.observe se activara la observacion del elemento que indiquemos
for (const caja of cajas) { //Recorremos las cajas y las observamos
    observer.observe(caja);
}