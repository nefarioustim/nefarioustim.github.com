---
title:      "jQuery Accordion - Tim Huegdon's Projects"
layout:     accordion
bodyclass:  project
---
# jQuery Accordion

<ul id="example1" class="accordion">
    <li>
        <div class="handle">Handle 1</div>
        <div class="panel loading">
            <p>A panel filled with text.</p>
        </div>
    </li>
    <li>
        <div class="handle">Handle 2</div>
        <ul class="panel loading">
            <li>How about&hellip;</li>
            <li>&hellip; a list &hellip;</li>
            <li>&hellip; of items?</li>
        </ul>
    </li>
    <li>
        <div class="handle">Handle 3</div>
        <p class="panel loading">
            <img src="/a/i/spa.png" alt="" width="220" height="220"> An image in a paragraph.
        </p>
    </li>
    <li>
        <div class="handle">Handle 4</div>
        <div class="panel loading">
            <h4>A nested list of items</h4>
            <ul>
                <li>Item 1</li>
                <li>Item 2
                    <ul>
                        <li>Subitem 1</li>
                        <li>Subitem 2</li>
                        <li>Subitem 3</li>
                    </ul>
                </li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
        </div>
    </li>
</ul>

## Introduction

This accordion widget for jQuery is a small and simple script that addresses
common issues with jQuery accordions in general.

Features include:

 *  Fully __customisable handles and panels__ using jQuery selectors.
 *  __Customise__ the __speed__ and __easing__ of animation between panels.
 *  Allows __single__ or __multiple panels open__.
 *  Allow the user to __toggle__ a panel __open or closed__.
 *  Mark panels __active on load__.
 *  Mark panels to be __locked open at all times__.

## Source

You can find the source, including demos, on GitHub at:

<http://github.com/nefarioustim/jquery-accordion/>

## Basic implementation

To implement an accordion like the example above, you will need to do the
following:

### Include the JavaScript and CSS assets

{% highlight html %}
<link rel="stylesheet" href="/a/c/accordion.core.css" type="text/css">
…
<script type="text/javascript" src="/a/j/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="/a/j/jquery.easing.min.js"></script>
<script type="text/javascript" src="/a/j/jquery.accordion.2.0.min.js"></script>
{% endhighlight %}

The `jquery.easing.min.js` file above is entirely _optional_. This script
provides the standard jQuery Easing plugin, as supplied as part of jQuery UI.

### Insert the widget HTML

Next step is to insert your HTML. The example above is as follows:

{% highlight html %}
<ul id="example1" class="accordion">
    <li>
        <div class="handle">Handle 1</div>
        <div class="panel loading">
            <p>A panel filled with text.</p>
        </div>
    </li>
    <li>
        <div class="handle">Handle 2</div>
        <ul class="panel loading">
            <li>How about&hellip;</li>
            <li>&hellip; a list &hellip;</li>
            <li>&hellip; of items?</li>
        </ul>
    </li>
    <li>
        <div class="handle">Handle 3</div>
        <p class="panel loading">
            <img src="/a/i/spa.png" alt="" width="220" height="220">
            An image in a paragraph.
        </p>
    </li>
    <li>
        <div class="handle">Handle 4</div>
        <div class="panel loading">
            <h4>A nested list of items</h4>
            <ul>
                <li>Item 1</li>
                <li>Item 2
                    <ul>
                        <li>Subitem 1</li>
                        <li>Subitem 2</li>
                        <li>Subitem 3</li>
                    </ul>
                </li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
        </div>
    </li>
</ul>
{% endhighlight %}

The main thing to notice here are the id `example1`, and the classes
`accordion`, `handle`, `panel`, and `loading`.

The `accordion` class is used by the `accordion.core.css` file to apply some
reset styles and some common styles required on accordions. Feel free to dump
this file and add your own reset and common styles in the stylesheet of your
choice.

The `handle` class designates the click area for our accordion, and the `panel`
class designates the area that will collapse. Each `handle` and `panel` set is
enclosed within an `li`, and this is how the accordion script detects a
relationship between a handle and a panel.

The `loading` class applies styles to hide the panels during load, to avoid
a flash of unstyled content. The accordion script will automatically remove
this class during initialisation.

### Define your own styles

Handles collapse panels; this is pretty much all there is to it. There are no
limits on the way you can style the accordion once you understand this simple
fact.

The example above used the following simple CSS:

{% highlight css %}
#example1 {
    border: 1px solid #ccc;
    margin: 0 auto;
    width: 250px;
}
#example1 .handle {
    background: #999;
    border: 1px solid;
    border-color: #eee #666 #666 #eee;
    color: #fff;
    font: 14px/1.3 "Helvetica Neue", arial, sans-serif;
    padding: 4px 8px;
    text-shadow: -1px -1px 0 #777;
}
#example1 .handle a {
    display: block;
}
#example1 .panel {
    padding: 4px 8px;
}
{% endhighlight %}

### Configure and instantiate the accordion

The final step is to create a configuration object and pass it to the
newly added `.accordion()` method of any jQuery object.

For the demo above, I have included all the available configuration options.
In a real-world implementation, you could skip any values where you wish to
use the default:

{% highlight javascript %}
$('#example1').accordion({
    handle: ".handle", // Default: "h3"
    panel: ".panel", // Default: ".panel"
    speed: 500, // Default: 200
    easing: "easeInOutQuad", // Default "swing"
    canOpenMultiple: false, // Default: false
    canToggle: false, // Default: false
    activeClassPanel: "open", // Default: "open"
    activeClassLi: "active", // Default: "active"
    lockedClass: "locked", // Default: "locked"
    loadingClass: "loading" // Default: "loading"
});
{% endhighlight %}

Here's a more in depth look at those options:

## Configuration options

The following options may be defined in the configuration object passed to the
`$(element).accordion()` constructor:

<table id="table-config">
    <thead>
        <tr>
            <th scope="col">Parameter</th>
            <th scope="col">Data type</th>
            <th scope="col">Default</th>
            <th scope="col">Description</th>
        </tr>
    </thead>
    <tbody class="highlight">
        <tr>
            <th scope="row"><code>handle</code></th>
            <td>String</td>
            <td class="s">"h3"</td>
            <td>
                The handle is the element that will contain a link for
                triggering the opening and closing of panels in the accordion.
                This string is a jQuery selector.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>panel</code></th>
            <td>String</td>
            <td class="s">".pane"</td>
            <td>
                The jQuery selector that will find the panels of your
                accordion. These will be tied to a handle that exists in the
                same <code>li</code>.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>speed</code></th>
            <td>Number</td>
            <td class="m">200</td>
            <td>
                The number of milliseconds the opening and closing animations
                should last for.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>easing</code></th>
            <td>String</td>
            <td class="s">"swing"</td>
            <td>
                The easing method to use on the opening and closing
                animations.
            </td>
        </tr>
    </tbody>
</table>