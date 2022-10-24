import { gameSettings } from '../gameSettings'
import { MovableObject } from './MovableObject'

export class Fire extends MovableObject {
  static generate(scene, player) {
    const { bullet } = player
    return new Fire({
      scene, 
      x: player.x, 
      y: player.y, 
      texture: bullet.texture,
      velocity: bullet.velocity,
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