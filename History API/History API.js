"use strict"

//no detectaremos los cambios que se hayan echo con popstate y aplicando replaceState
addEventListener("popstate",(e)=>{
    console.log(e.state)
})

