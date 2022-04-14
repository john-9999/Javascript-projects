function start() {
    if (annyang) {
        annyang.setLanguage("es-AR")
        annyang.start({ autoRestart: true, continuous: false }); 
        console.log("Listening...")
        annyang.addCommands(comandos);
        annyang.debug()
        document.getElementById("btn").style.display = "none"   
}
}

 

let bandera = false;
annyang.addCallback('soundstart', function () {
    if (!bandera){
        document.getElementById("all2").style.display="block"
        setTimeout(() => {
            voz('Bienvenido de nuevo mi rey')
            bandera = true;
        }, 1000);
    }
    console.log("sound detected")
});

annyang.addCallback('result', function () {
    console.log('sound stopped');
});


const comandos = {
    // SALUDO
    "okey messi": () => {
        voz("Bienvenido de nuevo rey");
    },

    "hey messi": () => {
        voz("Bienvenido de nuevo mi rey");
    },

    "Buenos días messi": () => {
        voz("Bienvenido de nuevo rey");
    },

    "Buenas tardes messi": () => {
        voz("Bienvenido es de tarde rey");
    },

    "Buenas noches messi": () => {
        voz("buenas noches rey");
    },

    // DESPEDIDA

    "Hasta mañana messi": () => {
        voz("Hasta mañana rey");
        annyang.abort()
    },

    "Hasta luego messi": () => {
        voz("Hasta luego rey");
        annyang.abort()
    },

    "Adios messi": () => {
        voz("Hasta luego rey");
        annyang.abort()
    },

    "apágate": () => {
        voz('ok, hasta luego rey')
        annyang.abort();
    },

    "apágate por *tiempo minutos": tiempo => {
        voz('ok, vuelvo en' + tiempo + 'minutos');
        annyang.abort();
        setTimeout(() => {
            annyang.start();
            voz('Hola, he vuelto, ¿me extrañaste?')
        }, tiempo * 60000);
    },

    // PREGUNTAS

    "qué hora es": () => {
        var date = new Date;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;

        voz('rey son las ' + strTime)
    },

    "quién te creo": () => {
        voz("El mejor desarrollador juan perez");
    },

    "qué sos": () => {
        voz("soy un asistente virtual como siri de google o alexa de amazon");
    },

    "cuál es tu nombre": () => {
        voz("mi nombre es messi");
    },

    "qué fecha es hoy": () => {
        var date = new Date;
        var mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
        voz("hoy es " + date.getDate() + " de "+ mes[date.getMonth()] + "del" + date.getFullYear());
    },

   

    "qué día es hoy": () => {
        var date = new Date;
        var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
        voz("hoy es "+ dia[date.getDay()-1]);
    },

    // ORDENES

    "contame un chiste": () => {
        var chistes = [
            "¿Cuál es el colmo de un gato?. ¡Tener que pasarse el día andando a gatas!",
            "¿Cuál es el colmo de un policía? ¡Que lo asalten las dudas!",
            "¿Qué le dice una pulga a otra pulga? - ¿Vamos a pie o esperamos al perro?",
            "Contate uno vos mi rey"];

        var ran = Math.floor(Math.random() * chistes.length);
        voz(chistes[ran])
    },

    "reiniciate": () => {
        voz("entendido");
        location.reload();
    },

    "limpia la consola": () => {
        voz("entendido");
        console.clear();
    },

    "busca *busqueda": busqueda => {
        voz("ok, buscando " + busqueda +" para ti");
        window.open("https://www.google.com/search?q=" + busqueda)
    },
    
    "che quiero escuchar *busqueda": busqueda => {
        voz("ok, buscando " + busqueda + "para ti");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },

    "llama al *telefono": telefono => {
        voz("ok, con gusto llamando al" + telefono);
        window.open("tel:" + telefono)
    },

    "di *frase": frase => {
        voz(frase);
    },
    "escribi *dicto": dicto =>{
        document.getElementById("text").innerHTML = dicto;
    },

    // AMABILIDAD

    "gracias": () => {
        voz("Para servirte papá");
    },

    "fua": () => {
        voz('Me hace sonrojar')
    },

    "Cómo estás": () => {
        voz('mejor que ayer, espero que vos tambien lo estés')
    },

    "Te presento a *nombre": nombre => {
        voz("Hola" + nombre +", mi nombre es messi, es un placer conocerte");
    },

    // LLAMADA A LA ACCIÓN
    
    "messi": () => {
        voz("acá estoy rey");
    },

    "Hey": () => {
        voz("acá estoy rey");
    },

    "Hola": () => {
        voz("acá estoy rey");
    },

    "Me podes ayudar": () => {
        voz("claro que sí");
    },

    "Oye": () => {
        voz("acá estoy rey");
    },

    "Estás ahí": () => {
        voz("acá estoy rey");
    }

}

function voz(texto) {
    document.getElementById("all2").style.visibility = "hidden";
    var textoAEscuchar = texto;
    var mensaje = new SpeechSynthesisUtterance();
    mensaje.text = textoAEscuchar;
    mensaje.volume = 1;
    mensaje.rate = 0.9;
    mensaje.pitch = 1;
    // ¡Parla!
    document.getElementById("all").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("all").style.visibility = "hidden";  
        document.getElementById("all2").style.visibility = "visible";      
    }, 4000);
    speechSynthesis.speak(mensaje);
}