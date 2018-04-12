var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>Welcome to the homepage</h1>")
} )

app.get("/home", function(req, res){
    res.render("home.ejs")
} )

app.get("/friend/:person", function(req, res){
    var person = req.params.person;
    res.send("You are a friend of " + person)
} )

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server initiate")
})


// More responsive 

var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>Welcome to the homepage</h1>")
} )

app.get("/home", function(req, res){
    res.render("home.ejs")
} )

app.get("/friend/:person", function(req, res){
    var person = req.params.person;
    res.render("friend.ejs", {person: person})
} )

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server initiate")
})