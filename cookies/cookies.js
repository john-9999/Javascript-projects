//Creamos una funcion que tendra como parametro los dias
//Definimos fecha, dentro de la misma funcion
//fecha.setTime (contiene adentro el tiempo de la fecha + los dias (fecha) calculados automaticamente)
//Retornamos la fechatoUTCString (la fecha en hora UTC que sera retornada en forma de string)
const newFechaUTC =dias =>{
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}

//creamos una funcion que contendra en nombre y los dias de la cookie
//expires = Fecha en la que expirara (dias)
//document.cookie = ${name}=nombre de la cookie,  expires = ${expires} (en cuantos dias expira la cookie)
const crearCookie = (name,dias)=>{
    expires = newFechaUTC(dias)
    document.cookie = `${name};expires=${expires}`;
}

//llamamos a crear cookies y creamos una por 4 dias
crearCookie("usuario=juanpe","2");
crearCookie("dni= 123","2");

//vemos las cookies creadas
document.cookie

const obtenerCookie = cookieName =>{
    let cookies = document.cookie;//definimos las cookies que seran buscadas
    cookies = cookies.split(";");//las cookies seran separadas con split por un ; (punto y coma)
    for (i = 0; cookies.length > i; i++){
        cookie = cookies[i].trim();//la cookie actual recien creada = removemos los espacios en blanco que contendra
        if (cookie.startsWith(cookieName)){//si la cookie arranca con name="...", usuario="..."
            return cookie.split("=")[1];//separamos el string usuario[0] = "juanpe"[1] de los elementos con ; (punto y coma)
        }
    }
    return "no hay cookies con ese nombre"//si no hay cookies, retornamos esto
}