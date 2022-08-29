"stric mode";

//LE PASAMOS UN PARAMETRO REST
const suma = (frase,...num)=>{
    let resultado = 0; //EL RESULTADO INICIA EN 0
    for (let i = 0; i < num.length; i++){ // SI V ES 0, SI V ES MENOR A LOS CARACTERES DEL NÚM, QUE V VAYA INCREMENTANDO.
        resultado = num[i]; //RESULTADO = NUMERO [i]
    }
    console.log(`${frase} ${resultado}`);
}

suma ("el resultado es",12,25,62,98)