var caja;
var idcaja;
function validar(){
   if(document.getElementById("pantalla1").style.display == "block"){
      caja = document.getElementById("caja-password");
      idcaja = "caja-password";
   }else if(document.getElementById("pantalla5").style.display == "block"){
      caja = document.getElementById("caja-dinero");
      idcaja = "caja-dinero";
   }
}

function numero(n){
   validar();
   var s = caja.value;
   caja.value = s + n ;
   cond = true;
   dissapear();
}
//* Mensajes Pantalla*//
var cond = false;
function dissapear(){
      if(cond == true && document.getElementById("pantalla1").style.display == "block"){
         document.getElementById("mensaje").style.display="none";
      }else if(cond == true && document.getElementById("pantalla5").style.display == "block" ){
         document.getElementById("mensaje2").style.display="none";
      }
}  
