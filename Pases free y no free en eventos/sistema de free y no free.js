 let free = false;

 const ValidarCliente = (time)=>{

 	let edad = prompt(" ¿Cuál es tu edad? ");

 	if(edad >= 18){

 		if(time >= 2 && time < 7 && free == false){// arranca a las 2 y termina a las 7. O sea que si entra a las 2hs y antes de las 7hs//
 			alert(` Podés ingresar gratis. Ya que son las ${time}:00 HS `); 
 		        free = true; //Aquí la entrada gratis se da al primero que ingresa a las 2hs//
 		} 
 	        //Desde ahora lo que sigue abajo será para el próximo que ingrese//
 	        else{
 		        alert(`Son las ${time}:00 HS. Podes ingresar, pero pagando la entrada`);
 	        }

 	        }       

 	        else{
 		        alert(" Sos menor de edad, no podés ingresar. ");
 	        }
 			
 }

 ValidarCliente(23);
 ValidarCliente(24);
 ValidarCliente(1);
 ValidarCliente(2);
 ValidarCliente(3);
 ValidarCliente(4);
 ValidarCliente(5);
 ValidarCliente(6);