var constraseña_real = "123456789";
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
    if(user.constraseña == constraseña_real){
        alert("Logeo Correcto");
        logeado = true;
        if(logeado){
            window.location = "menu.html"
        }else{
            alert("Logeo no admitido");
        }
    }else{
        alert("Contraseña Incorrecta!");
        var elemento = document.getElementById("caja-password");
        elemento.value = ""; 
    }
}
