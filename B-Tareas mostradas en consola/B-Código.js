//VARIABLE-TAREAS DEFINIDAS
let tp = "100 minutos hacer trabajos prácticos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";


//FUNCIÓN PARA INICIAR LAS TAREAS
console.log("TAREAS");
//CONTADOR DE DÍAS
for (var i = 0; i < 14; i++) {
	if (i == 0) {//EMPEZAMOS LA SEMANA 1
		console.group("semana 1")
	}
console.groupCollapsed("dia " + (i+1)); //HACEMOS LUN,MAR,MIE,JUE,VIE,SAB Y DOM.
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
if (i == 6) {//SI I==6 EMPEZAR LA SIGUIENTE SEMANA.
	console.groupEnd();//TERMINA AL LLEGAR A 7 DIAS EN SI.
	console.groupCollapsed("semana 2")//Y ARRANCAR LA SEMANA 2
}
}

console.groupEnd();//FIN SEMANA 1
console.groupEnd();//FIN SEMANA 2