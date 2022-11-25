//EXPLICACION DEL OBJETO CANVAS CREANDO FORMAS

//const canvas = document.getElementById('canvas');
//const ctx = canvas.getContext("2d");//contexto que le damos al objeto, en este caso sera 2d, tambien puede ser 3d.

//AHORA LOS METODOS SERAN APLICADOS AL CONTEXTO(CTX)

//-Creamos un rectangulo dentro del contexto (cuadrado grande de 500x500)
//ctx.lineWidth = "6"//grosor de todos los bordes de (1er rectangulo)
//ctx.strokeStyle="#000";//estilo del stroke (1er rectangulo)
//ctx.fillStyle = "#00ffff";//estilo del fill (2do rectangulo, esta por encima del 1ro)
//ctx.strokeRect(30,50,400,200) //left,top,margin right,bottom.(1er rectangulo)
//ctx.fillRect(10,20,400,200)//iguales medidas, rectangulo por encima del 1er rectangulo (2so rectangulo)
//ctx.arc(210,120,50,10,50);
//ctx.stroke()



//EJEMPLO PRACTICO USANDO EL OBJETO CANVAS
const canvas = document.getElementById('canvas');

const dif = canvas.getBoundingClientRect();

const ctx = canvas.getContext("2d");

let painting,color,linewidth,difX,difY;

canvas.addEventListener("mousedown",e=>{
    difX = e.client - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    color = document.getElementById("color").value;
    linewidth = document.getElementById("lw").value;
})

canvas.addEventListener("mousemove",e=>{
    if(painting){
        dibujar(difX,difY,e.clientX - dif.left,e.clientY - dif.top);
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    }
})

canvas.addEventListener("mouseup",()=>{
    ctx.closePath();
    painting = false;
})

const dibujar = (x1,y1,x2,y2) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}