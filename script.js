    function validaate(){
var txtEmail = document.forms['form']['email'].value; 
     var txtUsername = document.forms['form']['username'].value; 
     var txtPassword = document.forms['form']['password'].value; 
    
     var appendError="";
             if(txtEmail==""){
                appendError="email";
             }
             if(txtUsername==""){
                 if(appendError!="")
                 appendError=appendError+" and "+"username";
                 
             }
             if(txtPassword==""){
                 if(appendError!="")
                 appendError=appendError+" and "+"password";
                 
             }
             if(appendError!=""){
                appendError=appendError+" can not be empty.";
                alert(appendError);
                return false;
            }
            else{
                alert("The form is valid");
            return true;
            }

          
}
    

