// Variables
let btnNombre = document.getElementById("btnNombre");
let hHola = document.getElementById("hHola");


// funciones

const guardarNombre = ()=> {
    let hNombre = prompt("Ingresa tu nombre")
    hHola.innerHTML= "Hola: " + hNombre
}

// onclicks
btnNombre.onclick = function () {
    guardarNombre();
};
