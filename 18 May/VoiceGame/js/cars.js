        var carBlue = {
            car: this.carBlue = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "carBlue" ),
                // Adding Anchorpoint to place the object on the center of the screen
            anchor: this.carBlue.anchor.setTo(0.5, 2),
            scale:  this.carBlue.scale.setTo(0.2),
            flip:  this.carBlue.scale.setTo(-0.2, -0.2),
            angle: this.carBlue.angle = 45,
            
        };

        module.exports = carBlue;