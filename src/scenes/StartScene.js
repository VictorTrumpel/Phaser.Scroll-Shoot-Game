import { Scene } from 'phaser'
import { gameSettings } from '../gameSettings'

export class StartScene extends Scene {
  constructor() {
    super('Start')
  }

  create(data) {    
    this.createBackground()

    if (data.score !== undefined) {
      this.createStats(data)
    }

    this.createText()
    this.initEvents()
  }

  createStats(data) {
    this.add.graphics()
      .fillStyle(0x000000, 0.5)
      .fillRoundedRect(gameSettings.width / 2 - 200, gameSettings.height / 2 - 200, 400, 400)

    const textTitle = data.isWin ? 'Level completed!' : 'Game Over'
    const textScore = `Score: ${data.score}`;
    const textStyle = {
        fontFamily: 'sans-serif',
        fontSize: '40px',
        fill: '#FFFFFF'
    };

    this.add.text(gameSettings.width / 2, 250, textTitle, textStyle).setOrigin(0.5);
    this.add.text(gameSettings.width / 2, 350, textScore, textStyle).setOrigin(0.5);
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