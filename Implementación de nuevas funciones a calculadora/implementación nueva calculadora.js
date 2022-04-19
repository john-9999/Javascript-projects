class Calculadora{

sumar (num1,num2){
        return parseInt(num1) + parseInt(num2);
} //parseInt() es una función de alto nivel que sirve para parsear una cadena e intentar obtener un valor numérico a partir de esta.//

restar (num1,num2){
        return parseInt(num1) - parseInt(num2);
}

dividir (num1,num2){
        return parseInt (num1) / parseInt(num2);
}

multiplicar (num1,num2){
        return parseInt(num1) * parseInt(num2);
}

potenciar(num,exp){
        return num**exp;
}

raizCuadrada(num){
        return Math.sqrt(num);
}

raizCubica(num){
        return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

let operación= prompt(` ¿Que operación deseas realizar?. 1-sumar, 2-restar, 3-dividir, 4-multiplicar, 5-potenciar, 6-raizCuadrada, 7-raizCubica `);

if (operación == 1 || operación == `sumar`) {
        let número1 = prompt(` Valor 1 para sumar `);
        let número2 = prompt(` Valor 2 para sumar `);
        resultado = calculadora.sumar(número1,número2);
        alert(` el resultado es ${resultado} `);
       
}

else if (operación == 2 || operación == `restar`) {
        let número1 = prompt(` Valor 1 para restar `);
        let número2 = prompt(` Valor 2 para restar `);
        resultado = calculadora.restar(número1,número2);
        alert(` el resultado es ${resultado} `);
       
}

else if (operación == 3 || operación == `dividir`) {
        let número1 = prompt(` Valor 1 para dividir `);
        let número2 = prompt(` Valor 2 para dividir `);
        resultado = calculadora.dividir(número1,número2);
        alert(` el resultado es ${resultado} `);
       
}

else if (operación == 4 || operación == `multiplicar`) {
        let número1 = prompt(` Valor 1 para multiplicar `);
        let número2 = prompt(` Valor 2 para multiplicar `);
        resultado = calculadora.multiplicar(número1,número2);
        alert(` el resultado es ${resultado} `);
       
}

else if (operación == 5 || operación == `potenciar`) {
        let número1 = prompt(` Número a potenciar`);
        let número2 = prompt(`Exponente`);
        resultado = calculadora.potenciar(número1,número2);
        alert(` el resultado es ${resultado} `);
       
}

else if (operación == 6 || operación == `raizCuadrada`) {
        let número1 = prompt(` Conocer la raíz cuadrada de:`);     
        resultado = calculadora.raizCuadrada(número1);
        alert(` el resultado es ${resultado} `);
       
}

else if (operación == 7 || operación == `raizCubica`) {
        let número1 = prompt(` Conocer la raíz cúbica de:`);
        resultado = calculadora.raizCubica(número1);
        alert(` el resultado es ${resultado} `);
       
}


else{
        alert(`No se ha encontrado la operación`);
}