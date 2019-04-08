/*
  This is an example of a pretty simple component called bounce,
  it relies on the aframe-physics-system.min.js component and
  also assumes you've got some kind of controller triggering events

  To learn more about creating your own components visit:
  https://aframe.io/docs/0.9.0/introduction/writing-a-component.html
*/
AFRAME.registerComponent('bounce', {
  // this is where we define the properties you can pass into the component
  // for example: <a-entity bounce="on: click; amount: 20"></a-entity>
  schema: {
    on: { type: 'string' },
    amount: { type: 'number', default: 10 }
  },
  // this is where you initialize things,
  // this method will only run once when the scene loads
  init: function () {
    let data = this.data
    let el = this.el
    // here we create an event listener for whichever event the user passed in
    // when the event fires we trigger an "impulse" using the physics library
    // it will push the entity upwards by the amount the user passed in
    el.addEventListener(data.on, function () {
      let impulse = new CANNON.Vec3(0, data.amount, 0)
      let wp = new THREE.Vector3()
      el.body.applyImpulse(impulse, wp)
    })
  },

  tick: function () {
    // the tick method runs more or less every frame (~60 or so times a second)
    // here we check and see if the object has fallen off the edge or through the floor
    // if it has, we respawn it at the spot indicated below
    let pos = this.el.getAttribute('position')
    if (pos.y < -1) {
      this.el.setAttribute('position', { x: 1, y: 2, z: -1.2 })
    }
  }
})
