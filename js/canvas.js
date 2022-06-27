var canvas = document.querySelector(".ahorcado");
var lapiz = canvas.getContext("2d");
lapiz.fillStyle = "white"
function base(){
    lapiz.fillRect(80,140,50,10)
}
function columna(){
    lapiz.fillRect(100,10,10,130)
}
function brazocolumna(){
    lapiz.fillRect(110,10,50,10);
    lapiz.fillRect(150,10,10,20)
}
function cabeza(){
    lapiz.arc(155,40,10,0,2*3.14)
    lapiz.fill();
}
function torso(){
    lapiz.fillRect(152.5,39,5,80)
}
function brazo1(){
    lapiz.translate(153.5,60)
    lapiz.rotate(-30* Math.PI /180)
    lapiz.fillRect(0,0,5,30)
    lapiz.rotate(30* Math.PI /180)
    lapiz.translate(-153.5,-60)
}
function brazo2(){
    lapiz.translate(153.5,58)
    lapiz.rotate(30* Math.PI /180)
    lapiz.fillRect(0,0,5,30)
    lapiz.rotate(-30* Math.PI /180)
    lapiz.translate(-153.5,-58)
}
function pierna1(){
    lapiz.translate(152,115)
    lapiz.rotate(30* Math.PI /180)
    lapiz.fillRect(0,0,5,30)
    lapiz.rotate(-30* Math.PI /180)
    lapiz.translate(-153.5,-110)
}
function pierna2(){
    lapiz.translate(153.5,110)
    lapiz.rotate(-30* Math.PI /180)
    lapiz.fillRect(0,0,5,30)
    lapiz.rotate(30* Math.PI /180)
    lapiz.translate(-153.5,-110)

}