function fun(){
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let cpassword=document.getElementById("cpassword").value;
    if(username==""||email==""||password==""||cpassword==""){
        alert("Please fill alll the details");
    }
    else{
        alert("SignUp successful");
    }
}