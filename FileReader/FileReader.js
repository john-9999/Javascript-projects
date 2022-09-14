"use strict";
//LEER UN ARCHIVO EN JAVASCRIPT
const archivo = document.getElementById('archivo');//seleccionamos archivo en el codigo html para trabajar con el
archivo.addEventListener("change",(e)=>{ //añádimos a archivo, el evento "change" para cambiarlo en algún caso, si hay un error que lo muestre también. Creamos una función
    leerArchivo(archivo.files) //USO PARA 1ER Y 2DO CODIGO DE ABAJO: archivo.files[0]. leemos 1 solo archivo, ya que cargaremos uno solo. En caso de multiples archivos añadimos multiples en HTML
})

//const leerArchivo = archivo=>{ //Definimos la función leerArchivo que aplicamos recién arriba, le damos una función a archivo (que será leído)
//    const reader = new FileReader();//definimos reader, para que el nuevo archivo sea leído
//    reader.readAsText(archivo); //leemos el archivo aplicando readAsText
//    reader.addEventListener("load",(e)=>console.log(e))//Y al cargar el archivo que lo muestre en consola, si hay errores que los muestre tambien
//}

//CONVERTIMOS EL RESULTADO DEL ARCHIVO LEIDO EN UN JSON
//const leerArchivo = archivo=>{ //Definimos la función leerArchivo que aplicamos recién arriba, le damos una función a archivo (que será leído)
//    const reader = new FileReader();//definimos reader, para que el nuevo archivo sea leído
//    reader.readAsText(archivo); //leemos el archivo aplicando readAsText
//    reader.addEventListener("load",(e)=>{
//        console.log(JSON.parse(e.currentTarget.result));//mostramos en consola en forma de JSON para leerlo al resultado
//    })
//}

//SELECCIONAMOS MULTIPLES ARCHIVOS Y LEEMOS LOS 3 EN FORMA DE BUCLE(MISMO CODIGO ANTERIOR).
//const leerArchivo = archivo=>{

//    for(var i =0; i < archivo.length; i++){
//        const reader = new FileReader();//definimos reader, para que el nuevo archivo sea leído
//       reader.readAsText(archivo[i]); //leemos el archivo aplicando readAsText
//       reader.addEventListener("load",(e)=>{
//           console.log(JSON.parse(e.currentTarget.result));//mostramos en consola en forma de JSON para leerlo al resultado
//       })
//   }
//}

//MISMO CODIGO PERO USANDO readAsDataURL cargando imagenes
const leerArchivo = archivo=>{

    for(var i =0; i < archivo.length; i++){
        const reader = new FileReader();//definimos reader, para que el nuevo archivo sea leído
        reader.readAsDataURL(archivo[i]); //leemos el archivo aplicando readAsText
        reader.addEventListener("load",(e)=>{
        let newImg = `<img src='${e.currentTarget.result}'>`;
        document.querySelector(".resultado").innerHTML += newImg
        })
    }
}
