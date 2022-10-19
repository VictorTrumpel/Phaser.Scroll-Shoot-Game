import { gameSettings } from '../gameSettings'
import { Enemy } from './Enemy'

export class Player extends Enemy {
  constructor(scene) {
    super(scene, 150, gameSettings.height / 2, 'dragon', 'dragon1')

    this.init()
  }

  init() {
    super.init()
    this.velocity = 500
  }

  move() {
    this.body.setVelocity(0)

    if (this.scene.cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity)
    } else if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(this.velocity)
    }

    if (this.scene.cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity)
    } else if (this.scene.cursors.down.isDown) {
      this.body.setVelocityY(this.velocity)
    }
  }
}