"use strict";
//mensaje escrito desde el principio en consola para saber que aún no hemos habilitado las notificaciones.
if (!('notification' in window)){
    console.log("las notificaciones no estan disponibles")
}
//Si le damos permiso y las habilitamos, se mostrara esta notificacion.
Notification.requestPermission(()=>{
    if(Notification.permission == "granted"){
        new Notification("suscribite rey")
        console.log("Acceso a notificaciones concedido")
    }
})