import { Scene } from 'phaser'
import { gameSettings } from '../gameSettings'
import background from '../assets/background.png'

export class StartScene extends Scene {
  constructor() {
    super('Start')
  }

  create() {    
    this.createBackground()
    this.createText()
    this.initEvents()
  }

  createBackground() {
    this.add.sprite(0, 0, 'bg').setOrigin(0)
  }

  createText() {
    this.add.text(gameSettings.width / 2, 500, 'Tap to start', { 
      fontFamily: 'sans-serif',
      fontSize: '50px',
      color: 'white'
    }).setOrigin(0.5)
  }

  initEvents() {
    this.input.on('pointerdown', () => {
      this.scene.start('Game')
    }, this)
  }
}