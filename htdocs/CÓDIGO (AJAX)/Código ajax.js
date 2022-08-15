//Para ahorrarnos errores y que al usuario no le funcione algo usando un navegador ponemos lo siguiente al principio del código. O sea declaramos una nueva variable para este caso.
//let petición;
//if(window.XMLHttpRequest){
//    petición = new XMLHttpRequest();
//}
//else{
//    petición = new ActiveXObject("Microsoft.XMLHTTP");
//}


//Trabajar el resultado de las peticiones.
//const peticion = new XMLHttpRequest();

//peticion.addEventListener("load",()=>{
//let respuesta;
//if(peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;

//else respuesta = "No se ha encontrado el recurso";

//console.log(JSON.parse(respuesta));//mostramos la respuesta (o sea lo que contiene adentro)
    
//})

//peticion.open("POST","https://reqres.in/api/users");

//peticion.setRequestHeader("Content-type","application/json;charset=UTF8")

//peticion.send(JSON.stringify({
//    "id": 9,
//            "email": "tobias.funke@reqres.in",
//            "first_name": "Tobias",
//            "last_name": "Funke",
//            "avatar": "https://reqres.in/img/faces/9-image.jpg"
//}))


//esto serviría como una alternativa para mostrar lo que contiene adentro, pero ahora se usa fetch para serializar y deseriañlixzar de una manera adecuada.





// FETCH: FORMA IDEAL DE AHORRARNOS TODO LO ANTERIOR. AHORA HAREMOS UNA PETICIÓN POST
//fetch("https://reqres.in/api/users",{
//    method:"POST",
//    body: '{"nombre" : "juan","apellido" : "perez"}',
//    headers: {"Content-type" : "application/json"} 
//})
//    .then(res=>res.json()) //Usamos este parametro para mostrar el texto o data que contiene dentro el enlace.Lo podemos convertir a json() o blob
//    .then(res=>console.log(res))

    //NOTA: El resultado en consola serán los datos que contienen el body.

//EJEMPLO CON PETICIÓN GET QUE TENIAMOS ANTES, VAMOS A VISUALIZAR UNA IMAGEN EN PANTALLA SOLO CON LA URL
//const imagen = document.querySelector(".imagen")
//fetch("https://reqres.in/img/faces/9-image.jpg")
//.then(res=>res.blob())//USAMOS BLOB PARA MOSTRAR Y ALMACENAR LA IMAGEN DE MANERA TEMPORAL
//.then(img=>imagen.src = URL.createObjectURL(img))//Usando este último metodo se crea una URL temporal para que el objeto se pueda visualizar mediante la petición GET enviada.





//AXIOS (LIBRERIA) PARA TRABAJAR CON MUCHAS PETICIONES ES IDEAL. A CONTINUACIÓN ENVIAREMOS UNA DATA (O PETICIÓN), LO MISMO QUE VENIMOS HACIENDO PERO CON MENOS LINEAS DE CÓDIGO Y MÁS OPTIMIZADO.
//axios.post("https://reqres.in/api/users",{ //SI QUEREMOS QUE LA SOLICITUD SEA GET, REEMPLAZAMOS EN LUGAR DE POST. A CONTINUACIÓN ENVIAMOS LOS SIGUIENTES DATOS
//   "nombre": "juan",
//   "apellido":"perez"
//}) 
//     .then(res=>console.log(res)) //res.data si queremos ver la data tal cuál está almacenada.




//FETCH Y AXIOS (CON ASYNC Y AWAIT).
const getEmail = async ()=>{

    let peticion = await fetch("https://reqres.in/api/users"); //pedimos datos al enlace "informacion.txt"
    let resultado = await peticion.json(); //el resultado serializado de la peticion lo encapsulamos en un json()
    let HTMLCode =`Páginas: ${resultado.page}<br>`;
    //ALTERNATIVA PARA MOSTRAR DATOS ESPECIFICOS DE LA API
    //let HTMLCode =`email: 'george.bluth@reqres.in'<br>
    //               first_name: 'George'`;
    document.querySelector(".resultado").innerHTML = HTMLCode
    console.log(resultado) //mostramos el resultado en consola
}

//getEmail() //obtenemos la data con los emails que contiene la api.

document.getElementById('email').addEventListener("click",getEmail); //al hacer click en el boton "obtener email", nos dará la data en consola