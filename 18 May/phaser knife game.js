// the game itself
var game;

// global game options
var gameOptions = {

    // target rotation speed, in degrees per frame
    rotationSpeed: 3,

    // knife throwing duration, in milliseconds
    throwSpeed: 150,

    // minimum angle between two knives
    minAngle: 15
}

// once the window loads...
window.onload = function() {

    // game configuration object
    var gameConfig = {

        // render type
       type: Phaser.CANVAS,

       // game width, in pixels
       width: 750,

       // game height, in pixels
       height: 1334,

       // game background color
       backgroundColor: 0x444444,

       // scenes used by the game
       scene: [playGame]
    };

    // game constructor
    game = new Phaser.Game(gameConfig);

    // pure javascript to give focus to the page/frame and scale the game
    window.focus()
    resize();
    window.addEventListener("resize", resize, false);
}

// PlayGame scene
class playGame extends Phaser.Scene{

    // constructor
    constructor(){
        super("PlayGame");
    }

    // method to be executed when the scene preloads
    preload(){

        // loading assets
        this.load.image("target", "target.png");
        this.load.image("knife", "knife.png");
    }

    // method to be executed once the scene has been created
    create(){

        // can the player throw a knife? Yes, at the beginning of the game
        this.canThrow = true;

        // group to store all rotating knives
        this.knifeGroup = this.add.group();

        // adding the knife
        this.knife = this.add.sprite(game.config.width / 2, game.config.height / 5 * 4, "knife");

        // adding the target
        this.target = this.add.sprite(game.config.width / 2, 400, "target");

        // moving the target on front
        this.target.depth = 1;

        // waiting for player input to throw a knife
        this.input.on("pointerdown", this.throwKnife, this);
    }

    // method to throw a knife
    throwKnife(){

        // can the player throw?
        if(this.canThrow){

            // player can't throw anymore
            this.canThrow = false;

            // tween to throw the knife
            this.tweens.add({

                // adding the knife to tween targets
                targets: [this.knife],

                // y destination
                y: this.target.y + this.target.width / 2,

                // tween duration
                duration: gameOptions.throwSpeed,

                // callback scope
                callbackScope: this,

                // function to be executed once the tween has been completed
                onComplete: function(tween){

                    // at the moment, this is a legal hit
                    var legalHit = true;

                    // getting an array with all rotating knives
                    var children = this.knifeGroup.getChildren();

                    // looping through rotating knives
                    for (var i = 0; i < children.length; i++){

                        // is the knife too close to the i-th knife?
                        if(Math.abs(Phaser.Math.Angle.ShortestBetween(this.target.angle, children[i].impactAngle)) < gameOptions.minAngle){

                            // this is not a legal hit
                            legalHit = false;

                            // no need to continue with the loop
                            break;
                        }
                    }

                    // is this a legal hit?
                    if(legalHit){

                        // player can now throw again
                        this.canThrow = true;

                        // adding the rotating knife in the same place of the knife just landed on target
                        var knife = this.add.sprite(this.knife.x, this.knife.y, "knife");

                        // impactAngle property saves the target angle when the knife hits the target
                        knife.impactAngle = this.target.angle;

                        // adding the rotating knife to knifeGroup group
                        this.knifeGroup.add(knife);

                        // bringing back the knife to its starting position
                        this.knife.y = game.config.height / 5 * 4;
                    }

                    // in case this is not a legal hit
                    else{

                        // tween to throw the knife
                        this.tweens.add({

                            // adding the knife to tween targets
                            targets: [this.knife],

                            // y destination
                            y: game.config.height + this.knife.height,

                            // rotation destination, in radians
                            rotation: 5,

                            // tween duration
                            duration: gameOptions.throwSpeed * 4,

                            // callback scope
                            callbackScope: this,

                            // function to be executed once the tween has been completed
                            onComplete: function(tween){

                                // restart the game
                                this.scene.start("PlayGame")
                            }
                        });
                    }
                }
            });
        }
    }

    // method to be executed at each frame
    update(){

        // rotating the target
        this.target.angle += gameOptions.rotationSpeed;

        // getting an array with all rotating knives
        var children = this.knifeGroup.getChildren();

        // looping through rotating knives
        for (var i = 0; i < children.length; i++){

            // rotating the knife
            children[i].angle += gameOptions.rotationSpeed;

            // turning knife angle in radians
            var radians = Phaser.Math.DegToRad(children[i].angle + 90);

            // trigonometry to make the knife rotate around target center
            children[i].x = this.target.x + (this.target.width / 2) * Math.cos(radians);
            children[i].y = this.target.y + (this.target.width / 2) * Math.sin(radians);
        }

    }
}

// pure javascript to scale the game
function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else{
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}