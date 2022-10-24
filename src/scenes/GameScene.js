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
    this.createCompleteEvents()
    this.addOverlap()
  }

  addOverlap() {
    this.physics.add.overlap(
      this.player.fires, 
      this.enemies, 
      this.onOverlap,
      null, 
      this
    )
    this.physics.add.overlap(
      this.enemies.fires,
      this.player,
      this.onOverlap,
      null,
      this
    )
    this.physics.add.overlap(
      this.enemies,
      this.player,
      this.onOverlap,
      null,
      this
    )
  }

  onOverlap(source, target) {
    source.setAlife(false)
    target.setAlife(false)
  }

  createCompleteEvents() {
    this.player.once('killed', this.onComplete, this)
  }

  onComplete() {
    // this.scene.start('Start')
  }

  update() {
    this.player.move()
    this.bg.tilePositionX += 0.5 
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

}