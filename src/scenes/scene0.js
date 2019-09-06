/*global Phaser*/
import * as ChangeScene from "./ChangeScene.js";
export default class Scene0 extends Phaser.Scene {
  constructor () {
    super('Scene0');
  }

  init (data) {
    // Initialization code goes here
  }

  preload () {
    // Preload assets
    //Alien sprtieSheet from https://opengameart.org/content/platformer-art-deluxe
    this.load.spritesheet("alien", "./assets/spriteSheets/player.png", {
      frameHeight: 93,
      frameWidth: 67
    });

    //Dessert background from https://www.gameart2d.com/free-desert-platformer-tileset.html
    this.load.image("dessert", "./assets/images/background.png");

    // Declare variables for center of the scene
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create (data) {
    // Event listener to change scenes
    ChangeScene.addSceneEventListeners(this);

    //Add background to scene
    const background = this.add.sprite(1280 / 2, 960 / 2, "dessert");

    //Add player sprite with arcade physics and boundaries
    this.player = this.physics.add.sprite(100, 800, "alien");
    this.player.setCollideWorldBounds(true);
    this.physics.world.setBounds(0, 750, 1280, 210);
    //Create annimations from spriteSheet
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("alien", { start: 0, end: 4 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("alien", { start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
    });

    //Set main camera's bounraries and tell it follow the player
    this.cameras.main.setBounds(0, 0, 1280, 960);
    this.cameras.main.startFollow(this.player);
  }

  update (time, delta) {
    // Update the scene

    //Set speed of player
    var speed = 6;

    //Create cursor keys and assign events
    var cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
      this.player.x -= speed;
      this.player.anims.play("walk", true);
      this.player.flipX = true;
    } else if (cursors.right.isDown) {
      this.player.x += speed;
      this.player.anims.play("walk", true);
      this.player.flipX = false;
    } else {
      this.player.anims.play("idle", true);
    }
    if (cursors.up.isDown) {
      this.player.y -= speed;
    } else if (cursors.down.isDown) {
      this.player.y += speed;
    } else {
    }
  }
}
