function confirmacion(){
    var elemento = document.getElementById("caja-dinero").value;
    var montofinal;   
        if(elemento == ""){
            alert("Ingrese un monto porfavor...");
        }else{
          if(elemento%10 == 0){
            window.location = "transaccion.html";
            }else{
              alert("Solo múltiplos de 10");
            }
        }
        
}
function returnretirosoles(){
    window.location = "retirosoles.html"
}

