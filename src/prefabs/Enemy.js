import { Math } from 'phaser'
import { MovableObject } from './MovableObject'
import { gameSettings } from '../gameSettings'
import { Fires } from './Fires'

export class Enemy extends MovableObject {
  static generateAttributes() {
    const x = gameSettings.width + 200
    const y = Math.Between(100, gameSettings.height - 100) 
    const id = Math.Between(1, 4)
    const texture = 'enemy'
    const frame = 'enemy' + id

    return { x, y, texture, frame }
  }

  static generate(scene, fires) {
    const { x, y, texture, frame } = Enemy.generateAttributes()
    return new Enemy({
      scene,
      fires,
      x,
      y, 
      texture, 
      frame,
      velocity: 250,
      bullet: {
        delay: 1000,
        texture: 'bullet',
        velocity: 700
      },
      origin: { x: 0, y: 0.5 }
    })
  } 

  init(data) {
    super.init(data)
    this.setOrigin(data.origin.x, data.origin.y)
    this.fires = data.fires || new Fires(this.scene)

    this.timer = this.scene.time.addEvent({
      delay: data.bullet.delay,
      loop: true,
      callback: this.fire,
      callbackScope: this
    })

    this.bullet = data.bullet
  }

  fire() {
    this.fires.createFire(this)
  }

  reset() {
    const { x, y, frame } = Enemy.generateAttributes()
    super.reset(x, y)
    this.setFrame(frame)
  }

  isDead() {
    return this.x < -this.width
  }
}