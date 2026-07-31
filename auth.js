/*
const login = document.getElementById("loginForm");
const register = document.getElementById("registerForm");

document
.getElementById("registerLink")
.addEventListener("click", ()=>{

    login.style.display="none";
    register.style.display="block";

});

document
.getElementById("loginLink")
.addEventListener("click", ()=>{

    login.style.display="block";
    register.style.display="none";

});
*/


//getting by ids
const form = document.querySelector("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");



if(email){
    email.addEventListener("input",()=>{

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(email.value)){
        email.style.border="2px solid green";
    }else{
        email.style.border="2px solid red";
    }

});

}

if(password){

password.addEventListener("input",()=>{

    if(password.value.length>=8){
        password.style.border="2px solid green";
        console.log(password);
        password.textContent="done";
    }else{
        password.style.border="2px solid red";
    }

});

}


//=======

if(confirmPassword){

confirmPassword.addEventListener("input",()=>{

    if(password.value===confirmPassword.value){
        confirmPassword.style.border="2px solid green";
    }else{
        confirmPassword.style.border="2px solid red";
    }

});

}


if(username){
form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email.value)){
        alert("Invalid Email");
        return;
    }
      //restrictions for pass or email
    if(password.value.length<8){
        alert("Password must be at least 8 characters");
        return;
    }

    if(password.value!==confirmPassword.value){
        alert("Passwords do not match");
        return;
    }


    //save to loacal storage
    localStorage.setItem("username",username.value);

    localStorage.setItem("email",email.value);
    alert("Registration Successful");

    window.location.href="index.html";

});

}


/*
const username1 = document.getElementById("username1");
if(!username1){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const savedEmail = localStorage.getItem("email");

    if(email.value===savedEmail){
        alert("Login Successful");
        console.log("LOGIN :::");
        window.location.href="index.html";
        //localStorage.clear();
    }else{
        alert("Email ");
    }

});
}
*/
