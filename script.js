    function validaateEmptyValues(){
    var txtEmail = document.getElementsByName(txtEmail) 
    var txtUsername = document.getElementsByName(txtUsername)
    var txtPassword = document.getElementById(txtPassword)
    
    var appendError="";
    if(txtEmail==""){
        if(appendError!="")
        appendError="email";
    }
    if(txtUsername==""){
        if(appendError!="")
        appendError=appendError+" un ";
    }
    if(txtPassword==""){
        if(appendError!="")
        appendError=appendError+"password";
    }
    if(appendError!=""){
        appendError=appendError+"cannot be empty";
        return false;
    }
        else
        return true;
    
}
