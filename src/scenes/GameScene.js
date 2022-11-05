import { Scene } from 'phaser'
import { gameSettings } from '../gameSettings'
import { Player } from '../prefabs/Player'
import { Enemies } from '../prefabs/Enemies'
import { ScoreCounter } from '../prefabs/ScoreCounter'

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
    this.scoreCounter = new ScoreCounter(this, 25, 25)

    this.createCompleteEvents()
    this.addOverlap()
  }

  addOverlap() {
    this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, null, this)
    this.physics.add.overlap(this.enemies.fires, this.player, this.onOverlap, null, this)
    this.physics.add.overlap(this.player, this.enemies, this.onOverlap, null, this)
  }

  onOverlap(source, target) {
    source.setAlife(false)
    target.setAlife(false)
  }

  createCompleteEvents() {
    this.player.once('killed', this.onComplete, this)
    this.enemies.once('enemies-killed', this.onComplete, this)
  }

  onComplete() {
    const isWin = this.player.active

    this.scene.start('Start', {
      score: this.scoreCounter.score,
      isWin
    })
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