import Phaser from 'phaser'
import { StartScene } from './scenes/StartScene'
import { BootScene } from './scenes/BootScene'
import { PreloadScene } from './scenes/PreloadScene'
import { GameScene } from './scenes/GameScene'
import { gameSettings } from './gameSettings'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  ...gameSettings,
  scene: [
    BootScene, 
    PreloadScene, 
    StartScene, 
    GameScene
  ],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  }
};

new Phaser.Game(config);
