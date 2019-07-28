    function validaate(){
    var email = document.forms["form"]["email"].value;
            var username=document.forms["form"]["username"].value;
            var password=document.forms["form"]["password"].value;
            if (email == "") {
              alert("email must be filled out");
              return false;
            }
            else

            if(username==""){
                alert("username must be filled");
            }
            else
            if(password==""){
                alert("password must be filled");
            }
            else{document.write("the form is valid");}
          
}
