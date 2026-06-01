function fun(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    if(email==""||password==""){
        alert("Please fill alll the details");
    }
    else{
        alert("Login successful");
    }
}