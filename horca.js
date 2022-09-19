var palabras =["ALURA","CONSTANTINO", "ORACLE", "PROGRAMAR", "APRENDER", "JAVASCRIPT","COMPUTADOR", "MATE", "TIEMPO", "ESTRELLA", "IDIOMA"];
const tablero = document.getElementById("horca").getContext("2d");
var palabraSecreta = "";

//PalabraSecreta

function seleccionaPalabraS(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta=palabra;
}
//Inicio de juego
function iniciarJuego(){
    document.getElementById("btn-home").style.display ="none";
    seleccionaPalabraS();
    document.getElementById("div-aparece-horca").classList.remove("oculto");
    dibujarCanvas();
    dibujarLineas();
}
//Ingreso nueva palabra
function nuevaPalabra(){
    document.getElementById("btn-home").style.display ="none";
    document.getElementById("nueva-palabra").classList.remove("oculto");
    
}
//Nueva Palabra
function agregaPalabra(){
    var nuevaPalabra = document.getElementById("nueva-palabra-input").value;
    if(nuevaPalabra.length<10){
    palabras=[];
    palabras.push(nuevaPalabra.toUpperCase());
    document.getElementById("nueva-palabra").classList.add("oculto");
    iniciarJuego();
    palabras =["ALURA", "ORACLE", "PROGRAMAR", "APRENDER", "JAVASCRIPT","COMPUTADOR", "MATE", "TIEMPO", "ESTRELLA", "IDIOMA"];
    palabras.push(nuevaPalabra)
    }else{
        alert("la palabra contiene más de 8 letras");
        document.getElementById("nueva-palabra-input").value ="";
    }   
}

//Cancelar
function cancelar(){
    document.getElementById("nueva-palabra").classList.add("oculto");
    document.getElementById("div-aparece-horca").classList.add("oculto");
    document.getElementById("btn-home").style.display = "flex";
    document.getElementById("nueva-palabra-input").value = "";
}

//Nuevo Juego

function reinicio(){
    setTimeout(() =>{
        tablero.clearRect(0,0,1200, 600);
        aciertos = [];
        yerros = [];
        iniciarJuego();
    }, "500");
}