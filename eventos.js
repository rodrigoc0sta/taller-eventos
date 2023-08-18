document.addEventListener("DOMContentLoaded", function() {
    let press = document.getElementById("div-1");

    function saludarDiv() {
        alert("Hola! Soy el div");
    }

    press.addEventListener("click", saludarDiv);
});
