const form1=document.getElementById("form1");
const email=document.getElementById("email");
const password=document.getElementById("password");

    document.querySelector("#pass").addEventListener('click',function(){
        password.type ="text";
        document.querySelector("#passhide").style ="visibility:visible";
        document.querySelector("#pass").style ="visibility:hidden";
    })
    document.querySelector("#passhide").addEventListener('click',function(){
        password.type ="password";
        document.querySelector("#passhide").style ="visibility:hidden";
        document.querySelector("#pass").style ="visibility:visible";
    })

    document.querySelector("#logsub").addEventListener('click',e =>{
        e.preventDefault();
        check();
        compare();
    });
    function compare(){
        let e1 =email.value.trim();
        let e2 =email2.value.trim();
        let ph =phone.value;
        let pass =password.value.trim();
        let pass1 =password1.value.trim();
        if(e1 == ""){
        }else{
        if(e1 == e2 || e1 == ph){
            if(pass == pass1){
                window.location.href ='profile.html'
            }else{
                alert("password incorrect");
            }
        }else{
            alert("invalid email or phone");
        }
    }
}
    function check(){
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        document.querySelector("#passhide").style ="visibility:hidden";
        document.querySelector("#pass").style ="visibility:hidden";

    if(emailValue == ''){
        setError(email, 'email cannot be blank');
    }
    else {
        setSuccess(email)
    }
    if(passwordValue == ''){
        setError(password, 'password cannot be blank');
    }
    else {
            setSuccess(password)
        }
    }

    function setError(input, message){
        const formControl =input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className ='form-control error';
        small.innerText =message;
    }
    function setSuccess(input){
        const formControl =input.parentElement;
        formControl.className ='form-control success';
    }

/*----------------------SIGN IN----------------------*/

const form2=document.getElementById("form2");
const username=document.getElementById("username");
const email2=document.getElementById("email2");
const phone=document.getElementById("phone");
const password1=document.getElementById("password1");
const password2=document.getElementById("password2");

        document.querySelector("#sub").addEventListener('click',e =>{
            e.preventDefault();
            checkInput();
       });

        function checkInput(){
            const usernameValue = username.value.trim();
            const emailValue2 = email2.value.trim();
            const passwordValue1 = password1.value.trim();
            const passwordValue2 = password2.value.trim();
            const phoneValue = phone.value.trim();
           
        if(usernameValue == ''){
            setError(username, 'username cannot be blank');
        }
        else {
            setSuccess(username)
        }

        if(emailValue2 == ''){
            setError(email2, 'email cannot be blank');
        }
        else {
            setSuccess(email2)
        }
        if(phoneValue == ''){
            setError(phone, 'phone cannot be blank');
        }
        else {
            setSuccess(phone)
        }
        
        if(passwordValue1 == ''){
            setError(password1, 'password cannot be blank');
        }
        else {
            setSuccess(password1)
        }

        if(passwordValue2 == ''){
            setError(password2, 'password cannot be blank');
        }
        else if(passwordValue1 != passwordValue2){
            setError(password2, 'password does not match');
        }
        else {
            setSuccess(password2);
            document.querySelector("#sign").style="display: none";
            document.querySelector("#log").style="display:visible";
            
        }
    };

    function setError(input, message){
        const formControl =input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className ='form-control error';
        small.innerText =message;
    };
    function setSuccess(input){
        const formControl =input.parentElement;
        formControl.className ='form-control success';
    };

        document.querySelector("#signin").addEventListener("click",function(){
            document.querySelector("#sign").style="display: visible";
            document.querySelector("#log").style="display:none";
        });
        document.querySelector("#login").addEventListener("click",function(){
            alert("please fill the details and click submit");
        });
