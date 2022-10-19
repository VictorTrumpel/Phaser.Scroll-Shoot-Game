import { Scene } from 'phaser'
import background from '../assets/background.png'

export class BootScene extends Scene {
  constructor() {
    super('Boot')
  }

  preload() {
    this.load.image('bg', background)
  }

  create() {
    this.scene.start('Preload')
  }
}