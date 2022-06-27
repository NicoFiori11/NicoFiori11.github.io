var button = document.querySelector("#aniadir");
var palabrasEscolares = ["MOCHILA","LAPIZ","LAPICERA","GOMA","REGLA","PIZARRA","CUADERNO","CARPETA","LIBRO","PUPITRE","AULA","ESCUELA","RECREO","TIMBRE","TIZA","CARTUCHERA","ALUMNO"];
var input = document.querySelector(".inputaniadir")
sessionStorage.setItem("Palabras", JSON.stringify(palabrasEscolares))
button.addEventListener ("click", function(){
    if (input.value == ""){
        return;
    }
    else{
        palabrasEscolares.push(input.value.toUpperCase());
        document.querySelector (".inputaniadir").value = "";
        sessionStorage.setItem("Palabras", JSON.stringify(palabrasEscolares))
        partida()
    }

});
