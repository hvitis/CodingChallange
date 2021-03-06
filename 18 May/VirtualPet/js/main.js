// This game runs on the older version of Phaser
// v. v2.6.2 - 2 y/o...
var GameState = { 
    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignHorizontally = true;
    },
    preload: function() {
        this.load.image("muminek", "assets/muminek.png")
        this.load.image("dom", "assets/dom.jpg")
        this.load.image("fruit", "assets/fruit.png")
        this.load.image("acid", "assets/acid_pic.png")
        this.load.image("icecream", "assets/icecream.png")
        this.load.image("rotate", "assets/Rotate.png")
    },
    create: function() {
       this.background = this.game.add.sprite(0,0, "dom");
       this.background.inputEnabled = true;
       this.background.events.onInputDown.add(this.placeItem, this);


        // Load moomins
       this.muminek = this.game.add.sprite(100,400, "muminek")
       this.muminek.scale.setTo(0.3)
       this.muminek.anchor.setTo(0.4);
       // Custom parameters
       this.muminek.customParams = {health: 100, fun: 100};
        // Draggable pet
        this.muminek.inputEnabled = true;
        this.muminek.input.enableDrag(); 
        //this.muminek.events.onInputDown.add(this.rotateIt, this);

        // Load acid
       this.acid = this.game.add.sprite(100,150, "acid")
       this.acid.anchor.setTo(0.5);
       this.acid.inputEnabled = true;
       this.acid.customParams = {health: -10, fun : 20};
       this.acid.input.enableDrag(); 
       this.acid.events.onInputDown.add(this.pickItem, this);

         // Load iceCream
       this.icecream = this.game.add.sprite(150,100, "icecream");
       this.icecream.anchor.setTo(0.5);
       this.icecream.inputEnabled = true;
       this.icecream.customParams = {health: 30, fun : 20};
       this.icecream.input.enableDrag(); 
       this.icecream.events.onInputDown.add(this.pickItem, this);

        // Draggable apple
        this.fruit = this.game.add.sprite(100, 100, "fruit");
        this.fruit.inputEnabled = true;
        this.fruit.customParams = {health: 10};
        this.fruit.input.enableDrag();
        this.fruit.events.onInputDown.add(this.pickItem, this);

        // NotDraggable Rotate
        this.rotate = this.game.add.sprite(20, 490, "rotate");
        this.rotate.inputEnabled = true;
        //this.rotate.events.onInputDown.add(this.rotateIt, this);
        this.rotate.events.onInputDown.add(this.rotateIt, this);


        this.buttons = [this.fruit, this.rotate, this.icecream, this.acid]
    
        this.selectedItem = null;
        this.uiBlocked = false;
    },
    pickItem: function (sprite, event) {
        
        if(!this.uiBlocked) {
            console.log("Pick me")

            this.clearSelection();

            sprite.alpha = 0.4;

            this.selectedItem = sprite;
        }
    },
    rotateIt: function (sprite, event) {
        if(!this.uiBlocked) {
            console.log("Weeeeeeeeee")
            this.uiBlocked = true;
            this.clearSelection();
            //sprite.alpha = 0.4;

            var petRotation = this.game.add.tween(this.muminek)
            petRotation.to({angle: "+720"}, 1000);
            
            petRotation.onComplete.add(function() {
                this.uiBlocked = false;
                sprite.alpha = 1;
                this.muminek.customParams.fun += 10;
                console.log(this.muminek.customParams.fun)
            }, this)
            
            petRotation.start();

        }
        
    },
    clearSelection: function() {
        this.buttons.forEach(function(element, index) {
            element.alpha = 1;
        });
        this.selectedItem = null;
    },
    placeItem: function(sprite, event) {
        var x = event.position.x;
        var y = event.position.y;

        var newItem = this.game.add.sprite(x, y, this.selectedItem.key);
        newItem.anchor.setTo(0.5);
        newItem.customParams = this.selectedItem.customParams;
    }


}

var game = new Phaser.Game(500, 720, Phaser.AUTO);

game.state.add("GameState", GameState);
game.state.start("GameState");