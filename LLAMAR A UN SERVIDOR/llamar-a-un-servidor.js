const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "fisica 1",
        nota: "7",
    },{
        nombre: "calculo 1",
        nota: "6",
    },{
        nombre: "matemática",
        nota: "1",
    },{
        nombre: "calculo 2",
        nota: "9",
    }
]

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{

        materia = materias[id];

        if(materia == undefined){
            reject("la materia no existe")
        }

        else setTimeout(()=>{resolve(materia)},Math.random()*400)
       })
}

//obtenerMateria(1).then(resultado=>console.log(resultado));

//MOSTRAMOS LAS MATERIAS DE FORMA ASYNC Y EN ORDEN
const devolverMaterias = async ()=>{
    let materia = [];
    for(i=0 ; i < materias.length; i++){
        materia[i]= await obtenerMateria(i);
        console.log(materia[i]);//mostramos en consola
        let newHTMLCode =`
        <div class="materias">
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>
    </div>
        `;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias()