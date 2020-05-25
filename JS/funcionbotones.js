//* Funciones Clear, Cancel, Ok *//
function cancel(){
    var elemento = document.getElementById(idcaja);
    elemento.value = ""; 
}
function clean(){
    var elemento = document.getElementById(idcaja);
    elemento.value =  elemento.value.substring(0, elemento.value.length - 1);
}

//* Funciones Botones Primarios *//
function funcionesboton2(){
    if(document.getElementById("pantalla2").style.display == "block"){
        document.getElementById("pantalla2").style.display = "none";
        document.getElementById("pantalla3").style.display = "block";
    }else if(document.getElementById("pantalla3").style.display == "block"){
        document.getElementById("pantalla3").style.display = "none";
        document.getElementById("pantalla4").style.display = "block";
    }else if(document.getElementById("pantallaconsultas").style.display == "block"){
        document.getElementById("mensaje3").innerHTML = "Su saldo es de: S./"+user.saldo+" soles";
    }
  
}
function funcionesboton3(){
    if(document.getElementById("pantalla2").style.display == "block"){
        document.getElementById("pantalla2").style.display = "none";
        document.getElementById("pantallaconsultas").style.display = "block";
        document.getElementById("mensaje3").innerHTML = "";
    }
}
function funcionesboton8(){
    if(document.getElementById("pantalla3").style.display == "block"){
        document.getElementById("pantalla3").style.display = "none";
        document.getElementById("pantalla2").style.display = "block";
    }else if(document.getElementById("pantalla4").style.display == "block"){
        document.getElementById("pantalla4").style.display = "none";
        document.getElementById("pantalla3").style.display = "block";
    }else if(document.getElementById("pantalla5").style.display == "block"){
        document.getElementById("pantalla5").style.display = "none";
        document.getElementById("pantalla4").style.display = "block";
    }else if(document.getElementById("pantalla6").style.display == "block"){
        document.getElementById("pantalla6").style.display = "none";
        document.getElementById("pantalla7").style.display = "block";
    }
}

function funcionesboton7(){
    if(document.getElementById("pantalla4").style.display == "block"){
        document.getElementById("caja-dinero").value = ""; 
        document.getElementById("mensaje2").style.display = "none";
        document.getElementById("pantalla4").style.display = "none";
        document.getElementById("pantalla5").style.display = "block";
    }else if(document.getElementById("pantalla5").style.display == "block"){
        clean();
    }else if(document.getElementById("pantalla6").style.display == "block"){
        document.getElementById("caja-dinero").value = ""; 
        document.getElementById("mensaje2").style.display = "none"; 
        document.getElementById("mensaje2").style.color = "rgb(138, 0, 0)";
        document.getElementById("pantalla6").style.display = "none";
        document.getElementById("pantalla2").style.display = "block";
    }
}


function funcionesboton6(){
    if(document.getElementById("pantalla5").style.display == "block"){
        var elemento = document.getElementById("caja-dinero").value; 
        if(elemento == "" || elemento == 0){
          document.getElementById("mensaje2").style.display="block";
          document.getElementById("mensaje2").innerHTML = "Ingrese un monto...";
        }else{
          if(elemento%10 == 0){
            if(elemento>user.saldo){
              document.getElementById("mensaje2").style.display="block";
              document.getElementById("mensaje2").innerHTML = "No cuenta con suficiente saldo..";
              var elemento = document.getElementById("caja-dinero");
              elemento.value= "";
            }else{
              user.saldo = user.saldo - elemento;
              document.getElementById("mensaje2").style.display="block";
              document.getElementById("mensaje2").style.color="green";
              document.getElementById("mensaje2").innerHTML = "Procesando....";
              function ir(){
                document.getElementById("pantalla5").style.display = "none";
                document.getElementById("pantalla6").style.display = "block";
              }
              setTimeout(ir,1250);
            }
            }else{
              document.getElementById("mensaje2").style.display="block";
              document.getElementById("mensaje2").innerHTML = "Solo multiplos de 10.";
              var elemento = document.getElementById("caja-dinero");
              elemento.value= "";
            }
        }
    }else if(document.getElementById("pantallaconsultas").style.display == "block"){
        document.getElementById("pantallaconsultas").style.display = "none";
        document.getElementById("pantalla2").style.display = "block";
    }
}
//* USER , SALDO *//
