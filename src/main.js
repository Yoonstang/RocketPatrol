/* Spencer Kim 
Rocket Partrol Mods
6/2/22
took about 20hrs so...

I think i did Implement a simultaneous two-player mode (30)
Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (20)
Allow the player to control the Rocket after it's fired (5)
Add your own (copyright-free) background music to the Play scene (5)

*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyA, keyD, keyP;