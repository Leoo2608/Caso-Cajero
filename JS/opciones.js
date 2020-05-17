function cancel(){
    var elemento = document.getElementById("caja-password");
    elemento.value = ""; 
}


function clean(){
    var elemento = document.getElementById("caja-password");
    elemento.value =  elemento.value.substring(0, elemento.value.length - 1);
}


var constraseña_real = "12345678";
class Usuario{
    constructor(constraseña){
        this.constraseña = constraseña;
    };
    constraseña(){
        return this.constraseña;
    };
};
function ok(){
    var user = new Usuario(document.getElementById("caja-password").value)
    if(user.constraseña == ""){
        alert("Porfavor, ingrese una contraseña...")
    }else{
        if(user.constraseña == constraseña_real){
            alert("Logeo Correcto");
            window.location = "menu.html"
            /*logeado = true;
            if(logeado){
                window.location = "menu.html"
            }else{
                alert("Logeo no admitido");
            }*/
        }else{
            alert("Contraseña Incorrecta!");
            var elemento = document.getElementById("caja-password");
            elemento.value = ""; 
        }
    }
}
