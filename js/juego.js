String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
var letras = document.querySelectorAll(".letra");
letras.forEach(boton => {
    boton.addEventListener("click",botonLetra)

});
var contadorFallos = 0;
var letrasPulsadas = []
function botonLetra(event){

    var letraSeleccionada = this.innerText;
    if (letrasPulsadas.length > 0){
        var valorBooleano = letrasPulsadas.includes(letraSeleccionada);
        if(valorBooleano == true){
            return;
        }
    }
    letrasPulsadas.push(letraSeleccionada);
    var id = this.id
    var cuadroElegido = document.getElementById(id)
    var haFallado = true
    for(const i in palabraAleatoria){
        if(letraSeleccionada == palabraAleatoria[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2 , letraSeleccionada);
            cuadroElegido.classList.add("blanco")
            haFallado = false
            }

    }
    
    if(palabraConGuiones.indexOf("_") < 0){
            ganador();
    }
    palabraSecreta.innerText = palabraConGuiones
    
    if(haFallado){
        cuadroElegido.classList.add("erroneo")
        contadorFallos++;
        if (contadorFallos == 1){
            base()
        }
        if (contadorFallos == 2){
            columna()
        }
        if (contadorFallos == 3){
            brazocolumna()
        }
        if (contadorFallos == 4){
            cabeza()
        }
        if (contadorFallos == 5){
            torso()
        }
        if (contadorFallos == 6){
            brazo1()
        }
        if (contadorFallos == 7){
            brazo2()
        }
        if (contadorFallos == 8){
            pierna1()
        }
        if (contadorFallos == 9){
            pierna2()
            setTimeout(1000)
            perdedor();

        }
    }
}
