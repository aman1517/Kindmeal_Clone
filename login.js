document.querySelector("#chan").addEventListener("click", close);
document.querySelector("#btn").addEventListener("click", gofbpge);
function close(evnt){
    window.location.href = "mealDeal.html";
}

function gofbpge(event){
    event.preventDefault();
  
        window.location.href = "https://www.facebook.com/login.php";
    }
    
function goSignup(event){
  
        window.location.href = "signUp.html";
    }

    // user login function

document.querySelector("#sub").addEventListener("click", addDetails);

function addDetails(event){
    event.preventDefault();
    var email = document.querySelector("#eml").value;
    
    var passwor = document.querySelector("#pass").value;

    var userdata = JSON.parse(localStorage.getItem("userDatabase"));
    var flag = 0;

    for(var i=0; i<userdata.length; i++){
        if((email == userdata[i].emailname) && (passwor == userdata[i].passwordname)){
            window.location.href = "landing.html";
            break;
        }
        else{
            alert("Invalid Email or Password");
            break;
        }
    }
}