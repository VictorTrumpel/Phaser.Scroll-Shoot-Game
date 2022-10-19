import { Scene } from 'phaser'
import { gameSettings } from '../gameSettings'
import { Player } from '../prefabs/Player'
import { Enemies } from '../prefabs/Enemies'

export class GameScene extends Scene {
  constructor() {
    super('Game')
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  create() {
    this.createBackground()
    this.player = new Player(this)
    this.enemies = new Enemies(this)

    // this.enemies.createEnemy()
    // this.enemies.createEnemy()
    // this.enemies.createEnemy()

  }

  createBackground() {
    this.bg = this.add.tileSprite(
      0, 
      0, 
      gameSettings.width, 
      gameSettings.height,
      'bg'
    ).setOrigin(0)
  }

  update() {
    this.player.move()
    this.bg.tilePositionX += 0.5 
  }

}