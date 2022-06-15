//CREAMOS UN ARRAY
let alumnos = [{
	nombre: "Juan Manuel Perez",
	email: "juanmanuel@gmail.com",
	materia : "Biología"
},{
	nombre: "Lionel Messi",
	email: "lio@gmail.com",
	materia : "Química"
},{
	nombre: "Jack Harllow",
	email: "jack@gmail.com",
	materia : "Matemática"
},{
	nombre: "Justin Bieber",
	email: "justin@gmail.com",
	materia : "Lengua y literatura"
},{
	nombre: "Ariana Grande",
	email: "ariana@gmail.com",
	materia : "Cálculo 1"
}];

//DEFINIMOS Y MOSTRAMOS UN BOTÓN QUE DIGA "CONFIRMAR".
const boton = document.querySelector(".boton-confirmar");

//DEFINIMOS EL CONTENEDOR

const contenedor = document.querySelector(".grid-container")

//LO MOSTRAMOS EN PANTALLA
for (alumno in alumnos){
	let datos = alumnos[alumno];
	let nombre = datos["nombre"];
	let email = datos["email"];
	let materia = datos ["materia"];	
	let htmlCode = `
	   <div class="grid-item nombre">${nombre}</div>
		<div class="grid-item email">${email}</div>
		<div class="grid-item materia">${materia}</div>
		<div class="grid-item semana">
			<select class="semana-elegida">
				<option value="Semana 1">Semana 1</option>
				<option value="Semana 2">Semana 2</option>
			</select>
		</div>`;
//LO ESCRIBIMOS EN PANTALLA APLICANDO innerHTML y agregandole el htmlCode que escribimos en js.
//	document.querySelector(".grid-container").innerHTML += htmlCode;
contenedor.innerHTML+= htmlCode;
}

//AHORA VAMOS A CONFIGURAR EL <select class= "semana-elegida">, que es para que el profesor elija la semana que quiera que el alumno rinda.
boton.addEventListener("click",()=>{
	let confirmar = confirm("¿Seguro que deseas confirmar los datos de las mesas?");
	
	if(confirmar){
		document.body.removeChild(boton) //SI HACE CLICK EN ACEPTAR, EL BOTÓN "CONFIRMAR" DESAPARECERÁ Y SE CONFIRMAN LOS DATOS.
	    let elementos = document.querySelectorAll(".semana");//SELECCIONO Y DEFINO LA CLASE ".semana".
	    let semanasElegidas = document.querySelectorAll(".semana-elegida");//SELECCIONO Y DEFINO LA CLASE ".semana-elegida".
        for(elemento in elementos){
    	    semana = elementos[elemento]; //PARA QUE LA VARIABLE SEMANA ME MUESTRE LOS ELEMENTOS QUE HAY DENTRO O SEA LA SEMANA QUE SELECCIONÓ EL USUARIO.
    	    semana.innerHTML = semanasElegidas[elemento].value;//ESCRIBIMOS LA SEMANA QUE HA SELECCIONADO EL USUARIO.
        }
    }
})