import { gameSettings } from "./gameSettings"

export class LoadingBar {

  style = {
    boxColor: 0xD3D3D3,
    barColor: 0xFFF8DC,
    x: gameSettings.width / 2 - 450,
    y: gameSettings.height / 2 + 250,
    width: 900,
    height: 25
  }

  constructor(scene) {
    this.scene = scene

    this.progressBox = this.scene.add.graphics()
    this.progressBar = this.scene.add.graphics()

    this.showProgressBox()
    this.initEvents()
  }

  showProgressBox() {
    this.progressBox
      .fillStyle(this.style.boxColor)
      .fillRect(
        this.style.x, 
        this.style.y, 
        this.style.width,
        this.style.height
      )
  }

  showProgressBar(value) {
    this.progressBar
      .clear()
      .fillStyle(this.style.barColor)
      .fillRect(
        this.style.x, 
        this.style.y, 
        this.style.width * value,
        this.style.height
      )
  }

  initEvents() {
    this.scene.load.on('progress', this.showProgressBar, this)
  }
}