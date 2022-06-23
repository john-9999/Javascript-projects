const sendButton = document.getElementById('snd-nota');

//SI EL USUARIO HACE UNA ACCIÓN INDEBIDA EN LA WEB EJECUTAMOS LO SIGUIENTE LANZANDO ERRORES
sendButton.addEventListener("click",()=>{ //SI HACE CLICK EN EL BOTON INTENTANDO ENVIAR UN TEXTO EN VEZ DE UN NÚMERO EJECUTAMOS LO SIGUIENTE
	let resultado,mensaje;
	
	try{
		prevRes = parseInt(document.getElementById('nota').value);//parseInt nos convierte a entero el dato
	    if(isNaN(prevRes)){ //SI EL RESULTADO ES NAN (IS NOT A NUMBER) LE LANZAMOS UN ERROR
	    	throw "Gracioso";
	    }    
        resultado = verificarAprobación(8,4,mensaje);
        mensaje = definirMensaje(resultado[1]);
	} catch(e){
		resultado = "¿Sos gracioso?";
		mensaje = "Se ha detectado que has intentado hacer una acción indebida"
	}
    abrirModal(resultado[0],mensaje);
})


//DEFINO EL MENSAJE
const definirMensaje = (pr)=>{
	let resultado;
	switch (pr) {
		case 1: resultado = "Te has sacado un 1";
		break;
		case 2: resultado = "Te has sacado un 2";
		break;
		case 3: resultado = "Te has sacado un 3";
		break;
		case 4: resultado = "Te has sacado un 4";
		break;
		case 5: resultado = "Te has sacado un 5";
		break;
		case 6: resultado = "Te has sacado un 6";
		break;
		case 7: resultado = "Te has sacado un 7";
		break;
		case 8: resultado = "Te has sacado un 8";
		break;
		case 9: resultado = "Te has sacado un 9";
		break;
		case 10: resultado = "Te has sacado un 10";
		break;
		default: resultado = null;
	}
	return resultado
}

//VERIFICO LA APROBACIÓN
	const verificarAprobación = (nota1,nota2,prevRes)=>{
        promedio = (nota1 + nota2 + prevRes) / 3;
		if(promedio >= 7){
			return ["<span class='green'>APROBADO</span>",Math.round(promedio)];  
		}
		return ["<span class='red'>DESAPROBADO</span>",Math.round(promedio)]; 
	}

//ESCRIBIMOS LOS RESULTADOS EN PANTALLA PARA QUE LO VEA EL USUARIO Y UNA ANIMACIÓN VINCULADA CON CSS
		const abrirModal = (res,msg)=>{
			document.querySelector(".resultado").innerHTML = res;
			document.querySelector(".mensaje").innerHTML = "Tu prueba" + msg;
			let modal = document.querySelector(".modal-background");
			modal.style.display = "flex";
			modal.style.animation = "aparecer 1s forwards"
		}
