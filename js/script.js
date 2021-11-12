var nivel = window.location.hash.substring(1)
        console.log(nivel)
        var tiempoAAdivinar = 0;
        var verboElegido = 0;
        var jugando = 0;
        var marcador = 0;
        var trofeos = 0;

        //Para volver a index
        function vuelve(){
            window.location.href = 'index.html'
        }

        //Función de comprobación
        //Si ganas suma puntos y cambia los botones
        //Si pierdes marcador pasa a ser 0 y cambia el botón
        //Puedes volver a pedir un verbo
        function comprueba() {
            if (jugando == 0) {
                jugando = 1;
                var verboLeido = document.getElementById('caja').value;
                document.getElementById('botonresultado').classList.remove('btn-dark');
                //En este caso como learnt puede ser learned introducimos este "o" en el if para aceptar dos opciones
                if (verbos[verboElegido][tiempoAAdivinar] == verboLeido || verbos[verboElegido][tiempoAAdivinar] == "learnt" && verboLeido == "learned") {
                    //GANAR
                    marcador++;
                    document.getElementById('botonresultado').classList.add('btn-success');
                    document.getElementById('botonresultado').innerText = "CORRECT";
                } else {
                    //PERDER
                    marcador = 0;
                    document.getElementById('botonresultado').classList.add('btn-danger');
                    document.getElementById('botonresultado').innerText = verbos[verboElegido][tiempoAAdivinar];
                }
            } else {
                jugando = 0;
                eligeVerbo();
                document.getElementById('botonresultado').classList.remove('btn-danger');
                document.getElementById('botonresultado').classList.remove('btn-success');
                document.getElementById('botonresultado').classList.add('btn-dark');
                document.getElementById('botonresultado').innerText = "COMPROBAR";
            }

            //Pinta las estrellas en función a los puntos que llevemos
            marcadorEstrellas(marcador);

            //Pasamos marcador a cero si hemos conseguido un trofeo(mirar método más abajo)
            if(cuantosPuntos(marcador) == 0){
                marcador = 0;
            }
            
        }


        //En esta función elegimos el verbo que va a salir por pantalla(dependiendo del nivel que sea van a salir  más o menos verbos)
        function eligeVerbo() {
            if(nivel == 10){
                verboElegido = Math.floor(Math.random() * 10);
                tiempoAAdivinar = Math.floor(Math.random() * 3);
            } else if(nivel == 20){
                verboElegido = Math.floor(Math.random() * 20);
                tiempoAAdivinar = Math.floor(Math.random() * 3);
            } else if(nivel == 30){
                verboElegido = Math.floor(Math.random() * 30);
                tiempoAAdivinar = Math.floor(Math.random() * 3);
            } else if(nivel == 40){
                verboElegido = Math.floor(Math.random() * 40);
                tiempoAAdivinar = Math.floor(Math.random() * 3);
            } else if(nivel == 50){
                verboElegido = Math.floor(Math.random() * 50);
                tiempoAAdivinar = Math.floor(Math.random() * 3);
            } else if(nivel == 60){
                verboElegido = Math.floor(Math.random() * 60);
                tiempoAAdivinar = Math.floor(Math.random() * 3);
            } else if(nivel == 70){
                verboElegido = Math.floor(Math.random() * 70);
                tiempoAAdivinar = Math.floor(Math.random() * 3);
            } else if(nivel == 80){
                verboElegido = Math.floor(Math.random() * 80);
                tiempoAAdivinar = Math.floor(Math.random() * 3);
            } else if(nivel == 140){
                verboElegido = Math.floor(Math.random() * 140);
                tiempoAAdivinar = Math.floor(Math.random() * 3);
            }
            document.getElementById("castellano").innerHTML = verbos[verboElegido][3];

            if (tiempoAAdivinar == 0) {
                document.getElementById("btn1").innerHTML = "<input id='caja' class='form-control caja'>";
            } else {
                document.getElementById("btn1").innerHTML = verbos[verboElegido][0];
            }

            if (tiempoAAdivinar == 1) {
                document.getElementById("btn2").innerHTML = "<input id='caja' class='form-control caja'>";
            } else {
                document.getElementById("btn2").innerHTML = verbos[verboElegido][1];
            }

            if (tiempoAAdivinar == 2) {
                document.getElementById("btn3").innerHTML = "<input id='caja' class='form-control caja'>";
            } else {
                document.getElementById("btn3").innerHTML = verbos[verboElegido][2];
            }
            console.log(verbos[verboElegido][tiempoAAdivinar])
        }

        //Esta función usa los arrays anteriores dependiendo del nivel para saber cuando hay
        //que pintar una estrella 
        //Si marcador pasa a ser 0 se vuelven todas las estrellas blancas
        function marcadorEstrellas(_marcador){
            if(_marcador == 5){
                if(nivel == 140){
                    document.getElementById("star1").style.color = "black";
                } else {
                    document.getElementById("star1").style.color = "yellow";
                }
            } else if(_marcador == 10){
                if(nivel == 140){
                    document.getElementById("star2").style.color = "black";
                } else {
                    document.getElementById("star2").style.color = "yellow";
                }
            } else if(_marcador == 15){
                if(nivel == 140){
                    document.getElementById("star3").style.color = "black";
                } else{
                    document.getElementById("star3").style.color = "yellow";
                }
            } else if(_marcador == 20){
                if(nivel == 140){
                    document.getElementById("star4").style.color = "black";
                } else {
                    document.getElementById("star4").style.color = "yellow";
                }
            } else if(_marcador == 25){
                if(nivel == 140){
                    document.getElementById("star5").style.color = "black";
                } else {
                    document.getElementById("star5").style.color = "yellow";
                }
            } else if(_marcador == 30){
                if(nivel == 140){
                    document.getElementById("star6").style.color = "black";
                } else {
                    document.getElementById("star6").style.color = "yellow";
                }
            } else if(_marcador == 35){
                if(nivel == 140){
                    document.getElementById("star7").style.color = "black";
                } else {
                    document.getElementById("star7").style.color = "yellow";
                }
            } else if(_marcador == 40){
                if(nivel == 140){
                    document.getElementById("star8").style.color = "black";
                } else {
                    document.getElementById("star8").style.color = "yellow";
                }
            } else if(_marcador == 45){
                if(nivel == 140){
                    document.getElementById("star9").style.color = "black";
                } else {
                    document.getElementById("star9").style.color = "yellow";
                }
            } else if(_marcador == 50){
                if(nivel == 140){
                    document.getElementById("star10").style.color = "black";
                } else {
                    document.getElementById("star10").style.color = "yellow";
                }
            } else if(_marcador == 0){
                document.getElementById("star1").style.color = "white";
                document.getElementById("star2").style.color = "white";
                document.getElementById("star3").style.color = "white";
                document.getElementById("star4").style.color = "white";
                document.getElementById("star5").style.color = "white";
                document.getElementById("star6").style.color = "white";
                document.getElementById("star7").style.color = "white";
                document.getElementById("star8").style.color = "white";
                document.getElementById("star9").style.color = "white";
                document.getElementById("star10").style.color = "white";
            }
               
        }

        //Esta función sirve para contar los puntos que faltan para un trofeo y actualiza los trofeos que tenemos
        //Al conseguir un nuevo trofeo todos los iconos se ponen en blanco
        function cuantosPuntos(marcador){
            document.getElementById("contadorSpan").innerText = (50-marcador) + " Points Left to Get a TROPHY";
            
            if(50-marcador == 0){
                if(trofeos == 0){
                    document.getElementById("trofeos").innerHTML = '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '

                } else {
                    document.getElementById("trofeos").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
                    
                }
                trofeos++;
                trofeosCookies(trofeos);
                document.getElementById("star1").style.color = "white";
                document.getElementById("star2").style.color = "white";
                document.getElementById("star3").style.color = "white";
                document.getElementById("star4").style.color = "white";
                document.getElementById("star5").style.color = "white";
                document.getElementById("star6").style.color = "white";
                document.getElementById("star7").style.color = "white";
                document.getElementById("star8").style.color = "white";
                document.getElementById("star9").style.color = "white";
                document.getElementById("star10").style.color = "white";
                return 0;
            } else {
                return -1;
            }
        }


        //Esta función sirve para, dependiendo del nivel, cargar unos iconos u otros
        function creaNivel(){
            if(nivel <=50){
                document.getElementById("marcador").innerHTML = '<i class="fa fa-star" style="font-size:28px; color:white;" id="star1"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star2"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star3"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star4"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star5"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star6"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star7"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star8"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star9"></i> <i class="fa fa-star" style="font-size:28px; color:white;" id="star10"></i>';
                
            } else if(nivel <=80){
                document.getElementById("marcador").innerHTML = '<i class="fa fa-flash" style="font-size:28px; color:white;" id="star1"></i>   <i class="fa fa-flash" style="font-size:28px; color:white;" id="star2"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star3"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star4"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star5"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star6"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star7"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star8"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star9"></i> <i class="fa fa-flash" style="font-size:28px; color:white;" id="star10"></i>';
                
            } else if(nivel <= 140){
                document.getElementById("marcador").innerHTML = '<i class="	fa fa-mortar-board" style="font-size:20px; color:white;" id="star1"></i>   <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star2"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star3"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star4"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star5"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star6"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star7"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star8"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star9"></i> <i class="fa fa-mortar-board" style="font-size:20px; color:white;" id="star10"></i>';
                
            }
        }


        //Esta función actualiza y guarda las cookies de los trofeos ganados
        function trofeosCookies(trofeos){
            if (nivel == 10){
                document.cookie = "trofeos10=" + trofeos + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            } else if (nivel == 20){
                document.cookie = "trofeos20=" + trofeos + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            } else if (nivel == 30){
                document.cookie = "trofeos30=" + trofeos + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            } else if (nivel == 40){
                document.cookie = "trofeos40=" + trofeos + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            } else if (nivel == 50){
                document.cookie = "trofeos50=" + trofeos + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            } else if (nivel == 60){
                document.cookie = "trofeos60=" + trofeos + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            } else if (nivel == 70){
                document.cookie = "trofeos70=" + trofeos + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            } else if (nivel == 80){
                document.cookie = "trofeos80=" + trofeos + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            } else if (nivel == 140){
                document.cookie = "trofeos140=" + trofeos + "; expires=Thu, 01 Jan 2022 00:00:00 UTC;"
            }
        }


        //Esta función va a servir para conseguir la información de la cookie que buscamos
        //por su nombre
        function getCookie(nombre){
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${nombre}=`);
            return parts.pop().split(';').shift();
        }


        //Esta función va cargar la información de las cookies para que tengamos los trofeos que
        //ya habíamos ganado en cada nivel de dificultad
        function cargaCookie(){
            if(nivel == 10){
                var resultado = getCookie("trofeos10");
                trofeos = resultado;
                if(trofeos != 0){
                    document.getElementById("trofeos").innerHTML = ''
                    for(var i = 0; i<trofeos; i++){
                    
                    document.getElementById("trofeos").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
                    } 
                }  else {
                    document.getElementById("trofeos").innerHTML = 'First Get A Trophy'
                }
            }
            if(nivel == 20){
                var resultado = getCookie("trofeos20");
                trofeos = resultado;
                if(trofeos != 0){
                    document.getElementById("trofeos").innerHTML = ''
                    for(var i = 0; i<trofeos; i++){
                    
                    document.getElementById("trofeos").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
                    }
                } else {
                    document.getElementById("trofeos").innerHTML = 'First Get A Trophy'
                }
            }
            if(nivel == 30){
                var resultado = getCookie("trofeos30");
                trofeos = resultado;
                if(trofeos != 0){
                    document.getElementById("trofeos").innerHTML = ''
                    for(var i = 0; i<trofeos; i++){
                    
                    document.getElementById("trofeos").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
                    }
                } else {
                    document.getElementById("trofeos").innerHTML = 'First Get A Trophy'
                }
            }
            if(nivel == 40){
                var resultado = getCookie("trofeos40");
                trofeos = resultado;
                if(trofeos != 0){
                    document.getElementById("trofeos").innerHTML = ''
                    for(var i = 0; i<trofeos; i++){
                    
                    document.getElementById("trofeos").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
                    }
                } else {
                    document.getElementById("trofeos").innerHTML = 'First Get A Trophy'
                }
            }
            if(nivel == 50){
                var resultado = getCookie("trofeos50");
                trofeos = resultado;
                if(trofeos != 0){
                    document.getElementById("trofeos").innerHTML = ''
                    for(var i = 0; i<trofeos; i++){
                    
                    document.getElementById("trofeos").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
                    }
                } else {
                    document.getElementById("trofeos").innerHTML = 'First Get A Trophy'
                }
            }
            if(nivel == 60){
                var resultado = getCookie("trofeos60");
                trofeos = resultado;
                if(trofeos != 0){
                    document.getElementById("trofeos").innerHTML = ''
                    for(var i = 0; i<trofeos; i++){
                    
                    document.getElementById("trofeos").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
                    }
                } else {
                    document.getElementById("trofeos").innerHTML = 'First Get A Trophy'
                }
            }
            if(nivel == 70){
                var resultado = getCookie("trofeos70");
                trofeos = resultado;
                if(trofeos != 0){
                    document.getElementById("trofeos").innerHTML = ''
                    for(var i = 0; i<trofeos; i++){
                    
                    document.getElementById("trofeos").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
                    }
                } else {
                    document.getElementById("trofeos").innerHTML = 'First Get A Trophy'
                }
            }
            if(nivel == 80){
                var resultado = getCookie("trofeos80");
                trofeos = resultado;
                if(trofeos != 0){
                    document.getElementById("trofeos").innerHTML = ''
                    for(var i = 0; i<trofeos; i++){
                    
                    document.getElementById("trofeos").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
                    }
                } else {
                    document.getElementById("trofeos").innerHTML = 'First Get A Trophy'
                }
            }
            if(nivel == 140){
                var resultado = getCookie("trofeos140");
                trofeos = resultado;
                if(trofeos != 0){
                    document.getElementById("trofeos").innerHTML = ''
                    for(var i = 0; i<trofeos; i++){
                    
                    document.getElementById("trofeos").innerHTML += '<i class="fa fa-trophy" style="font-size:28px; color:yellow;"></i> '
                    }
                } else {
                    document.getElementById("trofeos").innerHTML = 'First Get A Trophy'
                }
            }
        }

        
        cuantosPuntos(0);
        cargaCookie();
        creaNivel();
        eligeVerbo();