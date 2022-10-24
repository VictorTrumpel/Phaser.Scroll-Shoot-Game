import { Physics } from 'phaser'
import { Fire } from './Fire'

export class Fires extends Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.worl, scene)
  }

  createFire(player) {
    let fire = this.getFirstDead()

    if (!fire) {
      fire = Fire.generate(this.scene, player)
      this.add(fire)
    } else {
      fire.reset(player.x, player.y)
    }

    fire.move()
  }
}