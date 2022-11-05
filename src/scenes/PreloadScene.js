import { Scene } from 'phaser'

import dragonImage from '../assets/dragon.png'
import dragonAtlas from '../assets/dragon.json'

import enemyImage from '../assets/enemy.png'
import enemyAtlas from '../assets/enemy.json'

import fire from '../assets/fire.png'
import bullet from '../assets/bullet.png'

import boomImage from '../assets/boom.png'
import boomAtlas from '../assets/boom.json'

export class PreloadScene extends Scene {
  constructor() {
    super('Preload')
  }

  preload() {
    this.load.image('fire', fire)
    this.load.atlas('dragon', dragonImage, dragonAtlas)
    this.load.atlas('enemy', enemyImage, enemyAtlas)
    this.load.image('bullet', bullet)
    this.load.atlas('boom', boomImage, boomAtlas)
  }

  create() {
    console.log('preload assets done')
    this.scene.start('Start')
  }
}