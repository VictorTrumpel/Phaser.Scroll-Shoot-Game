import { Math } from 'phaser'
import { MovableObject } from './MovableObject'
import { gameSettings } from '../gameSettings'

export class Enemy extends MovableObject {
  static generateAttributes() {
    const x = gameSettings.width + 200
    const y = Math.Between(100, gameSettings.height - 100) 
    const id = Math.Between(1, 4)
    const texture = 'enemy'
    const frame = 'enemy' + id

    return { x, y, texture, frame }
  }

  static generate(scene) {
    const { x, y, texture, frame } = Enemy.generateAttributes()
    return new Enemy({
      scene,
      x,
      y, 
      texture, 
      frame,
      velocity: 500
    })
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