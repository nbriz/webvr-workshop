# Physics

![physics example](screenshot.png)

Using the community developed [A-Frame Physics](https://github.com/donmccurdy/aframe-physics-system) component we can add physics to our scene. Start by adding the component's library underneath the A-Frame library in your code:

```html
  <script src="//cdn.rawgit.com/donmccurdy/aframe-physics-system/v3.3.0/dist/aframe-physics-system.min.js"></script>
```

Then all you need to do to add physics to your scene is `<a-scene physics>`. Then specify which elements are static (non moving) like `<a-entity static-body>` and which are dynamic (moving) like `<a-entity dynamic-body>`, for example, below a ball starts at a y axis of 2 but will immediately fall down to the ground because it is a "dynamic-body":

```html
<a-scene physics background="color: pink">

  <a-entity id="floor"
    rotation="-90 0"
    geometry="primitive: plane; height: 10; width: 10"
    material="color: #108710"
    static-body></a-entity>

  <a-entity class="ball"
    position="0 2 -1.8"
    geometry="primitive: sphere; radius: 0.25"
    material="color: #816290;"
    dynamic-body></a-entity>

  </a-scene>
```

There's loads more you can do with this physics component, I suggest checking out their [documentation](https://github.com/donmccurdy/aframe-physics-system).

At this point we've played around with a few community developed components and you might be wondering how to create your own? You can read more about that in the A-Frame docs under [Writing a Component](https://aframe.io/docs/0.9.0/introduction/writing-a-component.html). You can also check out my simple example for a [bounce](components/bouncd.js) component written for the physics demo I made in [index.html] of this directory.
