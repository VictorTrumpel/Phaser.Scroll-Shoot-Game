import { Scene } from 'phaser'

import dragonImage from '../assets/dragon.png'
import dragonAtlas from '../assets/dragon.json'

import enemyImage from '../assets/enemy.png'
import enemyAtlas from '../assets/enemy.json'

export class PreloadScene extends Scene {
  constructor() {
    super('Preload')
  }

  preload() {
    this.load.atlas('dragon', dragonImage, dragonAtlas)
    this.load.atlas('enemy', enemyImage, enemyAtlas)
    console.log('preload assets')
  }

  create() {
    console.log('preload assets done')
    this.scene.start('Start')
  }
}