if(window.location.href == "http://127.0.0.1:5500/index.html"){
      caja = "caja-password";
   }else if( window.location == "http://127.0.0.1:5500/otrascantidades.html"){
      caja = "caja-dinero";
   }  
function cancel(){
    var elemento = document.getElementById(caja);
    elemento.value = ""; 
}
function clean(){
    var elemento = document.getElementById(caja);
    elemento.value =  elemento.value.substring(0, elemento.value.length - 1);
}
var constraseña_real = "12345678";
class Usuario{
    constructor(constraseña, dinero){
        this.constraseña = constraseña;
        this.dinero = dinero;
    };
    constraseña(){
        return this.constraseña;
    };
    dinero(){
        return this.dinero;
    };
};

let usuarios = new Array();

function ok(){
    let user = new Usuario(document.getElementById("caja-password").value, 4000);
    /*usuarios.push(user);*/
    if(user.constraseña == ""){
        alert("Porfavor, ingrese una contraseña...")
    }else{
        if(user.constraseña == constraseña_real){
            alert("Logeo Correcto");
            /*alert("Su saldo inicial es de: S/."+user.dinero+" soles")*/
            window.location = "menu.html"
        }else{
            alert("Contraseña Incorrecta!");
            var elemento = document.getElementById("caja-password");
            elemento.value = ""; 
        }
    }
   
}
