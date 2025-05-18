document.addEventListener("DOMContentLoaded", function(){
    const pantalla = document.getElementById("resultado");
    const botones = document.querySelectorAll("button")


    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const valor = boton.textContent;

            if (valor === "=") {
                try {
                    pantalla.value = eval(pantalla.value);
                } catch (error) {
                    pantalla.value = "Error";
                }
            } else if (valor === "C") {
                pantalla.value = "";
            } else {
                pantalla.value += valor;
            }
        });
    });
});