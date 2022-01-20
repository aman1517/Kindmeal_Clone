document.querySelector("#chan").addEventListener("click", close);
document.querySelector("#btmtxr").addEventListener("click", goSingup);
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