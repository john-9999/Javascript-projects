let materias = {
		fÍsica: ["Profe Alexander","pedro","nicolas","valentina","agustin"],
		programación: ["Profe Macagno","pedro","juan","nicolas"],
		lógica: ["Profe Hernandez","pedro","juan","nicolas","valentina","agustin"],
		química: ["Profe Garcia","pedro","juan","nicolas","valentina","agustin"]
	}


const inscribir = (alumno,materia)=>{
	
	personas = materias[materia]; //esto significa que las personas están dentro del array materias[materia].

	if (personas.length >= 21) {//si hay más de 21 personas dentro del array...
		document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
	} 

	else {
		personas.push(alumno);//Agrega un elemento al array al final de la lista.

		if (materia == "fÍsica") { //SI ESCRIBE FÍSICA...
			materias = {
		        fÍsica: personas, //¡se añade a la persona aquí!
		        programación: materias['programación'],
		        lógica: materias['lógica'],
		        química:materias['química']
	        }
		}
		
		else if (materia == "programación") {//SI ESCRIBE PROGRAMACIÓN...
			materias = {
		        fÍsica: materias['fÍsica'],
		        programación: personas, //¡se añade a la persona aquí!
		        lógica: materias['lógica'],
		        química:materias['química']
	        }
		}

		else if (materia == "lógica") {//SI ESCRIBE LÓGICA...
			materias = {
		        fÍsica: materias['fÍsica'],
		        programación: materia['programación'],
		        lógica: personas, //¡se añade a la persona aquí!
		        química:materias['química']
	        }
		}

		else if (materia == "química") {//SI ESCRIBE QUÍMICA...
			materias = {
		        fÍsica: materias['fÍsica'],
		        programación: materia['programación'],
		        lógica: materias['lógica'],
		        química: personas //¡se añade a la persona aquí!
	        }
		}
		document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br>`);
	}
}


//Inscribimos a "persona" en "materia"
inscribir("nicolas","programación");

