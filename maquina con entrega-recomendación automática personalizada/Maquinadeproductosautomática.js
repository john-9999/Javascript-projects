//TOMAR SUS NOMBRES Y PEDIRLE SUS MONTOS//
let nombre =prompt(` ¿Cuál es tu nombre? `);
let dinero = prompt(" ¿Cuánto dinero tienes? ");

if(dinero >=1 && dinero <2){
        alert(`${nombre}, comprate una pizza `);
}

else if(dinero >= 2 && dinero <3){
        alert(`${nombre}, comprate una porción de lasagna `);
}

else if(dinero >=3){
        alert(`${nombre}, comprate una caja de sandwich's triples `);
}

else{
        alert(`${nombre}, lo siento no hay productos para el monto que ingresaste `);
}

