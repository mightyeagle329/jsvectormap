import EventHandler from '../eventHandler'

export default function handleZoomButtons() {
  const map = this
  const zoomin = createElement('div', 'jvm-zoom-btn jvm-zoomin', '&#43;', true)
  const zoomout = createElement('div', 'jvm-zoom-btn jvm-zoomout', '&#x2212', true)

  this.container.appendChild(zoomin)
  this.container.appendChild(zoomout)

  EventHandler.on(zoomin, 'click', () => {
    this.setScale(
      map.scale * map.params.zoomStep,
      map.width / 2,
      map.height / 2,
      false,
      map.params.zoomAnimate
    )
  })

  EventHandler.on(zoomout, 'click', () => {
    this.setScale(
      map.scale / map.params.zoomStep,
      map.width / 2,
      map.height / 2,
      false,
      map.params.zoomAnimate
    )
  })
}