const express = require("express");
const fs = require("fs");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = "Now is " + now + req.method + req.url;
    console.log(log);
    fs.appendFile('server.log', log + "\r\n", (err) => {
        if (err) {
            console.log("Was unable to do that!");
        }
    });
    next();

}); 



app.get("/", (req, res) => {
//    res.send("<h1>hello Express!</h1>");
    res.send({
        name: "Adam",
        wzrost: 200,
        oczy: [
            "jedno",
            "drugie"
        ]
    })
});

app.get("/about", (req, res) => {
    res.send("About")}
);

app.listen(3000);