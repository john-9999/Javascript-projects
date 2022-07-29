//Definimos la clase Personas
class Persona{
	constructor(nombre,instagram){
		this.nombre = nombre;
		this.instagram = instagram
	}
}

//Definimos la data de las personas para poder mostrarla
const data = [
["Lionel Messi","@liomessi"],
["Leandro Paredes"],
["Maradona","@Maradona10"],
["Cristiano Ronaldo","@cristiano"],
["Riquelme", "@RIQUELMISTA10"]
];

//Definimos la constante personas para poder mostrarla
const personas =[];

for (let i = 0; i < data.length; i++){
	personas[i] = new Persona(data[i][0],data[i][1]);//posición [i][0] = Nombre, posición [i][1] = Instagram
}

//En caso de que la persona no se encuente:
const obtenerPersona = (id) =>{
	return new Promise((resolve,reject)=>{
		if (personas[id] == undefined){
			reject("No se ha encontrado a la persona")
		}

		else{
			resolve(personas[id])
		}
	})
}

//En caso de que el instagram no se encuentre:
const obtenerInstagram = (id) =>{
	return new Promise((resolve,reject)=>{
		if(personas[id].instagram == undefined){
			reject("No se ha encontrado el instagram")
		}

		else{
			resolve(personas[id].instagram)
		}
	})
}

//Ahora escribimos que persona o posición queremos buscar y obtener sus datos:
let id= 4;                                      //nos mostrará el id que le indiquemos según su posición

obtenerPersona(id).then((persona)=>{
	console.log(persona.nombre);              //obtenemos el nombre
	return obtenerInstagram(id);             //obtenemos el instagram                          //obtenemos el instagram
	}).then((instagram)=>{                  //si se encuentra el instagram lo mostramos
		console.log(instagram);
	}).catch((e)=>{                       //y si no se encuentra mostramos el error
		console.log(e)
	})




//ECHO CON CALLBACKS...

//Definimos la clase Personas
//class Persona{
//	constructor(nombre,instagram){
//		this.nombre = nombre;
//		this.instagram = instagram
//	}
//}

//Definimos la data de las personas para poder mostrarla
//const data = [
//["Lionel Messi","@liomessi"],
//["Leandro Paredes","@leoparedes10"],
//["Maradona","@Maradona10"],
//["Cristiano Ronaldo","@cristiano"],
//];

//Definimos la constante personas para poder mostrarla
//const personas =[];

//for (let i = 0; i < data.length; i++){
//	personas[i] = new Persona(data[i][0],data[i][1]);//posición [i][0] = Nombre, posición [i][1] = Instagram
//}

//En caso de que la persona no se encuente:
//const obtenerPersona = (id,callback)=>{
//	if(personas[id] == undefined){
//		callback("No se ha encontrado la persona");
//	}
//
//	else{
//		callback(null,personas[id],id);
//	}
//}

//En caso de que el instagram no se encuentre:
//const obtenerInstagram = (id,callback) =>{
//	if(personas[id].instagram == undefined){
//		callback("No se ha encontrado el instagram");
//	}

//	else{
//		callback(null,personas[id].instagram);
//	}
//}

//Ahora escribimos que persona o posición queremos buscar y obtener sus datos:
//obtenerPersona(2,(error,persona,id)=>{
//	
//	if(error){
//		console.log(error)
//	} else{
//		console.log(persona.nombre);
//
//obtenerInstagram(id,(error,instagram)=>{
//
//			if(error){
//				console.log(error);
//			}
//
//			else{
//				console.log(instagram)
//			}
//		})
//	}
//})