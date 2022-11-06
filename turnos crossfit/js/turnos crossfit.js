//CREAMOS OBJETOS (QUE SERA CADA CLASE DE CROSSFIT)
var app = new function() {
        var clase1 = {
          profe: "ALDANA",
          modalidad: "Crossfit",
          hora: new Date(2022, 10, 5, 13),//AÑO,MES,FECHA,HORA
          costobase: 0,
          costoneto: 0,
          reservas: []
        };
        var clase2 = {
          profe: "BERG",
          modalidad: "Crossfit",
          hora: new Date(2022, 10, 6, 14),
          costobase: 0,
          costoneto: 0,
          reservas: []
        };
        var clase3 = {
          profe: "CARLOS",
          modalidad: "Crossfit",
          hora: new Date(2022, 10, 7, 15),
          costobase: 0,
          costoneto: 0,
          reservas: []
        };
        var clase4 = {
          profe: "DELFINA",
          modalidad: "Crossfit",
          hora: new Date(2022, 10, 8, 16),
          costobase: 0,
          costoneto: 0,
          reservas: [1078]
        };
        var clase5 = {
          profe: "ERNESTO",
          modalidad: "Crossfit",
          hora: new Date(2022, 10, 9, 17),
          costobase: 0,
          costoneto: 0,
          reservas: []
        };
        //CLASES
        this.clases = [clase1, clase2, clase3, clase4, clase5];
        for (var i = 0; i < this.clases.length; i++) {
          var aumentomanana = 0;
          var aumentofindesemana = 0;
          if (this.clases[i].hora.getHours() <= 12) {
            aumentomanana = this.clases[i].costobase * 0.05; 
          }
          if (this.clases[i].hora.getDay() == 5 || this.clases[i].hora.getDay() == 6) {
            aumentofindesemana = this.clases[i].costobase * 0.1; 
          }
          this.clases[i].costoneto = this.clases[i].costobase + aumentomanana + aumentofindesemana;
        }



//MOSTRAR CLASES
        this.mostrarclases = function() {
          var data = '<br>';
          if (this.clases.length > 0) {
            for (i = 0; i < this.clases.length; i++) {
              var hora = this.clases[i].hora.getHours() < 10 ? '0' + this.clases[i].hora.getHours() : this.clases[i].hora.getHours(); //HORA DE CADA CLASE
              var minutos = this.clases[i].hora.getMinutes() < 10 ? '0' + this.clases[i].hora.getMinutes() : this.clases[i].hora.getMinutes();//MINUTOS DE LA HORA DE CADA CLASE
              data += '<tr>';
              data += '<td>Clase # '+ (i+1) + ' PROFE: ' + this.clases[i].profe + ', MODALIDAD: ' + this.clases[i].modalidad + ', INICIO: ' + this.clases[i].hora.toDateString() + " " + hora + ":" + minutos + '</td>';//DATA DE CADA CLASE
              data += '<td><button onclick="app.Reservar(' + i + ')">Reservar</button></td>';//BOTON DE RESERVAR CLASE ESPECIFICA
              data += '</tr>';
            }
          }
          document.getElementById('clases').innerHTML = data;//ESCRIBIMOS LA DATA EN EL CONTENEDOR "CLASES"
          document.getElementById('clases').style.display = 'block';//EL CONTENEDOR CLASES SERA DISPLAY BLOCK
        };
//RESERVAR
        this.Reservar = function (item) {
          var el = document.getElementById('documento');//DEFINIMOS Y SELECCIONAMOS EL DOCUMENTO DONDE DEBEMOS ESCRIBIR LA CEDULA PARA RESERVAR LA CLASE DE CROSSFIT
          document.getElementById('documento').value = "";//EN EL DOCUMENTO ESCRIBIREMOS EL VALOR DE LA CEDULA QUE DEBEMOS INGRESAR PARA LA CLASE QUE QUEREMOS RESERVAR
          document.getElementById('datosclase').style.display = 'block';//LOS DATOS DE LA CLASE SE MOSTRARAN Y SERAN DISPLAY BLOCK
          document.getElementById('clases').style.display = 'none';//EL CONTAINER CLASES NO SE MOSTRARA
          document.getElementById('menu1').style.display = 'none';//EL MENU1 NO SE MOSTRARA
          document.getElementById('menu2').style.display = 'none';//EL MENU2 NO SE MOSTRARA
          document.getElementById('btnback').style.display = 'block';//EL BOTON VOLVER, SERA DISPLAY BLCOK

          var impuesto = this.clases[item].costobase == this.clases[item].costoneto ? '' : 'pago mensual'; //DEFINIMOS IMPUESTO. SE CALCULARA EL IMPUESTO QUE SERAN +$400 APROX EN EL CASO QUE QUERRAMOS APLICAR UN IMPUESTO (TODO ESTO SE APLICA A LOS OBJETOS CREADOS)
          var hora = this.clases[item].hora.getHours() < 10 ? '0' + this.clases[item].hora.getHours() : this.clases[item].hora.getHours();//DEFINIMOS HORA DE LA CLASE (TODO ESTO SE APLICA A LOS OBJETOS CREADOS)
          var minutos = this.clases[item].hora.getMinutes() < 10 ? '0' + this.clases[item].hora.getMinutes() : this.clases[item].hora.getMinutes();//DEFINIMOS MINUTOS DE LA HORA DE LA CLASE (TODO ESTO SE APLICA A LOS OBJETOS CREADOS)

          document.getElementById('datosclase').innerHTML = "CLASE # " + (item + 1) + ":<br>PROFE: " + this.clases[item].profe + '<br>MODALIDAD: ' + this.clases[item].modalidad + '<br>INICIO: ' + this.clases[item].hora.toDateString() + " " + hora + ":" + minutos + '<br>PRECIO BASE: $' + this.clases[item].costobase + '<br>PRECIO NETO: $' + this.clases[item].costoneto + " " + impuesto;//ITEMS QUE APARECERAN AL MOMENTO DE RESERVAR UNA CLASE DE CROSSFIT(TODO ESTO SE APLICA A LOS OBJETOS CREADOS)
          document.getElementById('campodoc').style.display = 'block';//EL CAMPO DONDE SE ENCUENTRA UBICADO EL DOCUMENTO DONDE DEBEMOS ESCRIBIR LA CEDULA PARA RESERVAR LA CLASE SERA DISPLAY BLOCK
          self = this;//La tecnica de dejar this guardado en self se usa para tener siempre la referencia original al objeto que disparo ese metodo.
          document.getElementById('reserva-edit').onsubmit = function() {//Al clickear el boton reservar aplicamos la siguiente funcion.
            var d = el.value * 1;//Definimos d y el valor se multiplicara por 1
            if (isNaN(d) || d == 0) { //En este momento el usuario debe ingresar la cedula. Si el usuario escribe letras en vez de la cedula para sacar un turno se lo cancelamos
              window.alert("Ingrese un dato correcto"); //Si ingresa letras le diremos que ingrese un dato correcto
            }else{//si var flag es falso quiere decir que ingresó numeros de cedula, entonces le haremos la reserva correspondiente de su turno para la clase de crossfit
              var flag = false;
              for (j = 0; j < self.clases.length; j++) {//creamos un bucle
                var auxDoc = self.clases[j].reservas.indexOf(d)//el turno de la clase se amacenara
                if (auxDoc != -1) {// si auxDoc es distinto o igual a -1
                  if (self.clases[j].hora.getFullYear() == self.clases[item].hora.getFullYear() &&//el año
                    self.clases[j].hora.getMonth() == self.clases[item].hora.getMonth() &&//el mes
                    self.clases[j].hora.getDate() == self.clases[item].hora.getDate()) {//y el dia de la fecha
                    flag = true;//seguiran siendo verdaderos
                    break;//y se corta el proceso del bucle.
                  }
                }
              }
              //si el usuario intenta sacar otro turno para la misma clase le diremos que es un error ya que tiene reservado ese mismo turno.
              if (flag) {
                window.alert("Error: usted ya tiene reservado una clase para esta fecha");
              }else{//si el usuario reserva correctamente le diremos que la clase se reservo correctamente y los nodos se mostraran de la siguiente manera.
                self.clases[item].reservas.push(d);
                window.alert("Clase reservada correctamente");
                document.getElementById('menu1').style.display = 'block';
                document.getElementById('menu2').style.display = 'block';
                document.getElementById('datosclase').style.display = 'none';
                document.getElementById('campodoc').style.display = 'none';

                document.getElementById('btnback').style.display = 'none';
              }
            }
          }
        };
//CONSULTAR LA RESERVA
        this.consultarReserva = function () {//creamos una funcion para consultar la reserva del usuario
          var el = document.getElementById('docConsulta');//definimos y seleccionamos el nodo 'doc Consulta'
          var d = el.value * 1;//definimos el valor que se multiplicara por 1 nuevamente
          if (isNaN(d) || d == 0) {//si el usuario ingresa letras y no numeros de cedula como tiene que ser, le diremos que ingrese datos correctos
              window.alert("Ingrese un dato correcto");
          }else{//si el usuario ingresa numeros de cedula correctos le mostraremos los datos de su reserva 
            var data = '<br>CLASES RESERVADAS DE ' + d;//clases reservadas de "numero de cedula"
            for (i = 0; i < this.clases.length; i++) {//repetimos el bucle en el que se guardan las reservas de cada usuario
              var auxDoc = this.clases[i].reservas.indexOf(d)//aquí se guardo la reserva del usuario
              if (auxDoc != -1) {//si aucDoc es distinto o igual a -1
                var hora = this.clases[i].hora.getHours() < 10 ? '0' + this.clases[i].hora.getHours() : this.clases[i].hora.getHours();//la hora
                var minutos = this.clases[i].hora.getMinutes() < 10 ? '0' + this.clases[i].hora.getMinutes() : this.clases[i].hora.getMinutes();//los minutos de la hora
                data += '<tr>';
                data += '<td>Clase # '+ (i+1) + "= PROFE: " + this.clases[i].profe + ', MODALIDAD: ' + this.clases[i].modalidad + ', INICIO: ' + this.clases[i].hora.toDateString() + " " + hora + ":" + minutos + '</td>';//y la data de la clase
                data += '</tr>';
              }
            }
            if (data == '<br>CLASES RESERVADAS DE ' + d) {// y el numero de cedula es incorrecto
              window.alert("No existen clases asociadas a dicho documento");//le diremos al usuario que no existen clases asociadas a su numero de cedula
            }else{//Y si el usuario ingresa el numero de cedula correctamente le mostraremos los datos de su reserva, los nodos se veran o mostraran de la siguiente manera.
              document.getElementById('menu1').style.display = 'none';//menu1 no se mostrara
              document.getElementById('menu2').style.display = 'none';//menu2 no se mostrara
              document.getElementById('clases').style.display = 'block';//el container que contiene la data de la clase sera display block
              document.getElementById('clases').innerHTML = data;//se mostrara toda la data correspondiente a la clase
              document.getElementById('btnback').style.display = 'block';//el boton volver, sera display block
            }
          }
        };
//VOLVER
        this.Volver = function (){//funcion para volver atras, los nodos se veran o mostraran de la siguiente manera
          document.getElementById('datosclase').style.display = 'none';//'datosclase' no se mostrara
          document.getElementById('campodoc').style.display = 'none';//'campodoc' no se mostrara
          document.getElementById('clases').style.display = 'none';// la data de las clases que consultamos ya no se mostrara por el hecho de que estamos volviendo hacia atras
          document.getElementById('btnback').style.display = 'none';//boton volver no se mostrara ya que ya fue clickeado para regresar hacia atras
          document.getElementById('menu1').style.display = 'block';//menu1 se mostrara como display block (cuadro: reservar clases y ver horarios)
          document.getElementById('menu2').style.display = 'block';//menu2 se mostrara como display block (cuadro: consultar clases ya reservadas)
          document.getElementById('docConsulta').value = "";//en 'docConsulta' se vera o se tendra que escribir el numero de cedula
        };
}