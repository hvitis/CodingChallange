var black = document.body.style.background = "black"
document.querySelector(".btn-primary").addEventListener("click", function() {
    if (document.body.style.background == "black none repeat scroll 0% 0%")
    {
        document.body.style.background = "white none repeat scroll 0% 0%"
    } 
    else 
    {
        document.body.style.background = "black none repeat scroll 0% 0%"  
    }
})


/*
// var green = document.querySelector(".btn-primary").style.background = "red"
document.querySelector(".btn-primary").addEventListener("click", function() {
    if(document.querySelector(".btn-primary").style.background != "red"){
        document.querySelector(".btn-primary").style.background = "red"
    }})

    // Why its working only with the first button??
*/