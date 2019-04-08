# Animation

![animation example](screenshot.png)

A-Frame includes a built-in [Animation](https://aframe.io/docs/0.9.0/components/animation.html#sidebar) component, there's a lot you can do with it so I would recommend checking out the docs after following this tutorial which only really scratches the surface. Let's start where we left off at the end of our [GLTF notes](../importing-models).

```html
<a-scene>

  <!--
    Rocketship model by Google Poly
    published under a CC-BY license.
    visit: https://poly.google.com/view/8iKIYCyvh2k
  -->
  <a-assets>
    <img id="stars" src="images/stars.png">
    <a-asset-item id="rocket-gltf" src="models/gltf/rocket/PUSHILIN_rocket_ship.gltf"></a-asset-item>
  </a-assets>

  <a-sky src="#stars"></a-sky>

  <a-entity id="rocket"
    position="0 1.8 -3"
    gltf-model="#rocket-gltf"></a-entity>

</a-scene>
```

Now let's restructure our rocket entity so that the rocekt model itself is a child of another entity like this:

```html
<a-entity id="rocket" position="0 1.8 -3">
  <a-entity gltf-model="#rocket-gltf"></a-entity>
</a-entity>
```

The reason for this is that we want to add some other shapes to our rocket, so by making the gltf a child of a parent entity we can now add other children along side our gltf model, for example we can create a sphere to represent some smoke/exhaust coming out of our rocket:

```html
<a-entity id="rocket"position="0 1.8 -3">
  <a-entity gltf-model="#rocket-gltf"></a-entity>

  <a-entity position="0 -0.69983 -0.17902"
    geometry="primitive: sphere; radius: 0.3; segmentsHeight: 6; segmentsWidth: 11"
    material="color: white; flatShading: true"></a-entity>
</a-entity>
```

**NOTE:** there are a few more geometry and material properties used here, these are all available to experiment width when you open the Visual Inspector (ctrl + alt + i).

To add animation we use the **animation** attribute/component. Let's animate the position of the sphere so that it moves down from its currently set position `0 -0.69983 -0.17902` to it's new position `0 -1.4072 -0.17902` (notice the change on the y axis). We'll also add a `dur` property which specifies how long it should take to get to it's new position (in milliseconds, 1000 milliseconds = 1 second) as well as a linear `easing` function and we'll set the `loop` to true so that it repeats infinitely.

```html
<a-entity id="rocket"position="0 1.8 -3">
  <a-entity gltf-model="#rocket-gltf"></a-entity>

  <a-entity position="0 -0.69983 -0.17902"
    geometry="primitive: sphere; radius: 0.3; segmentsHeight: 6; segmentsWidth: 11"
    material="color: #FFFFFF; flatShading: true"
    animation="property: position;
               to: 0 -1.4072 -0.17902;
               dur: 250;
               easing: linear;
               loop: true;"></a-entity>
</a-entity>
```

Similar to the Event Set component we used in the Image Gallery demo, we can specify multiple animations by appending **__name** to the animation attribute/component. Let's rename our initial animation **animation__p** (short for position) and add an additional animatoin called **animation__s** (for scale), where all the details are the same except for `property: scale;` and `to: 1.25 1.25 1.25`

We can also animate things like color, let's create a third animation component called **animation__c** (for color) and keep the details the same except for `property: material.color;` and `to: #333333`, the final result should look like this:

```html
<a-entity id="rocket"position="0 1.8 -3">
  <a-entity gltf-model="#rocket-gltf"></a-entity>

  <a-entity position="0 -0.69983 -0.17902"
    geometry="primitive: sphere; radius: 0.3; segmentsHeight: 6; segmentsWidth: 11"
    material="color: #FFFFFF; flatShading: true"
    animation="property: position;
               to: 0 -1.4072 -0.17902;
               dur: 250;
               easing: linear;
               loop: true;"
     animation__s="property: scale;
                to: 1.25 1.25 1.25;
                dur: 250;
                easing: linear;
                loop: true;"
      animation__c="property: material.color;
                 to: #333333;
                 dur: 250;
                 easing: linear;
                 loop: true;"></a-entity>
</a-entity>
```

Try copy+pasting that sphere entity a couple of times to add 2 more smoke spheres to the rocket. To add a little variation try changing the x and/or z destinations (so that their positions go `to:` a different end point than the initial smoke sphere). Try also adding variation on the `dur:` so that it's slightly different from the others.

Check out the example I made in [index.html](index.html)
