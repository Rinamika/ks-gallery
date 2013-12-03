ks-gallery
==========
ks-gallery is a jQuery plugin that transformates your ugly photogallery to beautiful piece of Flickr-like gallery style =)

Usage
-----
1. Include jquery.ks.js and jquery.ks.css in the head of your page. Don't forget to include jQuery firstly.
``` html
<link rel="stylesheet" href="jquery.ks.css"/>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="jquery.ks.js"></script>
```

2. Add to your site markup similar to showed below.
``` html
<div class="ks">
    <div data-height="200" data-width="168">
        <img src="data/1.jpg" />
    </div>
    <div data-height="200" data-width="267">
        <img src="data/2.jpg" />
    </div>
    <div data-height="200" data-width="300">
        <img src="data/3.jpg" />
    </div>
    <div data-height="200" data-width="300">
        <img src="data/4.jpg" />
    </div>
    <div data-height="200" data-width="134">
        <img src="data/5.jpg" />
    </div>
    <div data-height="200" data-width="300">
        <img src="data/6.jpg" />
    </div>
</div>
<div id="ks-target"></div>
```

3. Add in the end of html document a piece of code, similar to below (choose one according to your wishes).
    * If you want a fixed gallery, your code will be look like this:
``` javascript
$('.ks').ks({
    target: "#ks-target-fixed",
    targetWidth: "600",
    spacing: "10"
});
```

    * For stretching container:
``` javascript
$('.ks').ks({
    target: "#ks-target-stretch",
    spacing: 10
});
```


Supported browsers
------------------
* Chrome
* Firefox
* Opera
* IE8+

Live examples
-------------
* http://yusakh.ru/gallery/
* http://chekhov-book-museum.ru/gallery/