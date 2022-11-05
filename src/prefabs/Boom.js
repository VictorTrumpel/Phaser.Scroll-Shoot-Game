import { GameObjects } from "phaser";

export class Boom extends GameObjects.Sprite {
  constructor(scene, x, y) {
    const texture = 'boom'
    const frame = 'boom1'

    super(scene, x, y, texture, frame)

    this.init()
  }

  init() {
    this.scene.add.existing(this)

    const frames = this.scene.anims.generateFrameNames('boom', {
      prefix: 'boom',
      start: 1,
      end: 4
    })

    this.scene.anims.create({
      key: 'destroy',
      frames,
      frameRate: 4,
      repeat: 1,
    })

    this.play('destroy', true)

    this.initEvents()
  }

  initEvents() {
    this.once('animationcomplete', this.destroy, this)
  }

}