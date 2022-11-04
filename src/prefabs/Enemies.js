import * as Phaser from 'phaser'
import { Enemy } from './Enemy'
import { Fires } from './Fires'

export class Enemies extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene)

    this.fires = new Fires(scene)

    this.scene = scene
    this.countMax = 10
    this.countCreated = 0
    this.killedEnemies = 0

    this.timer = this.scene.time.addEvent({
      delay: 1000,
      loop: true,
      callback: this.onTimerTick,
      callbackScope: this
    })
  }

  onTimerTick() {
    if (this.countCreated < this.countMax) {
      this.createEnemy()
      return
    }
    this.timer.remove()
  }

  onEnemyKilled() {
    this.killedEnemies += 1

    if (this.killedEnemies === this.countMax) {
      this.emit('enemies-killed')
    }
  }

  createEnemy() {
    let enemy = this.getFirstDead()

    if (!enemy) {
      enemy = Enemy.generate(this.scene, this.fires)
      enemy.on('killed', this.onEnemyKilled, this)
      this.add(enemy)
    } else {
      enemy.reset()
    }

    enemy.move()
    ++this.countCreated
  }
}