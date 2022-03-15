//TOMAR NOMBRE DEL CLIENTE//
let nombre= prompt(` Escribe tu nombre / write your name `);


//MOSTRAR PRODUCTOS DISPONIBLES Y QUE ELIJA UNO//
let producto= prompt(`Hola ${nombre}. ¿Que producto deseas adquirir? (escribe un número). Hi, ${nombre}. What product do you want to purchase? (Write a number). OPCIONES/OPTIONS: 1-Crossfit(8 CLASES), 2-Crossfit(12 CLASES) 3-Crossfit(20 CLASES) - 4-Open Box, 5-Crossfit + Open Box `);




if(producto == 1 || producto == "Crossfit(8 CLASES)" || producto == "crossfit(8 CLASES)" || producto == "CROSSFIT(8 CLASES)"){
        alert(`${nombre}. Seleccionaste la opción 1 "Crossfit(8 CLASES)". Abonalo por CBU o EFECTIVO en el rapipago más cercano// ${nombre}. You selected option 1 "Crossfit". Pay by CBU or CASH at the nearest rapipago: 
                -Costo: $2500(8 CLASES)
                -CBU:6392739273892293
                -Código/code Mercado pago: 738273 (cuenta a nombre de (nombre del dueño de la cuenta)/ account in the name of (account owner name)) `);
}

else if(producto == 2 || producto == "Crossfit(12 CLASES)" || producto == "crossfit(12 CLASES)" || producto == "CROSSFIT(12 CLASES)"){
        alert(`${nombre}. Seleccionaste la opción 2 "Crossfit(12 CLASES)". Abonalo por CBU o EFECTIVO en el rapipago más cercano// ${nombre}. You selected option 2 "Crossfit(12 CLASES)". Pay by CBU or CASH at the nearest rapipago: 
                -Costo: $2800(12 CLASES)
                -CBU:6392739273892293
                -Código/code Mercado pago: 738273 (cuenta a nombre de (nombre del dueño de la cuenta)/ account in the name of (account owner name)) `);
}

else if(producto == 3 || producto == "Crossfit(20 CLASES)" || producto == "crossfit(20 CLASES)" || producto == "CROSSFIT(20 CLASES)"){
        alert(`${nombre}. Seleccionaste la opción 3 "Crossfit(20 CLASES)". Abonalo por CBU o EFECTIVO en el rapipago más cercano// ${nombre}. You selected option 3 "Crossfit(20 CLASES)". Pay by CBU or CASH at the nearest rapipago: 
                -Costo: $3100(20 CLASES)
                -CBU:6392739273892293
                -Código/code Mercado pago: 738273 (cuenta a nombre de (nombre del dueño de la cuenta)/ account in the name of (account owner name)) `);
}

else if(producto == 4 || producto == "Open Box" || producto == "open Box" || producto == "OPEN BOX"){
        alert(`${nombre}. Seleccionaste la opción 4 "Open Box". Abonalo por CBU o EFECTIVO en el rapipago más cercano// ${nombre}. You selected option 1 "Open Box". Pay by CBU or CASH at the nearest rapipago: 
                -Costo: $3100 "Open Box"
                -CBU:6392739273892293
                -Código Mercado pago: 738273 (cuenta a nombre de (nombre del dueño de la cuenta)/ account in the name of (account owner name) `);
}

else if(producto == 5 || producto == "Crossfit + Open Box" || producto == "crossfit + open Box" || producto == "CROSSFIT + OPEN BOX"){
        alert(`${nombre}. Seleccionaste la opción 5 "Crossfit + Open Box". Abonalo por CBU o EFECTIVO en el rapipago más cercano// ${nombre}. You selected option 1 "Open Box". Pay by CBU or CASH at the nearest rapipago: 
                -Costo: $3300 "Crossfit + Open Box"
                -CBU:6392739273892293
                -Código Mercado pago: 738273 (cuenta a nombre de (nombre del dueño de la cuenta)/ account in the name of (account owner name) `);
}

else{
        alert(` La opción que ingresaste no existe. // The option you entered does not exist. `);
}
