// DOM Document object model

let btnAlerta = document.getElementById("btnAlerta");

const ventanaAlerta = () => {
    alert("Prueba");
};




// on clicks
btnAlerta.onclick = function(){
    ventanaAlerta();
}
