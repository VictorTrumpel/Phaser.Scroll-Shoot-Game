import { GameObjects } from 'phaser'
import { gameSettings } from '../gameSettings'

export class ScoreCounter extends GameObjects.Text {
  baseString = 'Score: '
  score = 0

  constructor(scene, x, y) {
    super(scene, x, y, 'Score: ' + 0, { 
      fontFamily: 'sans-serif',
      fontSize: '45px',
      color: 'black'
    })

    this.init()
  }

  init() {
    this.scene.add.existing(this)
  }

  update(count = 0) {
    this.score = count
    this.setText(this.baseString + count)
  }
}