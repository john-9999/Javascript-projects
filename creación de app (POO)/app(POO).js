class App {
	constructor(descargas,puntuación,peso){
		this.descargas = descargas;
		this.puntuación = puntuación;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}

	instalar(){

		if(this.instalada == false){
			this.instalada = true;
			alert("app instalada")
		}
	}


	abrir(){

		if(this.iniciada == false  && this.instalada == true){
			this.iniciada = true;
			alert("App abierta");
		}

	}

	cerrar(){

		if(this.iniciada == true  && this.instalada == true){
			this.iniciada = false;
			alert("app cerrada");
		}
	}

	desinstalar(){

		if(this.instalada == true){
			this.instalada = false;
			alert("app desinstalada");
		}
	}

	mostrarInfoApp(){
		return `
		<b>Descargas:</b> ${this.descargas}
		<b>Puntuación:</b>${this.puntuación}
		<b>Peso:</b>${this.peso}`
	}

	
}

const app = new App ("1 M","4.5","1GB");
const app2 = new App ("1 M","2.5","1GB");
const app3 = new App ("1 M","3.5","1GB");
const app4 = new App ("1 M","1.5","1GB");
const app5 = new App ("1 M","3.5","1GB");
const app6 = new App ("1 M","2.5","1GB");
const app7 = new App ("1 M","4.5","1GB");


document.write(`
	<b style='color:#00ffff'>App:</b><br>
	${app.mostrarInfoApp()} <br><br>
	<b style='color:#00ffff'>App2:</b><br>
	${app2.mostrarInfoApp()} <br><br>
	<b style='color:#00ffff'>App3:</b><br>
	${app3.mostrarInfoApp()} <br><br>
	<b style='color:#00ffff'>App4:</b><br>
	${app4.mostrarInfoApp()} <br><br>
	<b style='color:#00ffff'>App5:</b><br>
	${app5.mostrarInfoApp()} <br><br>
	<b style='color:#00ffff'>App6:</b><br>
	${app6.mostrarInfoApp()} <br><br>
	<b style='color:#00ffff'>App7:</b><br>
	${app7.mostrarInfoApp()} <br><br>`);

//app.instalar();
//app.abrir();
//app.cerrar();
//app.desinstalar();




