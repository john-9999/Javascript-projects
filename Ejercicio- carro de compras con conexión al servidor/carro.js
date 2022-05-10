const contenedor = document.querySelector(".flex-container");//SELECCIONO EL CONTENEDOR DÓNDE VOY A TRABAJAR

//CREO LAS FUNCIONES QUE SERÁN LAS CARACTERISTICAS DEL PRODUCTO
function crearProteina(nombre,modelo,precio){
	img = "<img class='proteina-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOWqsiPi61--DXNja_y2coGmInFPLH_rgeQ&usqp=CAU'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio];
}
//PARA QUE SE ENVIÉ EL NÚMERO DE MODELO AL SERVIDOR
const changeHidden = (number)=>{
	document.querySelector(".key-data").value = number
}

//CREO UN OBJETO VACÍO PARA INSERTAR NODOS EN ÉL YA SEAN MUCHOS O POCOS Y ASI CONSUMIR MENOS RECURSOS.
let documentFragment = document.createDocumentFragment();

//CREO UN FOR PARA QUE SE EJECUTEN 20 PRODUCTOS
for (var i = 1; i <= 20; i++) {
	let modeloRandom = Math.round(Math.random()*10000);//NÚMERO DE MODELO
	let precioRandom = Math.round(Math.random()*10+30);//NÚMERO DE PRECIO
	let proteina = crearProteina(`proteina ${i}`,`modelo ${modeloRandom}`,precioRandom);
    
    let div = document.createElement("DIV");//CREO UN ELEMENTO DIV
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
    div.tabIndex = i; //PARA QUE LA proteina QUE QUEREMOS COMPRAR QUEDE SELECCIONADA.
    div.classList.add(`item-${i}`,'flex-item');//AL DIV LE AÑADO ITEMS
    div.innerHTML = proteina[0] + proteina[1] + proteina[2] + proteina[3]; //LOS ITEMS SERÁN: IMG,NOMBRE,PRECIO,MODELO
	documentFragment.appendChild(div);//PARA QUE SE MUESTRE DENTRO DEL DIV CONTENEDOR ESCRITO Y MOSTRADO EN PANTALLA
}

contenedor.appendChild(documentFragment);//EL CONTENEDOR TENDRÁ ADENTRO EL DocumentFragment QUE NOSOTROS CREAMOS.