"use strict";
//SI USAMOS ()=> tomará como parametro el this.nombre con el nombre definido
this.nombre = "juan";

const saludar=()=>{
    console.log(`Hola ${this.nombre}`)
}

//SI USAMOS function() tomará como parametro el objeto
const objeto = {
    nombre: "perez",
    saludar: saludar
}

objeto.saludar()