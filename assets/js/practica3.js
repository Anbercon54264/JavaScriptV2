// Variables
let btnNombre = document.getElementById("btnNombre");
let hHola = document.getElementById("hHola");

// funciones

const guardarNombre = () => {
  let hNombre = prompt("Ingresa tu nombre");
  console.log(hNombre);
  if (hNombre === "") {
    alert("Ingrese su nombre para continuar");
  } else {
    hHola.innerHTML = "Hola: " + hNombre;
  }
};

// onclicks
btnNombre.onclick = function () {
  guardarNombre();
};
