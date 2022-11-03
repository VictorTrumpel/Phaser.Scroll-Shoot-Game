import { GameObjects } from 'phaser'

export class MovableObject extends GameObjects.Sprite {
  constructor(data) {
    const { scene, x, y, texture, frame } = data
    super(scene, x, y, texture, frame)
    this.init(data)
  }

  init(data) {
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.enable = true
    this.velocity = data.velocity
    this.scene.events.on('update', this.update, this)
  }

  reset(x, y) {
    this.x = x
    this.y = y
    this.setAlife(true)
  }

  isDead() {
    return false
  }

  update() {
    if (this.active && this.isDead()) {
      this.setAlife(false)
    }
  }

  setAlife(status) {
    // активировать/деактивировать физическое тело
    this.body.enable = status;
    // скрыть/показать текстуру
    this.setVisible(status);
    // деактивировать/активироть объект
    this.setActive(status);

    if (this.timer) {
      this.timer.paused = !status;
    }

    if (!status) {
      this.emit('killed');
    }
  }

  move() {
    this.body.setVelocityX(-this.velocity)
  }
}