document.addEventListener("DOMContentLoaded", function() {
    let press = document.getElementById("div-1");
    let btn = document.getElementById("btn-1");
    
    function saludarBien(event) {
        if (event.target === btn) {
            alert("Hola!");
        }
        else if (event.target === press) {
            alert("Hola! Soy el Div");
        }
    }
    //creo la funcion saludar bien que evalue mediante un if si el target, es decir, el objetivo clickeado es el div o es el boton en si y despliegue un mensaje, los beneficios de realizar esto es tambien eliminar el atributo onclick utilizado originalmente en el html.

    press.addEventListener("click", saludarBien);
});
