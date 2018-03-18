function talksAbout (node, string) {
    if (node.nodeType == document.ELEMENT_NODE) {
        for (var i = 0; i < node.childNodes.length; i++) {
            if (talksAbout(node.childNodes[i], string))
                return true;
        }
        return false;
    } else if (node.nodeType == document.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
    }
}

console.log(talksAbout(document.body, "book"));

// finding elements
var link = document.body.getElementsByTagName("a")[0];
var link2 = document.body.getElementsByClassName

// document.getElementById
// document.getElementsByClassName
//_________________________________________
function replaceImages() {
    var images = document.body.getElementsByTagName("img");
    for (var i = images.length - 1; i >= 0; i--) {
        var image = images[i];
        if (image.alt) {
            var text = document.createTextNode(image.alt);
            image.parentNode.replaceChild(text, image);
        }
    }
}


//___________________________________________
var arrayish = {0: "one", 1: "two", length: 2}
var real = Array.prototype.slice.call(arrayish, 0);
real.forEach(function(elt) {sonsole.log(alt); });


//___________________________________________
var elt = document.getElementById("start-of-content");
console.log(elt);

//___________________________________________

var x = document.querySelectorAll("p.intro"); 
var x = document.getElementsByClassName("intro"); 
var x = document.getElementById("main");
var y = x.getElementsByTagName("p");
var x = document.getElementsByTagName("p"); 
var myElement = document.getElementById("intro");
