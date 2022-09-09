"use strict"
//OBTENEMOS LA UBICACIÓN ACTUAL DEL USUARIO
const geolocation = navigator.geolocation;//Definimos la variable de geolocalización

//Creamos la función de la posición y la mostramos en consola
const position = (pos)=>{     
    console.log(pos)
}

geolocation.getCurrentPosition(position) //Obtenemos en consola los datos de la geolocalización

//OBTENEMOS MÁS PRECISIÓN DE LA UBICACIÓN EXACTA DÓNDE SE ENCUENTRA.

const err =()=> console.log(e); //SI HAY UN ERROR QUE LO MUESTRE

const options = {
    maximumAge:0, //actualiza la info de la ubicación actual
    timeout:3000, //cada 3 segundos
    enableHightAccuracy: true //propiedad que activa alta precisión en la geolocalización
}

geolocation.getCurrentPosition(position,err,options) //Obtenemos en consola los datos de la geolocalización exacta.