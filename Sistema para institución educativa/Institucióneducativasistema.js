//[1]= materia
//[0]= alumnos

//CREAMOS LAS MATERIAS CON SU INFORMACIÓN ADENTRO.
const materias = {
		física: ["Julio Macagno","pedro","nicolas","nahuel","maria"],
		programación: ["Camilo Hernandez","pedro","juan","nicolas"],
		lógica: ["Ernesto kuvic","pedro","juan","nicolas","nahuel","maria"],
		química: ["Maximiliano Rodriguez","pedro","juan","nicolas","nahuel","maria"]
	}
//OBTENEMOS INFORMACIÓN DE LA MATERIA	
const obtenerInformacion = (materia)=>{
	
	if (materias[materia] !== undefined){
		return [materias[materia],materia,materias];
	} else {
		return materias;
	}
}
//MOSTRAMOS LA INFORMACIÓN DE LA MATERIA (QUIÉN ES PROFESOR Y ALUMNO)
const mostrarInformacion = (materia)=>{
	let informacion = obtenerInformacion(materia);//Obtener información de la materia.

if (informacion !== false) {
	let profesor = informacion[0][0]; // Elemento 0 de materias [materia] (profesor)
	alumnos = informacion[0];        // Elemento 0 (todos los alumnos)
	alumnos.shift();                 //Mostramos los alumnos. Elimina el primer elemento de un array(array de materia) y lo muestra en pantalla
	document.write(`<b style='color:#00ffff'>El profesor de ${informacion[1]} es:</b> ${profesor}<br>
		           <b style='color:#00ffff'> Los alumnos son:</b> ${alumnos}<br><br> `);
}
}
//MATERIAS A LAS QUE SE INSCRIBIÓ EL ALUMNO.

const cantidadDeClases = (alumno)=>{
	let informacion = obtenerInformacion();//Variabole definida para obtener información de la materia.
	let clasesPresentes = [];             //Variable definida para dar presente a la clase que se anotó el alumno..
	let cantidadTotal = 0;               //Variable para guardar la cantidad total de clases que tiene asignadas.

//ENTRAMOS A INFORMACIÓN, SI EL ALUMNO ESTÁ INCLUÍDO, LE SUMAMOS SUS CLASES.	
	for (info in informacion) {
		if (informacion[info].includes(alumno)) {
			cantidadTotal++;
			clasesPresentes.push(" "+ info); //Agrega un elemento al array al final de la lista.
		}
	}
	return `<b style='color: #FF7F00'>${alumno} está en ${cantidadTotal} clases:</b> ${clasesPresentes} <br><br>`;
}

//MOSTRAMOS LA INFORMACIÓN DE LAS MATERIAS QUE QUERRAMOS
mostrarInformacion("física");
mostrarInformacion("química");
mostrarInformacion("programación");
mostrarInformacion("lógica");

//MOSTRAMOS LA CANTIDAD DE CLASES A LAS QUE SE INSCRIBIÓ EL ALUMNO
document.write(cantidadDeClases("pedro"));
document.write(cantidadDeClases("nahuel"));
document.write(cantidadDeClases("nicolas"));
document.write(cantidadDeClases("maria"));