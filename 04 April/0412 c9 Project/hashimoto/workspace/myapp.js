var express = require("express");
var app = express();

app.use(express.static("public"));


app.set("view engine", "ejs")
app.get("/", function(req, res){
    res.send("<h1>Welcome to the homepage</h1>")
} )

app.get("/home", function(req, res){
    res.render("home")
} )

app.get("/friend/:person", function(req, res){
    var person = req.params.person;
    res.render("friend", {person: person})
} )

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post1", author: "Adam"},
        {title: "Post2", author: "Jack"},
        {title: "Post3", author: "Mark"},
        {title: "Post4", author: "John"},
        {title: "Post5", author: "Susy"},
        
        ]
    res.render("posts", {posts: posts})
} )

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server initiate")
})