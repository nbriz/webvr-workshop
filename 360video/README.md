## 360 Video

![360 video example](screenshot.png)

Similar to `<a-sky>` for images, A-Frame has a special component for 360 video called `<a-videosphere>` which can also take a path to a file as the value for it's **src** property (in this case a video file). Let's create a new folder called "videos" in our project and download this [panorama video file](https://ucarecdn.com/fadab25d-0b3a-45f7-8ef5-85318e92a261/) into it as "city.mp4". Our new scene should now look like this:

```HTML
<a-scene>

    <a-videosphere src="videos/city.mp4"></a-videosphere>

</a-scene>
```

As our projects get more complex it becomes more important to load external resources (like images, sounds and videos) in a more efficient way. A-Frame has a [Asset Management System](https://aframe.io/docs/0.9.0/core/asset-management-system.html) to do just that. Let's rewrite our example above using the asset management system. Visit this [index.html](index.html) page to see the finished example.

```HTML
<a-scene>

  <a-assets>
    <video id="city" autoplay loop="true" src="videos/city.mp4"></video>
  </a-assets>

  <a-videosphere src="#city"></a-videosphere>

</a-scene>
```

#### 360 Video Files

360 Video is still a *relatively* new medium, as a result there's still lots of experimentation happening and lots of different ways to record a full 360 image into a traditional video file (like an .mp4) designed for traditional video. When you take 360 video with a 360 video camera it may record the data in a few different ways, a couple common examples are dual-fisheye video and equirectangular video, see the images below for reference. It's important to note that at the moment **A-Frame's videosphere element expects a equirectangular video files**, this means if you use a dual-fisheye or other type of 360 video file it won't look write. You'll need to [convert](http://theta360.guide/blog/video/2017/01/25/convert-dual-fisheye-to-equirectangular.html) any other video types to equirectangular video.

**dual-fisheye**

![dual-fisheye video](http://theta360.guide/blog/img/2017-01/dualfisheye.jpg)

**equirectangular**

![equirectangular video](http://theta360.guide/blog/img/2017-01/equirectangular.jpg)
