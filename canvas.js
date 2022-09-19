function dibujarCanvas(){
    tablero.lineWidth =8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#e5e5e5";
    tablero.strokeStyle ="#0A3871";

    tablero.fillRect(0,0, 1200, 700);
    tablero.beginPath();
    tablero.moveTo(120, 380);
    tablero.lineTo(450, 380);
    tablero.moveTo(150, 380);
    tablero.lineTo(150, 65);
    tablero.lineTo(300, 65);
    tablero.lineTo(300, 100);
    tablero.stroke();
    tablero.closePath();
}
function dibujarLineas(){
    tablero.lineWidth =6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#e5e5e5";
    tablero.strokeStyle ="#0A3871";

    let ancho = 600/(palabraSecreta.length);    
    let centro=ancho/2;
    tablero.beginPath();
    for(let i = 0; i < palabraSecreta.length; i++){
        let trazo=(ancho + (ancho*i))-centro;       
        tablero.moveTo(trazo - 25, 450);       
        tablero.lineTo(trazo + 25, 450);     
    }
    tablero.stroke();
    tablero.closePath();
}

//FUNCION LECTORA DE KEYDOWN--------------------

var key = document.getElementById("horca").addEventListener("keypress", handleKeyPress);
function handleKeyPress(e){
    var code = e.keyCode;
   
    identificaLetra(code);
}

//TRADUCCION DE CODIGO A LETRA PRESIONADA-------------------------
var abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
+ "", "", "", "", "", "", "","a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x","y", "z"];

function identificaLetra(code){
    let codigo = 65;
    for(let i = 0; i< abecedario.length; i++){
        if(code==codigo){
            iteraPalabraSecreta(abecedario[i]);
            break;
        }
        codigo++;
    }
}

//ITERO PALABRA SECRETA CON TECLA PRESIONADA-------------------

var aciertos = [];


function iteraPalabraSecreta(letra){

    var contador=0;
    var validador=0;
    for(let j = 0; j <= aciertos.length; j++){
        if(letra.toUpperCase()==aciertos[j]){
            validador++;
        }
    }
        if(validador==0){
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta.charAt(i)==(letra.toUpperCase())){
                    dibujaAcierto(i, letra);
                    contador++;
                    }
                          
                }
                if(contador==0){
                    dibujaYerro(letra);
            }
        }
        contador=0;

        }

//DIBUJA LETRA ACERTADA-----------------

function dibujaAcierto(posicion, letra){
    let ancho = 600/palabraSecreta.length;
    let centro =ancho/2;
    tablero.font= "65px 'Inter'";
    tablero.textAlign = "center";
    tablero.fillStyle = "#0A3871";
    tablero.strokeStyle ="#0A3871";
    tablero.fillText(letra.toUpperCase(),  centro + (ancho*posicion), 440);
    aciertos.push(letra.toUpperCase());
    tablero.closePath();
    triunfoReinicio();
    

}

//DIBUJA LETRA ERRADA----------------

var yerros = [];

function dibujaYerro(letra){
    tablero.font= "30px 'Inter'";
    tablero.textAlign = "center";
    tablero.fillStyle = "#495057";
    tablero.strokeStyle ="#495057";
    tablero.fillText(letra.toUpperCase(), 225 + (yerros.length * 30), 500);
    tablero.closePath();
    yerros.push(letra.toUpperCase());
    dibujoHombreAhorcado(yerros.length);
    if(yerros.length==6){
        derrotaReinicio();
    }
    
}

//ALERTA TRIUNFO, REINICIO DE JUEGO---------------

function triunfoReinicio(){
    if(palabraSecreta.length==aciertos.length){
        document.getElementById("texto-popup").innerHTML = "Ganaste, felicidades!";
        document.getElementById("modal-oculto").classList.add("modal-visible");
        document.getElementById("texto-popup").classList.remove("rojo");
        document.getElementById("texto-popup").classList.add("verde");
       
    }
}

//ALERTA DERROTA, REINICIO O SALIR--------------------

function derrotaReinicio(){
        document.getElementById("texto-popup").innerHTML = "Fin del juego!";
        document.getElementById("modal-oculto").classList.add("modal-visible");
        document.getElementById("texto-popup").classList.remove("verde");
        document.getElementById("texto-popup").classList.add("rojo");
    }

function cierraModal(){
    document.getElementById("modal-oculto").classList.remove("modal-visible");
    tablero.clearRect(0,0,1200, 600);
    aciertos = [];
    yerros = [];
    iniciarJuego();
}

//DIBUJO DE CUERPO, AHORCADO----------------------

function dibujoHombreAhorcado(caso){
        switch (caso){       
        case 1 :            
            tablero.lineWidth =8;
            tablero.lineCap = "round";
            tablero.lineJoin = "round";
            tablero.fillStyle = "#e5e5e5";
            tablero.strokeStyle ="#0A3871";
            //context.arc(x, y, r, ap, af , cR);
            tablero.beginPath();
            tablero.arc(300, 125, 25, 0, 2*Math.PI);
            tablero.stroke();
            tablero.closePath();

            break;
        case 2 :
            tablero.lineWidth =8;
            tablero.lineCap = "round";
            tablero.lineJoin = "round";
            tablero.fillStyle = "#e5e5e5";
            tablero.strokeStyle ="#0A3871";
            tablero.moveTo(300, 150);
            tablero.lineTo(300, 275);
            tablero.stroke();
            tablero.closePath();

                break;
        case 3 :
            tablero.lineWidth =8;
            tablero.lineCap = "round";
            tablero.lineJoin = "round";
            tablero.fillStyle = "#e5e5e5";
            tablero.strokeStyle ="#0A3871";
            tablero.moveTo(300, 275);
            tablero.lineTo(250, 350);
            tablero.stroke();
            tablero.closePath();

            break;
        case 4 :
            tablero.lineWidth =8;
            tablero.lineCap = "round";
            tablero.lineJoin = "round";
            tablero.fillStyle = "#e5e5e5";
            tablero.strokeStyle ="#0A3871";
            tablero.moveTo(300, 275);
            tablero.lineTo(350, 350);
            tablero.stroke();
            tablero.closePath();

            break;
        case 5 :
            tablero.lineWidth =8;
            tablero.lineCap = "round";
            tablero.lineJoin = "round";
            tablero.fillStyle = "#e5e5e5";
            tablero.strokeStyle ="#0A3871";
            tablero.moveTo(300, 180);
            tablero.lineTo(250, 245);
            tablero.stroke();
            tablero.closePath();

            break;
        case 6 :
            tablero.lineWidth =8;
            tablero.lineCap = "round";
            tablero.lineJoin = "round";
            tablero.fillStyle = "#e5e5e5";
            tablero.strokeStyle ="#0A3871";
            tablero.moveTo(300, 180);
            tablero.lineTo(350, 245);
            tablero.stroke();
            tablero.font= "bold 17px 'Inter'";
            tablero.textAlign = "center";
            tablero.fillStyle = "#0A3871";
            tablero.strokeStyle ="#0A3871";
            tablero.fillText("X X", 300, 123);
            tablero.closePath();
            break;    
    }
}