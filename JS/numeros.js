var cond = false;
function dissapear(){
      if(cond == true && document.getElementById("pantalla1").style.display == "block"){
         document.getElementById("mensaje").style.display="none";
      }else if(cond == true && document.getElementById("pantalla5").style.display == "block" ){
         document.getElementById("mensaje2").style.display="none";
      }
}  
//*Validacion de Ventana*//
function prueba(){
   if(document.getElementById("pantalla1").style.display == "block"){
      caja = "caja-password";
      }
   if(document.getElementById("pantalla5").style.display == "block"){
         caja = "caja-dinero";
   }  
}
//* Teclas Numericas *//
function n1(){ 
   prueba();
   let sumado = document.getElementById("n1").innerHTML; 
   var elemento = document.getElementById(caja); 
   elemento.value = elemento.value + sumado;
   cond = true;
   dissapear();
}
function n2(){
   prueba();
   let sumado = document.getElementById("n2").innerHTML;
   var elemento = document.getElementById(caja);
   elemento.value = elemento.value + sumado; 
   cond = true;
   dissapear();
 }
 function n3(){
   prueba();
   let sumado = document.getElementById("n3").innerHTML;
   var elemento = document.getElementById(caja); 
   elemento.value = elemento.value + sumado; 
   cond = true;
   dissapear();
}
 function n4(){
   prueba();
   let sumado = document.getElementById("n4").innerHTML;
   var elemento = document.getElementById(caja);
   elemento.value = elemento.value + sumado;
   cond = true;
   dissapear();
 }
 function n5(){
   prueba();
   let sumado = document.getElementById("n5").innerHTML;
   var elemento = document.getElementById(caja);
   elemento.value = elemento.value + sumado;
   cond = true;
   dissapear();
   }
 function n6(){
   prueba();
   let sumado = document.getElementById("n6").innerHTML;
   var elemento = document.getElementById(caja);
   elemento.value = elemento.value + sumado;
   cond = true;
   dissapear();
   }
function n7(){
   prueba();
   let sumado = document.getElementById("n7").innerHTML;
   var elemento = document.getElementById(caja);
   elemento.value = elemento.value + sumado;
   cond = true;
   dissapear();
   }
function n8(){
   prueba();
   let sumado = document.getElementById("n8").innerHTML;
   var elemento = document.getElementById(caja);
   elemento.value = elemento.value + sumado;
   cond = true;
   dissapear();
   }
function n9(){
   prueba();
   let sumado = document.getElementById("n9").innerHTML;
   var elemento = document.getElementById(caja);
   elemento.value = elemento.value + sumado;
   cond = true;
   dissapear();
   }
function n11(){ 
   prueba();
   let sumado = document.getElementById("n11").innerHTML;
   var elemento = document.getElementById(caja);
   elemento.value = elemento.value + sumado;
   cond = true;
   dissapear();
   }
function n12(){ 
   prueba();
   let sumado = document.getElementById("n12").innerHTML;
   var elemento = document.getElementById(caja);
   elemento.value = elemento.value + sumado;
   cond = true;
   dissapear();
   }