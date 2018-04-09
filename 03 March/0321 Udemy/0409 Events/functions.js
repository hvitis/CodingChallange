var red = document.body.style.background = "red"
document.querySelector("button").addEventListener("click", function() {
    if (document.body.style.background == "red none repeat scroll 0% 0%")
    {
        document.body.style.background = "blue none repeat scroll 0% 0%"
    } 
    else 
    {
        document.body.style.background = "red none repeat scroll 0% 0%"  
    }
})

// var green = document.querySelector(".btn-primary").style.background = "red"
document.querySelector(".btn-primary").addEventListener("click", function() {
    if(document.querySelector(".btn-primary").style.background != "red"){
        document.querySelector(".btn-primary").style.background = "red"
    }})

    // Why its working only with the first button??
