const sumar = (num1,num2)=>{
        return parseInt(num1) + parseInt(num2);
} //parseInt() es una función de alto nivel que sirve para parsear una cadena e intentar obtener un valor numérico a partir de esta.//

const restar = (num1,num2)=>{
        return parseInt(num1) - parseInt(num2);
}

const dividir = (num1,num2)=>{
        return parseInt (num1) / parseInt(num2);
}

const multiplicar = (num1,num2)=>{
        return parseInt(num1) * parseInt(num2);
}



let operación= prompt(` ¿Que operación deseas realizar?. 1-sumar, 2-restar, 3-dividir, 4-multiplicar `);

if (operación == 1 || operación == `sumar`) {
        let número1 = prompt(` Valor 1 para sumar `);
        let número2 = prompt(` Valor 2 para sumar `);
        resultado = sumar(número1,número2);
        alert(` el resultado es ${resultado} `);
       
}

else if (operación == 2 || operación == `restar`) {
        let número1 = prompt(` Valor 1 para restar `);
        let número2 = prompt(` Valor 2 para restar `);
        resultado = restar(número1,número2);
        alert(` el resultado es ${resultado} `);
       
}

else if (operación == 3 || operación == `dividir`) {
        let número1 = prompt(` Valor 1 para dividir `);
        let número2 = prompt(` Valor 2 para dividir `);
        resultado = dividir(número1,número2);
        alert(` el resultado es ${resultado} `);
       
}

else if (operación == 4 || operación == `multiplicar`) {
        let número1 = prompt(` Valor 1 para multiplicar `);
        let número2 = prompt(` Valor 2 para multiplicar `);
        resultado = multiplicar(número1,número2);
        alert(` el resultado es ${resultado} `);
       
}


else{
        alert(`No se ha encontrado la operación`);
}