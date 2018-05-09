const express = require("express");
const fs = require("fs");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res, next) => {
//    res.send("<h1>hello Express!</h1>");
    res.locals.statusCode = 200;
    res.locals.data = {
        name: "Adam",
        wzrost: 200,
        oczy: [
            "jedno",
            "drugie"
        ]
    };
    next();
});

app.get("/about", (req, res, next) => {
    res.locals.statusCode = 200;
    res.locals.data = "about";
    next();
});


// You can use a Middleware to handle the responses, 
// this middleware, because it was set after the routes, 
// it will be called after them (if the routes use next()),
// in this way you have the status answer, the data you are sending
// and even more important, you only have one point where you send the answers,
// so it is very easy to for example add additional headers.
app.use((req, res, next) => {
    res.status(res.locals.statusCode).send(res.locals.data);
    // You should start learning the new javascript things - http://www.jstips.co/en/javascript/keyword-var-vs-let/
    // new ways of declaring vars, "let" and "const"
    const now = new Date().toString();
    // Also, "template strings" using ``
    const log = `${now} [${req.method}] ${req.url} - ${res.locals.statusCode}:
    ${res.locals.data}`;
    console.log(log);
}); 

app.listen(3000);
