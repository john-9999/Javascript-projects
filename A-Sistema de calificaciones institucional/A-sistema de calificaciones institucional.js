let materias = {
	fÍsica: [89,6,3,"fÍsica"],
	matemática: [84,8,2,"matemática"],
	lógica: [92,8,4,"lógica"],
	química: [96,8,4,"química"],
	cálculo: [91,6,3,"cálculo"],
	programación: [79,7,4,"programación"],
	biología: [75,9,2,"biología"],
	bbdd: [98,9,1,"bbdd"],
	álgebra: [100,10,4,"álgebra"]//0,1,2,3
}
//FUNCIÓN APROBO
const aprobo = ()=>{
	for (materia in materias){
//DEFINIR VARIABLES DENTRO DE MATERIAS (MUESTRA DE CUADRO)
		let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2]
        
        console.log(materias[materia][3]);
//ASISTENCIA
		if (asistencias >= 90) {
			console.log("%c   Asistencias en orden","color:#00ffff");
		} else {
			console.log("%c   Falta de Asistencias","color:#FF0000");
		}
//PROMEDIO
		if (promedio >= 7) {
			console.log("%c   Promedio en orden","color:#00ffff");
		} else {
			console.log("%c   Promedio desaprobado","color:#FF0000");
		}
//TPS
		if (trabajos >= 3) {
			console.log("%c   Trabajos prácticos en Orden","color:#00ffff");
		} else {
			console.log("%c   Faltan trabajos prácticos","color:#FF0000");
		}
	}
}

aprobo()