/*global Phaser, window*/
import BootScene from './scenes/BootScene.js';
import Scene0 from './scenes/scene0.js';
import Scene1 from './scenes/scene1.js';
import Scene2 from './scenes/scene2.js';
import Scene3 from './scenes/scene3.js';
import Scene4 from './scenes/scene4.js';
import Scene5 from './scenes/scene5.js';
import Scene6 from './scenes/scene6.js';
import Scene7 from './scenes/scene7.js';
import Scene8 from './scenes/scene8.js';
import Scene9 from './scenes/scene9.js';
import Config from './config/config.js';

class Game extends Phaser.Game {
  constructor () {
    super(Config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Scene0', Scene0);
    this.scene.add('Scene1', Scene1);
    this.scene.add('Scene2', Scene2);
    this.scene.add('Scene3', Scene3);
    this.scene.add('Scene4', Scene4);
    this.scene.add('Scene5', Scene5);
    this.scene.add('Scene6', Scene6);
    this.scene.add('Scene7', Scene7);
    this.scene.add('Scene8', Scene8);
    this.scene.add('Scene9', Scene9);
    this.scene.start('Boot');
  }
}

window.game = new Game();
