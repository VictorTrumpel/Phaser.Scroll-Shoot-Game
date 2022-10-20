import { gameSettings } from '../gameSettings'
import { MovableObject } from './MovableObject'

export class Fire extends MovableObject {
  static generate(scene, player) {
    return new Fire({
      scene, 
      x: player.x + player.width / 2, 
      y: player.y, 
      texture: 'fire',
      velocity: -750
    })
  } 

  isDead() {
    const firePositionX = this.x
    const fireWidth = this.width

    const sceneWidth = gameSettings.width
    
    const isFireOutRightBorder = firePositionX > fireWidth + sceneWidth
    const isFireOutLeftBorder = firePositionX < -this.width

    return isFireOutLeftBorder || isFireOutRightBorder
  }
}