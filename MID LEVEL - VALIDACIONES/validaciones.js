//SELECCIONAMOS LOS ELEMENTOS HTML
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

//CUÁNDO AL BOTON SE LE DE CLICK EJECUTAMOS UN EVENTO Y LA SIGUIENTE FUNCIÓN. 
boton.addEventListener("click",(e)=>{
    e.preventDefault();//si no cumple con las condiciones que pedimos el evento no se ejecutará
    
    let error = validarCampos();
    if(error[0]){//SI EL ERROR ES REAL EJECUTAMOS LO SIGUIENTE. ESTE PARAMETRO NOS DEVOLVERÁ TRUE (EN EL CASO DE QUE EL PRIMER ERROR SEA REAL) O FALSE (EN EL CASO DE QUE EL SEGUNDO ERROR SEA REAL), POR ESO ESCRIBIMOS [0] Y [1]
        resultado.innerHTML= error[1]; //[1] (FALSE)
        resultado.classList.add("red")//añadimos la clase "red" para darle estilo en css.
    }

    else{
        resultado.innerHTML = "Solicitud enviada correctamente"; //[0] TRUE
        resultado.classList.add("green")//añadimos la class "green" para darle estilo en css.
        resultado.classList.remove("red");//removemos el color red del error anterior que haya cometido el usuario y volvemos a poner el verde normal.
    }
});

//DEFINIMOS LA VARIABLE validarCampos

const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 5){//EL NOMBRE NO PUEDE TENER MENOS DE 5 CARACTERES.
        error[0] = true;
        error[1] = "El nombre es inválido."
        return error //RETORNAMOS EL ERROR
    }

    else if (nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre no puede contener más de 40 caracteres."
        return error
    }
//VALIDACIÓN DEL EMAIL
    
    else if (email.value.length < 5||
             email.value.length > 40||
             email.value.indexOf("@")== -1||
             email.value.indexOf(".")==-1){
        error[0] = true;
        error[1] = "El mail es inválido."
        return error;
    }

//VALIDACIÓN DE LA MATERIA

else if(materia.value < 4 || materia.value > 40){
    error[0] = true;
    error[1] ="La materia no existe";
}

//EN CASO DE QUE NO HAYA ERRORES
    error[0] = false;
    return error
}