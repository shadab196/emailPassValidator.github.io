
const form = document.getElementById("form");
const msg = document.getElementById("hi");


form.addEventListener("submit",function(event){
event.preventDefault();

const email = document.getElementById("email");
const pass = document.getElementById("password");

const email_value = email.value;
const pass_value = pass.value;

if(isValidEmail(email_value) && isValidPass(pass_value)){

     msg.innerText = "login successfull! ";
     msg.style.color = "green";

     form.submit();



}
else{
msg.innerText = "invalid email or password!";
msg.style.color = "red";


}


});

function isValidEmail(email){
     return email.includes("@");
}

function isValidPass(pass){
     return pass.length>=8;
}






