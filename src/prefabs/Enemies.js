import * as Phaser from 'phaser'
import { Boom } from './Boom'
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

  onEnemyKilled(killedEnemy) {
    this.killedEnemies += 1

    new Boom(this.scene, killedEnemy.x, killedEnemy.y)

    this.scene.scoreCounter.update(this.killedEnemies)

    if (this.killedEnemies === this.countMax) {
      this.emit('enemies-killed')
    }
  }

  createEnemy() {
    let enemy = this.getFirstDead()

    if (!enemy) {
      enemy = Enemy.generate(this.scene, this.fires)
      enemy.on('killed', this.onEnemyKilled.bind(this, enemy), this)
      this.add(enemy)
    } else {
      enemy.reset()
    }

    enemy.move()
    ++this.countCreated
  }
}