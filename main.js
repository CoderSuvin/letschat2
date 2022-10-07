function LogIn(){
    var user_name =document.getElementById("User_Input").value;
    localStorage.setItem("user_name", user_name);
    window.location="fkwitterRoom.html";
}