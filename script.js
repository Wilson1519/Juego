let banderas = ["c.svg", "c++.svg", "csharp.svg", "java.svg", "javascript.svg","css.svg","html.svg","python.svg","ruby.svg"];
let opciones = [];
//opciones a mostrar en cada jugada
opciones.push(["JAVASCRIPT", "C", "C++"]);
opciones.push(["C", "C--", "C++"]);
opciones.push(["CSHAR", "C#", "C++"]);
opciones.push(["JAVA", "JAVASCRIPT", "PHP"]);
opciones.push(["JAVASCRIPT", "PHP", "JAVA"]);
opciones.push(["HTML", "CSS", "C++"]);
opciones.push(["PYTHON", "PHP", "HTML"]);
opciones.push(["RUBY", "PYTHON", "CSS"]);
opciones.push(["NETBEANS", "ECLIPSE", "RUBY"]);

let correcta = [1,2,1,0,0,1,2,1,2]; 
//variable que guarda la posicion actual 
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el momento 
let cantidadAcertadas = 0;

function comenzarJuego(){
//reseteamos las variables 
    posActual = 0;
    cantidadAcertadas = 0;
    
//activamos las pantallas necesarias 
    document.getElementById("pantalla-inicial").style.display = "none"; 
    document.getElementById("pantalla-juego").style.display = "block"; cargarBandera();
}

//funcion que carga la siguiente bandera y sus opciones 
function cargarBandera(){

    //controlo sis se acabaron las banderas 
    if(banderas.length <= posActual){
        terminarJuego();
    }else{//cargo las opciones
        
        //limpiamos las clases que se asignaron 
        limpiarOpciones();
        document.getElementById("imgBandera").src = "img/" + banderas[posActual]; 
        document.getElementById("n0").innerHTML = opciones[posActual][0]; 
        document.getElementById("n1").innerHTML = opciones[posActual][1]; 
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
     document.getElementById("n0").className = "nombre"; 
     document.getElementById("n1").className = "nombre"; 
     document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra"; 
    document.getElementById("l1").className = "letra"; 
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){ 
    if(opElegida==correcta[posActual]){//acertó
    //agregamos las clases para colocar el color verde a la opcion elegida 
    document.getElementById("n" + opElegida).className = "nombre nombreAcertada"; 
    document.getElementById("l" + opElegida).className = "letra letraAcertada"; 
    cantidadAcertadas++;
    }else{//no acerto
    //agregamos las clases para colocar en rojo la opcion elegida 
    document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
    document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
    
    //opcion que era correcta
    document.getElementById("n" + correcta[posActual]).className = "nombrenombreAcertada";
    document.getElementById("l" + correcta[posActual]).className = "letraletraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente bandera y sus opciones 
    setTimeout(cargarBandera, 1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final 
    document.getElementById("pantalla-juego").style.display = "none"; 
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados 
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas; 
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
}
function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial 
    document.getElementById("pantalla-final").style.display = "none"; 
    document.getElementById("pantalla-inicial").style.display = "block"; 
    document.getElementById("pantalla-juego").style.display = "none";
}
    
    