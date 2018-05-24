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
    },
    create: function() {
       this.background = this.game.add.sprite(0,0, "dom");
       
       this.fruit = this.game.add.sprite(100, 100, "fruit");

       this.muminek = this.game.add.sprite(100,400, "muminek")
       this.muminek.scale.setTo(0.3)
       this.muminek.anchor.setTo(0.4);
       this.muminek.customParams = {health: 100, fun: 100};
       
    },


}

var game = new Phaser.Game(500, 720, Phaser.AUTO);

game.state.add("GameState", GameState);
game.state.start("GameState");