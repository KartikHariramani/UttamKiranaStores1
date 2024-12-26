const login= document.getElementsById("login")

log.oneclick=(e)=>
    e.preventDefault();

const username=document.getElementById("username") .value;
const passwordAddress= document.getElementById("password").value ;

cont getUser =localStorage.getItem("Username ")
cont getPass =localStorage.getItem("Password")


if(username=="" && passwordAddress==""){
    alert("All Field are neceesary")
}
else{
    if(usernameAddress == getUser && passwordAddress== getPass){
        alert("Login Sucessfull");
    }else{
        alert("Invalid Usernamne and Password")
    }
}