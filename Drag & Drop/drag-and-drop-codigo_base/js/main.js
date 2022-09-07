//ACCEDEMOS A LA LISTA
const lista = document.getElementById('lista'); 
//LE DECIMOS A LA LISTA QUE QUEREMOS TRABAJAR CON LA LIBRERIA SORTABLE
//USAMOS EL METODO CREATE: 1ER PARAMETRO (LISTA), 2DO PARAMETRO (UN OBJETO CON LAS OPCIONES QUE QUEREMOS QUE TENGA)
//HASTA AQUÍ YA SE MOSTRARÁ EL DRAG AND DROP BÁSICO
Sortable.create(lista, {
	animation: 150,
	chosenClass: "seleccionado", //AGREGAMOS UNA CLASE PARA DARLE ESTILO EN CSS
	// ghostClass: "fantasma"    //AGREGAMOS OTRA CLASE PARA DARLE ESTILO EN CSS
	dragClass: "drag",           //AGREGAMOS OTRA CLASE PARA DARLE ESTILO EN CSS (ESTILO DEL FANTASMA, COMO BACKGROUND,COLOR,ETC)
// onEnd es un EVENTO que sirve para poner el código que querramos para cuándo el usuario suelte el cursor o termine de colocar un elemento.
	onEnd: () => {
		console.log('Se inserto un elemento');
	},
	//CREAMOS UN GRUPO PARA QUE SE GUARDEN LOS CAMBIOS (EN LOCAL STORAGE ASI NO SE BORRAN SI SE ACTUALIZA LA PÁGINA) ECHOS POR EL USUARIO EN LA LISTA.
	group: "lista-personas",
	//AHORA TRABAJAMOS CON LOCALSTORAGE. La propiedad store guardara los objetos.
	store: {
		// Guardamos el orden de la lista (usando la siguiente función)
		set: (sortable) => { //pasamos como parametro SORTABLE (lista)
			const orden = sortable.toArray();//creamos el orden de la nueva lista, que será igual a SORTABLE (lista) y toArray que nos permite transformar en un nuevo array los elementos de la lista actualizados.
			localStorage.setItem(sortable.options.group.name, orden.join('|'));//GUARDAMOS EN LOCALSTORAGE EL NUEVO ORDEN.Accedemos a sortable, opciones(que es todo el código hecho), accedemos al grupo y luego al nombre.orden.join('|') SIRVE PARA SEPARAR LOS ELEMENTOS DEL NUEVO ORDEN EJEMPLO: 2|1|3|4
		},

		// Obtenemos el orden de la lista (obtenemos lo que guardamos en localstorage)
		get: (sortable) => {
			const orden = localStorage.getItem(sortable.options.group.name);
			return orden ? orden.split('|') : []; 
			// SI ORDEN EXISTE{
			// QUE NOS RETORNE EN PANTALLA EL ORDEN EN FORMA DE ARRAY
			// } 

			//SI ORDEN NO EXISTE{
			//	QUE RETORNE UN ARRAY VACÍO
			// }
		}
	}
});