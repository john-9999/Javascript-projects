class Celular{

        constructor(color,peso,tamaño,rdc,ram){
                this.color =color;
                this.peso=peso;
                this.tamaño=tamaño;//resolución de pantalla//
                this.resolucióndecámara=rdc;//resolución de cámara//
                this.ram=ram;
                this.encendido=false;
        }


        botonEncendido(){

                if(this.encendido == false){
                        alert("celular encendido");
                        this.encendido = true;
                }

                else{
                        alert("celular apagado");
                        this.encendido = false;
                }
        }


        reiniciar(){
                if(this.encendido == true){
                        alert("reiniciando celular");
                }

                else{
                        alert("celular apagado");
                }
        }


        tomarFoto(){
                alert(`Foto tomada en una resolución de ${this.resolucióndeCámara}`);
        }


        grabarVideo(){
                alert(`Grabando video en una resolución de ${this.resolucióndeCámara}`);
        }


        mostrarInfo(){
                return `
                <b>Color</b>: ${this.color}<br>

                <b>Peso</b>: ${this.peso}<br>

                <b>Tamaño</b>: ${this.tamaño}<br>

                <b>Resolución de camara</b>: ${this.resolucióndecámara}<br>

                <b>Resolución de video</b>: ${this.resolucióndecámara}<br>

                <b>RAM</b>: ${this.ram}<br>`          

        }
}


class CelularAltaGama extends Celular{

        constructor(color,peso,tamaño,rdc,ram,rdce){
                super(color,peso,tamaño,rdc,ram);
                this.resolucióndecamaraextra = rdce;
        }

        grabarLento(){
                alert("Grabando en cámara lenta");
        }

        reconocimientoFacial(){
                alert("Iniciando reconocimiento facial");
        }

        mostrarInfoAltaGama(){
                return this.mostrarInfo() + `<b>Resolución de cámara extra</b>: ${this.resolucióndecamaraextra}`;
        }
}

//const celular1 = new Celular("turquesa","150g","5 pulgadas","Full HD","2GB RAM");
//const celular2 = new Celular("rojo","150g","5 pulgadas","Full HD","2GB RAM");
//const celular3 = new Celular("azul oscuro","150g","5 pulgadas","Full HD","2GB RAM");

//celular1.botonEncendido();
//celular1.reiniciar();
//celular1.tomarFoto();
//celular1.grabarVideo();
//celular1.botonEncendido();

const celular1 = new CelularAltaGama ("Azul","130 g","5.2 pulgadas","Full HD","3GB","4k",);
const celular2 = new CelularAltaGama("Rojo","130 g","6 pulgadas","Full HD","4GB","4k");

document.write(`
<b style= 'color: #00ffff'>Celular1</b><br>${celular1.mostrarInfoAltaGama()}<br><br>
<b style= 'color: #ff00ff'>Celular2</b><br>${celular2.mostrarInfoAltaGama()}<br><br>
`);
