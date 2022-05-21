// ESPECIFICAMOS EL LARGO Y ANCHO DE LA PANTALLA DE LA PC
let alto  = window.screen.availHeight;
let ancho = window.screen.availWidth; 

comprar = confirm(`El alto es de: ${alto}, el ancho es de: ${ancho}. Presiona aceptar para comprar`);

if(comprar == true){
	alert("Compra realizada exitosamente");
}

else{
	alert("Compra cancelada");
}