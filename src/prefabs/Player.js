import { gameSettings } from '../gameSettings'
import { Enemy } from './Enemy'
import { Fire } from './Fire'
import { Fires } from './Fires'

export class Player extends Enemy {
  constructor(scene) {
    super({
      scene, 
      x: 150, 
      y: gameSettings.height / 2, 
      texture: 'dragon', 
      frame: 'dragon1',
      velocity: 500
    })
  }

  init() {
    super.init({ velocity: 500 })
    this.fires = new Fires(this.scene, this)

    this.timer = this.scene.time.addEvent({
      delay: 500,
      loop: true,
      callback: this.fire,
      callbackScope: this
    })
  }

  fire() {
    this.fires.createFire(this)
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