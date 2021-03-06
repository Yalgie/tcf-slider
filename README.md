# TCF Slider
View a demo [here](http://thecodingforge.com.au/demos/tcf-slider/demo/index.html). Or download the repo and view the demo folder. 

----

TCF Slider is a simple jQuery slider plugin that is accessible and responsive. I built the slider so that it's only got the bare neccessities, there is no need to include any fonts or extra files and the only dependency is jQuery.

## Getting Started

### Step 1
Download and link to the minified files in the `/dist` folder.

Or install via npm:
`npm i -S tcf-slider`


### Step 2
Inside a `<script>` tag or inside a custom js file insert the slider plugin markup.

Here is a basic example of the slider plugin markup:
```javascript
$(document).ready(function() {
    $('#tcf-slider').tcf_slider({
        // Options
        images: [{
            src: "images/image_1.jpg"
        }, {
            src: "images/image_2.jpg"
        }, {
            src: "images/image_3.jpg"
        }, {
            src: "images/image_4.jpg"
        }, {
            src: "images/image_5.jpg"
        }]
    })
})
```
*Notice the specific ID referenced in the above plugin function call,* this will need to be referred to in the HTML in step 3.

### Step 3
Insert the reference div into your html file:

```html
<div id="tcf-slider"></div>
```

And you're good to go! As long as you've referenced everything correctly, and all your files are correctly being linked to you should be sweet. Check out the options below to see some different ways you can customise the slider.

## Options
    	
### Loop
```javascript
loop: false
```
Type = Boolean (True or False).

Default = false.

If we had a slider with 5 images, when the slider reached the 5th image and `loop` is set to `true` the slider will loop back to the 1st image and continue sliding through the images.

### Auto Change
```javascript
autoChange: false
```
Type = Boolean (True or False).

Default = false.

If `autoChange` is set to `true` the slider will automatically change images without any prompt from the user.

### Change Interval
```javascript
changeInterval: 4000 // 4 seconds
```
Type = Int (Number).

Default = 4000 (4 seconds).

This option will only take affect if the above `autoChange` option is set to `true`, this option defines the amount of time it will take before the next image changes.

### Transition
```javascript
transition: "none"
```
Type = String.

Default = "none" (no animation).

Options:
* "none"
* "fade"
* "slide"

This option defines what type of animation you would like  the images to use when they transition.


### Transition Duration
```javascript
transitionDuration: 400
```
Type = Int (Number).

Default = 400 (0.4 seconds).

This option defines the time it takes to animate between each image. This option will only take effect when the `transition` option is set to `slide` or `fade`.

### Image Attributes
Each image can have an `alt` and `title` attribute. If these are not defined the plugin will just append a blank attribute tag.
```javascript
src: "images/image_1.jpg",
alt: "Alt Text",
title: "Image Title"
```

## Advanced Example
Below is an advanced example showing how you how to implement the options:
```javascript
$(document).ready(function() {
    $('#tcf-slider').tcf_slider({
        loop: true,
        autoChange: false,
        transition: "slide",
        changeInterval: 4000,
        transitionDuration: 400,
        images: [{
            src: "images/image_1.jpg",
            alt: "Image alt"
        }, {
            src: "images/image_2.jpg"
        }, {
            src: "images/image_3.jpg",
            title: "Image Title"
        }, {
            src: "images/image_4.jpg"
        }, {
            src: "images/image_5.jpg"
        }]
    })
})
```
