import { GameObjects, Math } from 'phaser'
import { gameSettings } from '../gameSettings'

export class Enemy extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    this.init()
  }

  // фабрика
  static generate(scene) {
    const x = gameSettings.width + 200
    const y = Math.Between(100, gameSettings.height - 100) 
    const texture = 'enemy'
    const id = Math.Between(1, 4)
    return new Enemy(scene, x, y, texture, `enemy${id}`)
  } 

  init() {
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.enable = true
    this.velocity = 250
  }

  move() {
    this.body.setVelocityX(-this.velocity)
  }
}