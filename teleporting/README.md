# Teleporting

![teleporting example](screenshot.png)

A common mechanic in VR experiences is the ability to teleport around a scene. Using the community developed [A-Frame Teleport Controls](https://github.com/fernandojsg/aframe-teleport-controls) component we can add the ability to jump around our scene using our controller. Start by adding the component's library underneath the A-Frame library in your code:

```html
  <script src="https://rawgit.com/fernandojsg/aframe-teleport-controls/master/dist/aframe-teleport-controls.min.js"></script>
```

Teleporting doesn't mean much without a scene to teleport around in, let's use another community developed component called [A-Frame Environment](https://github.com/supermedium/aframe-environment-component) to qiuckly create an environment.

```html
  <script src="https://unpkg.com/aframe-environment-component@1.1.0/dist/aframe-environment-component.min.js"></script>
```

with those two extra components included, we can now create a scene with an environment and camera controls that have the ability to teleport like this:

```html
<a-scene>

    <a-entity environment="preset: forest"></a-entity>

    <a-entity id="cameraRig">
      <a-entity camera look-controls position="0 1.7 0"></a-entity>
      <a-entity teleport-controls="cameraRig: #cameraRig" daydream-controls></a-entity>
    </a-entity>

</a-scene>
```

**NOTE**: I've only tested this example on my Lenovo Mirage headset with a Google Daydream controller, I also tried it on an HTC Vive but couldn't get it to work. In theory it should work with GearVR Controllers by replaceing `daydream-controls` in the example above with `gearvr-controls` or with ` oculus-go-controls` for use in Oculus Go headsets.
