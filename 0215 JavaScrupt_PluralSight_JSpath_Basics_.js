var answer = prompt("Ile masz lat?: ");
undefined
if (answer === "26"){
alert("Yes");
}
else if(answer === "16"){
alert("tyle ma twoja siostra");
}
else {
    alert()
}

////////////////////////////////////////////////////
var randomNumber = Math.round(Math.random());
while(True){
var divResult = (randomNumber/3);
if (divResult) {
    alert("Podzielna przez 3");
    console.log(randomNumber);
break
}
}
////////////////////////////////////////////////////
var znak1 = prompt("Jaki jest Twoj znak zodiaku?").toLowerCase();
//alert(znak1);
switch (znak1){
  case "panna":
    alert("Kazdy sie z ciebie pewnie smieje");
    break;
  case "byk":
    alert("Musisz byc silny");
    break;
  default:
alert("To nie znak zodiaku");
break;
}
////////////////////////////////////////////////////
for (var i=0; i<=100; i++){
    console.log(i);
    if(i%3===0){
      console.log(i, "It is divided by 3");
    }
    else if(i%5===0){
       console.log(i, "It is divided by 5");
    }
    else{
      console.log("it is divided");
    }
  }
///////////////////////////////////////////////////
  var myCoffee = {
    flavour: 1,
    temperature: "hot",
    ounces: 100,
    milk: true,
    
    reheat: function(){
      if(myCoffee.temperature === "cold"){
        myCoffee.temperature = "piping hot";
        alert("Your coffee has been reheted!");
      }
    }
  };
  
  myCoffee.temperature = "cold";
  myCoffee.reheat();
  console.log(myCoffee.temperature);

  ////////////////////////////////////////////////////

  