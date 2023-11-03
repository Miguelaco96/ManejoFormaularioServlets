function validarForma(forma){
    var usuario=forma.usuario;
    if(usuario.value=="" || usuario.value == "Escribir Usuario"){
        
        alert("escribe usuario");
        usuario.focus();
        usuario.select();
        return false;
        
    }
    var password = forma.password;
    
    if(password.value==""){
        
        alert("escribe contrsaeña");
        usuario.focus();
        usuario.select();
        return false;
        
    }
    

}


