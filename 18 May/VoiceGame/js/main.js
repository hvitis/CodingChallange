// This game runs on the older version of Phaser
// v. v2.6.2 - 2 y/o...




var GameState = {
    preload: function() {
        this.load.image("background", "assets/images/background.jpg")
        this.load.image("car", "assets/images/car.png")
        this.load.image("carBlue", "assets/images/car_blue.png")
        this.load.image("carRed", "assets/images/car_red.png")
        this.load.image("arrow", "assets/images/arrow.png")
        
    },
    create: function(){

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // Setting background
        this.background = this.game.add.sprite(0, 0, "background")
        /*
        var arrow_right = {
            arrow :  this.arrow = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "arrow" ),
            anchor: this.arrow.anchor.setTo(-2.5),
            scale: this.arrow.scale.setTo(0.3)
        }
        var arrow_left = {
            arrow :  this.arrow = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "arrow" ),
            anchor: this.arrow.anchor.setTo(-2.5),
            scale: this.arrow.scale.setTo(-0.3)
        }
        */
// Arrow user input
        this.arrow = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "arrow" );
        this.arrow.anchor.setTo(-2.5);
        this.arrow.scale.setTo(0.3);
        this.arrow.inputEnabled = true;
        this.arrow.input.pixelPerfectClick = true;
       // this.arrow.events.onInputDown.add(this.FUNCTION TO CREATE, this);
       

        var car = {
                car: this.car = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "car" ),
                // Adding Anchorpoint to place the object on the center of the screen
                anchor: this.car.anchor.setTo(0.5),
                scale: this.car.scale.setTo(0.3),
            }
        var carBlue = {
            car: this.carBlue = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "carBlue" ),
                // Adding Anchorpoint to place the object on the center of the screen
            anchor: this.carBlue.anchor.setTo(0.5, 2),
            scale:  this.carBlue.scale.setTo(0.2),
            flip:  this.carBlue.scale.setTo(-0.2, -0.2),
            angle: this.carBlue.angle = 45,
            };
        }
    ,
    update: function() {
        this.carBlue.angle += -1;
    }

}

var game = new Phaser.Game(1268, 600, Phaser.AUTO);
game.state.add("GameState", GameState);
game.state.start("GameState");
