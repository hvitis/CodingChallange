// This game runs on the older version of Phaser
// v. v2.6.2 - 2 y/o...

var rotation = 0;
var position = 1;
var move = 0;

var GameState = {
    preload: function() {
        this.load.image("background", "assets/images/background.jpg")
        this.load.image("car", "assets/images/car.png")
        this.load.image("carBlue", "assets/images/car_blue.png")
        this.load.image("carRed", "assets/images/car_red.png")
        this.load.image("arrow", "assets/images/arrow.png")
        this.load.image("arrow2", "assets/images/arrow.png")
        
    },
    create: function(){

        


        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // Setting background
        this.background = this.game.add.sprite(0, 0, "background")
        
        // Arrow user input
        // this.arrow = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "arrow" );
        // this.arrow.anchor.setTo(-2.5);
        this.arrow2 = this.game.add.sprite(35, 538, "arrow" );
        this.arrow2.scale.setTo(-0.3, -0.3);
        this.arrow2.inputEnabled = true;
        this.arrow2.input.pixelPerfectClick = true;
        this.arrow2.events.onInputDown.add(this.moveCarLeft, this);
        


        this.arrow = this.game.add.sprite(40, 500, "arrow" );
        this.arrow.customParams = {direction: 1};
        this.arrow.scale.setTo(0.3, 0.3);
        this.arrow.inputEnabled = true;
        this.arrow.input.pixelPerfectClick = true;
        this.arrow.events.onInputDown.add(this.moveCarRight, this);
        

        this.car = this.game.add.sprite(20, this.game.world.centerY, "car" );
        // Adding Anchorpoint to place the object on the center of the screen
        this.car.anchor.setTo(0.8);
        this.car.scale.setTo(-0.3, 0.3);
        
        var carData = [
            {key: "car", text: "I'm THE car"},
            {key: "carBlue", text: "I'm the blue car!"},
            {key: "carRed", text: "I'm the red car."},
            {key: "arrow", text: "Arrow"}
        ];
        }
    ,
    moveCarRight : function(sprite, event) {
        
         move = move + 100;
         console.log(move)
         var newCar = this.car;
         var newMove = game.add.tween(newCar);
         newMove.to({x: move}, 500)
         newMove.start();
     },
    update: function() {
    },

    moveCarLeft : function(sprite, event) {
        move = move - 100;
        console.log(move)
        var newCar = this.car;
        var newMove = game.add.tween(newCar);
        newMove.to({x: move}, 100)
        newMove.start();
    },

}

var game = new Phaser.Game(1268, 600, Phaser.AUTO);
game.state.add("GameState", GameState);
game.state.start("GameState");





        /*
            var carBlue = {
            car: this.carBlue = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "carBlue" ),
                // Adding Anchorpoint to place the object on the center of the screen
            anchor: this.carBlue.anchor.setTo(0.5, 2),
            scale:  this.carBlue.scale.setTo(0.2),
           // flip:  this.carBlue.scale.setTo(-0.2, -0.2),
            angle: this.carBlue.angle = 35,
            };
        
        */

        /*         
            var posX = this.car.anchor.setTo(1, 1);
            var posZ = this.car.anchor.setTo(2, 2);
            var CarMove = game.add.tween(posX);
            CarMove.to({x: posZ}, 5000)
            CarMove.start();
*/

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


        /*
        this.cars = this.game.add.group();
        
        var self = this;
        var car;
        carData.forEach(function(element){
            car = self.cars.create(self.game.world.centerX, self.game.world.centerY, element.key);
            car.anchor.setTo(0.5)
        });

        */
