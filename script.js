function login(){
    var uname=document.getElementById('username').value;
    var pass=document.getElementById('password').value;

    if(uname=="sobhan" && pass=="123")
    {
        location.assign("successful.html");

    }
    else{
        window.alert("Login Faild");
    }
}