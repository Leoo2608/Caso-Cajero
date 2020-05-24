
// Estado de Pantallas //
document.getElementById("pantalla1").style.display="block";
document.getElementById("pantalla2").style.display="none";
document.getElementById("pantalla3").style.display="none";
document.getElementById("pantalla4").style.display="none";
document.getElementById("pantalla5").style.display="none";
document.getElementById("pantalla6").style.display="none";
document.getElementById("pantalla7").style.display="none";
document.getElementById("pantallaconsultas").style.display = "none";

// Usuario //

var constraseña_real = "12345678";

class Usuario{
    constructor(constraseña, saldo){
        this.constraseña = constraseña;
        this.saldo = saldo;
    };
    constraseña(){
        return this.constraseña;
    };
    saldo(){
        return this.saldo;
    };
};

let user = new Usuario("",5000);

function ok(){
    if(document.getElementById("pantalla1").style.display=="block"){

        user.constraseña = document.getElementById("caja-password").value;
        if(user.constraseña == ""){
        document.getElementById("mensaje").style.display="block";
        document.getElementById("mensaje").innerHTML ="Ingrese una contraseña...";
        }else{
            if(user.constraseña == constraseña_real){
            document.getElementById("mensaje").style.display="block";
            document.getElementById("mensaje").innerHTML ="***LOGEO CORRECTO***";
            document.getElementById("mensaje").style.color = "green";
            function ir(){
                document.getElementById("pantalla1").style.display="none";
                document.getElementById("pantalla2").style.display="block";
            }
            setTimeout(ir,1250);
            }else{
            document.getElementById("mensaje").style.display="block";
            document.getElementById("mensaje").innerHTML ="***CONTRASEÑA INCORRECTA***";
            var elemento = document.getElementById("caja-password");
            elemento.value = ""; 
            }
        }
    }
}