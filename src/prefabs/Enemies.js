import { Physics } from 'phaser'
import { Enemy } from './Enemy'

export class Enemies extends Physics.Arcade.Group {
  constructor(scene) {
    super()
    this.scene = scene
    this.count = 10
    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.onTimerTick,
      callbackScope: this
    })

    console.log('this.timer :>> ', this.timer)
  }

  onTimerTick() {
    if (this.getLength() < this.count) {
      this.createEnemy()
      return
    }
    this.timer.remove()
  }

  createEnemy() {
    const enemy = Enemy.generate(this.scene)
    this.add(enemy)
    enemy.move()
  }
}