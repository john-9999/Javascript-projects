


//FETCH Y AXIOS (CON ASYNC Y AWAIT).
const getEmail = async ()=>{

    let peticion = await fetch("https://reqres.in/api/users"); //pedimos datos al enlace "informacion.txt"
    let resultado = await peticion.json(); //el resultado serializado de la peticion lo encapsulamos en un json()
    //let HTMLCode =`email: ${resultado.page}<br>`;
    //ALTERNATIVA PARA MOSTRAR DATOS ESPECIFICOS DE LA API
    let HTMLCode = `
    avatar: "https://reqres.in/img/faces/2-image.jpg"<br>
    email: "janet.weaver@reqres.in"<br>
    first_name: "Janet"<br>
    id: 2<br>
    last_name: "Weaver"<br>
    `               
    document.querySelector(".resultado").innerHTML = HTMLCode
    console.log(resultado) //mostramos el resultado en consola
}

//getEmail() //obtenemos la data con los emails que contiene la api.

document.getElementById('email').addEventListener("click",getEmail); //al hacer click en el boton "obtener email", nos dará la data en consola