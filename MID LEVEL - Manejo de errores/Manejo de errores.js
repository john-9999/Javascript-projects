const sendButton = document.getElementById('snd-nota');

sendButton.addEventListener("click",()=>{ 
	let resultado,mensaje;	
	try {
		prevRes = parseInt(document.getElementById('nota').value);
	    if(isNaN(prevRes)){ 
	    	throw "Gracioso";
	    }    
       mensaje=definirMensaje(prevRes);
       resultado=verificarAprobación(8,4,prevRes);
	} catch(e){
		resultado = "¿Sos gracioso?";
		mensaje = "Se ha detectado que has intentado hacer una acción indebida"
	}
    abrirModal(resultado[0],mensaje);
})


const definirMensaje = (pr)=>{
	let resultado;
	switch (pr) {
		case 1: resultado = "Te has sacado un 1(DESAPROBADO)";
		break;
		case 2: resultado = "Te has sacado un 2(DESAPROBADO)";
		break;
		case 3: resultado = "Te has sacado un 3(DESAPROBADO)";
		break;
		case 4: resultado = "Te has sacado un 4(DESAPROBADO)";
		break;
		case 5: resultado = "Te has sacado un 5(DESAPROBADO)";
		break;
		case 6: resultado = "Te has sacado un 6(APROBADO)";
		break;
		case 7: resultado = "Te has sacado un 7(APROBADO)";
		break;
		case 8: resultado = "Te has sacado un 8(APROBADO)";
		break;
		case 9: resultado = "Te has sacado un 9(APROBADO)";
		break;
		case 10: resultado = "INSUPERABLE";
		break;
		default: resultado = null;
	}
	return resultado
}


	const verificarAprobación = (nota1,nota2,prevRes)=>{
        promedio = (nota1 + nota2 + prevRes) / 3;
		if(promedio >= 7) {
			return "<span class='green'>APROBADO</span>";  
		}
		return "<span class='red'>DESAPROBADO</span>"; 
	}


	const abrirModal = (res,msg)=>{
	       document.querySelector(".resultado").innerHTML = "RESULTADO: En caso de haber sacado un puntaje total de 12 puntos teniendo en cuenta tus 2 notas estás aprobado(ej:8+4=12). De lo contrario estas desaprobado."
	       document.querySelector(".mensaje").innerHTML = " Tu prueba: " + msg;
	       let modal = document.querySelector(".modal-background");
	       modal.style.display = "flex";
	       modal.style.animation = "aparecer 1s forwards"
		}
