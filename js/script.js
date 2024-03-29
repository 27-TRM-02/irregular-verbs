var nivel = window.location.hash.substring(1);
console.log(nivel);
var tiempoAAdivinar = 0;
var verboElegido = 0;
var jugando = 0;
var marcador = 0;
var trofeos = 0;

//Para volver a index
function vuelve() {
  window.location.href = "index.html";
}

//Función de comprobación
//Si ganas suma puntos y cambia los botones
//Si pierdes marcador pasa a ser 0 y cambia el botón
//Puedes volver a pedir un verbo
function comprueba() {
  if (jugando == 0) {
    jugando = 1;
    var verboLeido = document.getElementById("caja").value;
    document.getElementById("botonresultado").classList.remove("btn-dark");
    //En este caso como learnt puede ser learned introducimos este "o" en el if para aceptar dos opciones
    if (
      verbos[verboElegido][tiempoAAdivinar] == verboLeido ||
      (verbos[verboElegido][tiempoAAdivinar] == "learnt" &&
        verboLeido == "learned")
    ) {
      //GANAR
      marcador++;
      document.getElementById("botonresultado").classList.add("btn-success");
      document.getElementById("botonresultado").innerText = "CORRECT";
    } else {
      //PERDER
      marcador = 0;
      document.getElementById("botonresultado").classList.add("btn-danger");
      document.getElementById("botonresultado").innerText =
        verbos[verboElegido][tiempoAAdivinar];
    }
  } else {
    jugando = 0;
    eligeVerbo();
    document.getElementById("botonresultado").classList.remove("btn-danger");
    document.getElementById("botonresultado").classList.remove("btn-success");
    document.getElementById("botonresultado").classList.add("btn-dark");
    document.getElementById("botonresultado").innerText = "COMPROBAR";
  }

  //Pinta las estrellas en función a los puntos que llevemos
  marcadorEstrellas(marcador);

  //Pasamos marcador a cero si hemos conseguido un trofeo(mirar método más abajo)
  if (cuantosPuntos(marcador) == 0) {
    marcador = 0;
  }
}

//En esta función elegimos el verbo que va a salir por pantalla(dependiendo del nivel que sea van a salir  más o menos verbos)
function eligeVerbo() {
  verboElegido = Math.floor(Math.random() * nivel);
  tiempoAAdivinar = Math.floor(Math.random() * 3);
  document.getElementById("castellano").innerHTML = verbos[verboElegido][3];

  if (tiempoAAdivinar == 0) {
    document.getElementById("btn1").innerHTML =
      "<input id='caja' class='form-control caja'>";
  } else {
    document.getElementById("btn1").innerHTML = verbos[verboElegido][0];
  }

  if (tiempoAAdivinar == 1) {
    document.getElementById("btn2").innerHTML =
      "<input id='caja' class='form-control caja'>";
  } else {
    document.getElementById("btn2").innerHTML = verbos[verboElegido][1];
  }

  if (tiempoAAdivinar == 2) {
    document.getElementById("btn3").innerHTML =
      "<input id='caja' class='form-control caja'>";
  } else {
    document.getElementById("btn3").innerHTML = verbos[verboElegido][2];
  }
  console.log(verbos[verboElegido][tiempoAAdivinar]);
}

//Esta función usa los arrays anteriores dependiendo del nivel para saber cuando hay
//que pintar una estrella
//Si marcador pasa a ser 0 se vuelven todas las estrellas blancas
function marcadorEstrellas(_marcador) {
  if (_marcador == 0) {
    for (let index = 1; index <= 10; index++) {
      document.getElementById(`star${index}`).style.color = "white";
      document.getElementById(`star${index}`).classList.remove("fa-star-half");
      document.getElementById(`star${index}`).classList.add("fa-star");
    }
  } else {
    if (_marcador % 2 == 0) {
      let selectorEstrella = `star${_marcador / 2}`;
      document
        .getElementById(selectorEstrella)
        .classList.remove("fa-star-half");
      document.getElementById(selectorEstrella).classList.add("fa-star");
      document.getElementById(selectorEstrella).style.color = "yellow";
    } else {
      let intMarcador = parseInt(_marcador / 2) + 1;
      let selectorEstrella = `star${intMarcador}`;
      document.getElementById(selectorEstrella).classList.remove("fa-star");
      document.getElementById(selectorEstrella).classList.add("fa-star-half");
      document.getElementById(selectorEstrella).style.color = "yellow";
    }
  }
}

//Esta función sirve para contar los puntos que faltan para un trofeo y actualiza los trofeos que tenemos
//Al conseguir un nuevo trofeo todos los iconos se ponen en blanco
function cuantosPuntos(marcador) {
  document.getElementById("contadorSpan").innerText =
    20 - marcador + " Points Left to Get a TROPHY";

  if (20 - marcador == 0) {
    if (trofeos == 0) {
      document.getElementById("trofeos").innerHTML =
        '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> ';
    } else {
      document.getElementById("trofeos").innerHTML +=
        '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> ';
    }
    trofeos++;
    trofeosCookies(trofeos);
    for (let index = 1; index <= 10; index++) {
      document.getElementById(`star${index}`).style.color = "white";
      document.getElementById(`star${index}`).classList.remove("fa-star-half");
      document.getElementById(`star${index}`).classList.add("fa-star");
    }
    return 0;
  } else {
    return -1;
  }
}

//Esta función sirve para, dependiendo del nivel, cargar unos iconos u otros
function creaNivel() {
  for (let index = 1; index <= 10; index++) {
    document.getElementById(
      "marcador"
    ).innerHTML += `<i class="fa fa-star" style="font-size:28px; color:white;" id="star${index}"></i>`;
  }
}

//Esta función actualiza y guarda las cookies de los trofeos ganados
function trofeosCookies(trofeos) {
  document.cookie = `trofeos${nivel}=${trofeos}; expires=Thu, 01 Jan 2022 00:00:00 UTC;`;
}

//Esta función va a servir para conseguir la información de la cookie que buscamos
//por su nombre
function getCookie(nombre) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${nombre}=`);
  return parts.pop().split(";").shift();
}

//Esta función va cargar la información de las cookies para que tengamos los trofeos que
//ya habíamos ganado en cada nivel de dificultad
function cargaCookie() {
  var resultado = getCookie(`trofeos${nivel}`);
  trofeos = resultado;
  if (trofeos != 0) {
    document.getElementById("trofeos").innerHTML = "";
    for (var i = 0; i < trofeos; i++) {
      document.getElementById("trofeos").innerHTML +=
        '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> ';
    }
  } else {
    document.getElementById("trofeos").innerHTML = "First Get A Trophy";
  }
}

cuantosPuntos(0);
cargaCookie();
creaNivel();
eligeVerbo();
