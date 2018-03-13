<button>Click me</button>
<p>No handler here.</p>
<script>
    var button = document.quetySelector("button");
    button.addEventListener("click", function () {
        console.log("Button clicked.");
    });
</script>

// ________ cool color manipulation

<p>This page returns violet when you hold the V key.</p>
<script>
    addEventListener("keydown", function(event) {
        if (event.keyCode == 86)
        document.body.style.background = "violet";
    });
    addEventListener("keyup", function(event) {
        if (event.keyCode == 86)
        document.body.style.background = "";
    });
</script>