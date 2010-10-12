---
title:      "Modern Carousel -- Tim Huegdon's Projects"
layout:     carousel
bodyclass:  project
---
# Modern Carousel

## Demo

<div class="carousel skin" id="example1">
    <div class="clip">
        <ul class="horizontal">
            <li><img src="/a/i/family.png" alt="Family" width="220" height="220"></li>
            <li><img src="/a/i/luxury.png" alt="Luxury" width="220" height="220"></li>
            <li><img src="/a/i/romantic.png" alt="Romantic" width="220" height="220"></li>
            <li><img src="/a/i/spa.png" alt="Spa" width="220" height="220"></li>
            <li><img src="/a/i/family.png" alt="Family" width="220" height="220"></li>
            <li><img src="/a/i/luxury.png" alt="Luxury" width="220" height="220"></li>
            <li><img src="/a/i/romantic.png" alt="Romantic" width="220" height="220"></li>
            <li><img src="/a/i/spa.png" alt="Spa" width="220" height="220"></li>
            <li><img src="/a/i/family.png" alt="Family" width="220" height="220"></li>
            <li><img src="/a/i/luxury.png" alt="Luxury" width="220" height="220"></li>
            <li><img src="/a/i/romantic.png" alt="Romantic" width="220" height="220"></li>
            <li><img src="/a/i/spa.png" alt="Spa" width="220" height="220"></li>
        </ul>
    </div>
</div>

{% highlight html %}
<link rel="stylesheet" href="/a/c/carousel.core.css" type="text/css">
<link rel="stylesheet" href="/a/c/carousel.skin.css" type="text/css">
…
<script type="text/javascript" src="/a/j/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="/a/j/jquery.easing.min.js"></script>
<script type="text/javascript" src="/a/j/jquery.carousel.2.1.min.js"></script>
{% endhighlight %}

{% highlight html %}
<div class="carousel skin" id="example1">
    <div class="clip">
        <ul class="horizontal">
            <li><img src="/a/i/family.png" alt="Family" width="220" height="220"></li>
            <li><img src="/a/i/luxury.png" alt="Luxury" width="220" height="220"></li>
            <li><img src="/a/i/romantic.png" alt="Romantic" width="220" height="220"></li>
            <li><img src="/a/i/spa.png" alt="Spa" width="220" height="220"></li>
            <li><img src="/a/i/family.png" alt="Family" width="220" height="220"></li>
            <li><img src="/a/i/luxury.png" alt="Luxury" width="220" height="220"></li>
            <li><img src="/a/i/romantic.png" alt="Romantic" width="220" height="220"></li>
            <li><img src="/a/i/spa.png" alt="Spa" width="220" height="220"></li>
            <li><img src="/a/i/family.png" alt="Family" width="220" height="220"></li>
            <li><img src="/a/i/luxury.png" alt="Luxury" width="220" height="220"></li>
            <li><img src="/a/i/romantic.png" alt="Romantic" width="220" height="220"></li>
            <li><img src="/a/i/spa.png" alt="Spa" width="220" height="220"></li>
        </ul>
    </div>
</div>
{% endhighlight %}

{% highlight css %}
#example1 {
    height: 232px;
    margin: 20px auto;
    width: 458px;
}
#example1 .clip {
    border: 1px solid #ccc;
    height: 230px;
    width: 456px;
}
#example1 .clip>ul>li {
    padding: 5px 4px;
}
{% endhighlight %}

{% highlight javascript %}
$(document).ready(function docReady(e) {
    $('#example1').carousel({
        visiblePanes: 2,
        panesToMove: 2,
        speed: 1000,
        easing: "easeInOutElastic",
        loop: true,
        autoplay: false,
        hovercontrols: true,
        hoverpause: true
    });
});
{% endhighlight %}