document.querySelector("#gomeal").addEventListener("click", showproduct);

function showproduct(event){
  
        window.location.href = "mealDeal.html";
    }
    document.querySelector(".fb").addEventListener("click", gofbpg);

function gofbpg(event){
  
        window.location.href = "https://www.facebook.com/login.php";
    }

    document.querySelector("#kindfb").addEventListener("click", gofacebook);

    function gofacebook(event){
      
            window.location.href = "https://www.facebook.com/KindMeal.my";
        }
    document.querySelector(".goForSign").addEventListener("click",function(){
        window.location.href="SignUp.html"
    })
    document.querySelector(".eml").addEventListener("click",function(){
        window.location.href="login.html"
    })
