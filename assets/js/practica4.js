let hNombre = document.getElementById("hNombre");
let hEdad = document.getElementById("hEdad");
let hDocumento = document.getElementById("hDocumento");
let hTelefono = document.getElementById("hTelefono");
let btnIngresar = document.getElementById("btnIngresar");

const ingresarDatos = () => {
  let nombre = prompt("Ingrese su nombre");
  if (nombre === "") {
    alert("Debe ingresar su nombre");
  } else {
    let edad = prompt("Ingrese su edad");
    if (edad === "") {
      alert("Debe Ingresar su edad");
    } else {
      let documento = prompt("Ingrese su documento");
      if (documento === "") {
        alert("Debe ingresar su documento");
      } else {
        let telefono = prompt("Ingrese su telefono");
        if (telefono ==="") {
            alert("Debe ingresar su telefono")
        } else {
            hNombre.innerHTML = "Nombre: " + nombre
            hEdad.innerHTML = "Edad: " + edad;
            hDocumento.innerHTML = "Documento: " + documento;
            hTelefono.innerHTML = "Telefono: " + telefono;
        }
      }
    }
  }
};

// onclicks

btnIngresar.onclick=function(){
    ingresarDatos();
}