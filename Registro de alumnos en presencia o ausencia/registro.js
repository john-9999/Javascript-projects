
//PREGUNTAR CUÁNTOS ALUMNOS SON//
let cantidad = prompt(" ¿Cuántos alumnos son? ");
let alumnosTotales = [];//-nombre[0]- y -numero de asistencias[1]//

//TOMAR NOMBRES//
for(i = 0 ; i < cantidad ; i++ ){

        alumnosTotales[i] = [prompt(" Nombre del alumno " + (i+1)),0] //(i+1) Es para que vaya incrementando las posiciones a medida que va pidiendo los nombres de los alumnos.INICIA DESDE LA POSICIÓN 0//
}

//FUNCIÓN PARA TOMAR ASISTENCIA DE LOS ALUMNOS//
const tomarAsistencia = (nombre,p)=>{

        let presencia = prompt(nombre);//NOS MUESTRA EL NOMBRE EN PANTALLA PARA PONERLE "P" O "A".//
        if(presencia == "p" || presencia == "P"){ //SI PRESENCIA ES == "P" O "p"...//
                alumnosTotales[p][1]++; // [p][1]++ . Acomoda los "p" de c/alumno y para esto tiene que ir incrementando las posiciones de -numero de asistencias[1]//
        }
}

//CONFIGURAMOS LOS 30 DIAS DE ASISTENCIA PARA TOMAR A LOS ALUMNOS//
for (i = 0; i < 30; i++){ //CANTIDAD DE DIAS (30 DIAS)//
        for(alumno in alumnosTotales){//in ES PARA QUE NOS MUESTRE LAS POSICIONES DE CADA ALUMNO EN ORDEN EN PANTALLA//
                tomarAsistencia(alumnosTotales[alumno][0],alumno);//Accedemos a alumnos totales y luego a [alumno] que tiene en su interior el -nombre[0], alumno- y -numero de asistencias[1]-. Accedemos al nombre[0] y alumno//
        }
}

//MOSTRAR EL RESULTADO DE LOS PRESENTES Y LAS AUSENTES QUE TIENE C/ALUMNO.// 
for(alumno in alumnosTotales){        

        //let resultado= Accedemos a alumnos totales y luego a alumno especifico que tiene en su interior el -nombre[0]- y -numero de asistencias[1]-. Accedemos al nombre[0]//
        let resultado =   `${alumnosTotales[alumno][0]}            <br> 
        ________Presentes: <b>${alumnosTotales[alumno][1]}</b>     <br>
        ________Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b><br> `; 
        //1- OBTENEMOS EL NOMBRE[0]//
        //2- ________Presentes: OBTENEMOS LA CANTIDAD DE ASISTENCIAS[1]//
        //3- ________Ausencias: 30 -  DIAS QUE ESTUVO PRESENTE. EJEMPLO: 30-6(P)= 24 AUSENCIAS//

        if(30 - alumnosTotales[alumno][1] > 18){
                resultado += "<b style='color: red'>REPROBADO POR INASISTENCIAS</b><br><br>"; //+= ES PARA SUMARLE A LA VARIABLE RESULTADO LAS 18 AUSENCIAS(10% DEL SEMESTRE) DEL ALUMNO Y QUE SEA REPROBADO//
        }
        //-SI EL RESULTADO DE AUSENCIAS ES > 18 ESTÁ REPROBADO//

        else{
                resultado+="<br><br>" //+= ES PARA SUMARLE VALORES A LA VARIABLE RESULTADO EN ESTE CASO HASTA TERMINAR EL PROGRAMA.//
        } 
        //SI NO SE SIGUE SUMANDO VALORES Y HACIENDO RECORRIDO POR LA VARIABLE RESULTADO//

        document.write(resultado); //ESCRIBIMOS EL RESULTADO EN PANTALLA DE PRESENTES Y AUSENTES CON LOS DATOS DE C/ALUMNO.//
}