"use strict";
//n se convierte a string porque = no me dice la cantidad de caracteres que tiene.
//En caso que tenga menos de 2 caracteres = retorno 0. EJEMPLO: si la hora es 15:07, los minutos se mostraran tal cuál, concatenado con n.
//Si nada de lo anterior pasa, retona n, o sea el número de la hora normalmente.
const addZeros = n =>{
    if(n.toString().length < 2) return "0".concat(n);
    return n;
}

//Aplicamos la función addZeros a los div que creamos en html (hora, minutos,segundos)
const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZeros(time.getHours());
    let minutos = addZeros(time.getMinutes());
    let segundos = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;
}

//Llamamos a la función actualizar hora
actualizarHora()

//Le decimos que la hora se actualce cada 1 segundo
setInterval(actualizarHora,1000)




//ver en consola (echo de forma manual)

const fecha = new Date(2022,8,31);

console.log(fecha.getYear()+1900+" (Año actual) ")
console.log("mes: "+fecha.getMonth())
console.log("dia: "+fecha.getDay())

const tiempo = new Date();

console.log(tiempo.getHours() + "(Hora)")
console.log(tiempo.getMinutes() + "(Minutos)")
console.log(tiempo.getSeconds() + "(Segundos)")
