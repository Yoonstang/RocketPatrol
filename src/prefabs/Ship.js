//ship prefab
 class Ship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);   
        this.pointValue = 10; 
    }
 }