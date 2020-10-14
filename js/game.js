var btnAcept = document.querySelector('#btnacept');
var circle;
var canvas = document.getElementById("gato");
var ctx = canvas.getContext("2d");
var maxx = canvas.width;
var maxy = canvas.height;
var tamC = 0;
var px,py;    
var gato;

function getPosicionMouseConRespectoACanvas (event) {
    var rect = canvas.getBoundingClientRect();

    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }
}

/**
 * Funcion que optiene coordenadas del mouse 
 * @param {} event 
 */
function ObtenerCoords(event){
    var x = new Number();
    var y = new Number();

    if (event.x != undefined && event.y != undefined){
        x = event.x;
        y = event.y;
    }else{// Firefox
        x = event.clientX + document.body.scrollLeft +
        document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop +
        document.documentElement.scrollTop;
    }

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    return { x,y }
}

/**
 * Crea un circulo y tache en esa posicion
 */
function posicion(){
    var pos = ObtenerCoords(event);

    px = Math.trunc(pos.x/tamC);
    py = Math.trunc(pos.y/tamC);
    tache();
    circulo();
}

/**
 * Funcion que Dibuja el tablero
 */
function dibujaGato(){
    var n = 3;
    tamC = Math.round(maxx/n);
    var i = 0;
    for (i = 1; i < n ; i++){
        ctx.beginPath();
        ctx.moveTo(i*tamC, 0);
        ctx.lineTo(i*tamC, maxy);
        ctx.moveTo(0, i*tamC);
        ctx.lineTo(maxx, i*tamC);
        ctx.stroke();
    }

    gato =new Array(n);
    for (var i=0; i<n;i++){
        gato[i] =new Array(n);
        for (var j=0; j<n;j++){
            gato[i][j]=0;
        }
    }    

    for (var i=0; i<n;i++){
        for (var j=0; j<n;j++){
            console.log(gato[i][j]);
        }
    }    
}

/**
 * Funcion dibuja Tache
 */
function tache(){
    ctx.beginPath();

    ctx.moveTo((px*tamC)+(tamC*.1), ((py+1)*tamC)-(tamC*.1));
    ctx.lineTo(((px+1)*tamC)-(tamC*.1), ((py)*tamC)+(tamC*.1));

    ctx.moveTo((px*tamC)+(tamC*.1), ((py)*tamC)+(tamC*.1));
    ctx.lineTo(((px+1)*tamC)-(tamC*.1), ((py+1)*tamC)-(tamC*.1));

    ctx.stroke();
}

function circulo(){
    ctx.beginPath();
    ctx.arc((px*tamC)+(tamC*.5),(py*tamC)+(tamC*.5),tamC*.4,0,2*Math.PI);
    ctx.stroke();
}

function verifica(){

}

function reiniciar(){

}

function ganar(){

}

function perder(){

}
