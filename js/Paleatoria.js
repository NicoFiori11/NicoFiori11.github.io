var palabrasEscolares = ["MOCHILA","LAPIZ","LAPICERA","GOMA","REGLA","PIZARRA","CUADERNO","CARPETA","LIBRO","PUPITRE","AULA","ESCUELA","RECREO","TIMBRE","TIZA","CARTUCHERA","ALUMNO"];
var Palabras = JSON.parse(sessionStorage.getItem("Palabras"));
if (null == Palabras){
    var palabraSecreta = document.querySelector(".palabra");
    var palabraAleatoria = palabrasEscolares[Math.floor(Math.random()*palabrasEscolares.length)];
    var palabraConGuiones = palabraAleatoria.replace(/./g, "_ ");
    palabraSecreta.innerText = palabraConGuiones;
}
else{
    var palabraSecreta = document.querySelector(".palabra");
    var palabraAleatoria = Palabras[Math.floor(Math.random()*Palabras.length)];
    var palabraConGuiones = palabraAleatoria.replace(/./g, "_ ");
    palabraSecreta.innerText = palabraConGuiones;
}



