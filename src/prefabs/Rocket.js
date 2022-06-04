// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, left, right, fire, frame) {
      super(scene, x, y, texture, frame);
  
      // add object to existing scene
      scene.add.existing(this);
      this.isFiring = false;    //track rocket's firing status
      this.moveSpeed = 2;       // pixels per frame
      this.left = left
      this.right = right
      this.fire = fire;
    }

    update() {
        // TODO: only move if not firing
        // TODO: clamp to visible area
	    if(this.left.isDown) {
    	this.x -= this.moveSpeed;
    } else if (this.right.isDown) {
    	this.x += this.moveSpeed;
    }
        // left/right movement
        if(!this.isFiring) {
            if(this.left.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (this.right.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }
        // fire button
        if(Phaser.Input.Keyboard.JustDown(this.fire) && !this.isFiring) {
            this.isFiring = true;
            console.log(this.sfxRocket)  // play sfx
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}