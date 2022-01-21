document.querySelector("#join").addEventListener("click",addData);

    var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
    function addData(event){
        event.preventDefault();
        var fstname=document.querySelector("#fname").value;
        var lstname=document.querySelector("#lname").value;
        var emlname=document.querySelector("#Ename").value;
        var passname=document.querySelector("#pass").value;
        var userName=document.querySelector("#userN").value;
       
   
    var userCard={
        firstname:fstname,
        lastname:lstname,
        emailname:emlname,
        passwordname:passname,
       userid:userName,
    };
    userData.push(userCard);
    localStorage.setItem("userDatabase", JSON.stringify(userData));

    if(fstname == "" || lstname == "" || emlname == "" || passname == "" ||userName==""){
        if(passname.length <= 5){
            alert("Please fill all information");
        }
        else{
            alert("Please fill all information");
        }
    }
    else {
        alert("Register successfull");
    }
}
document.querySelector(".eml").addEventListener("click",function(){
    window.location.href="login.html"
})