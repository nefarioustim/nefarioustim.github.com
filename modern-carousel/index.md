---
title:      "Modern Carousel - Tim Huegdon's Projects"
layout:     carousel
bodyclass:  project
---
# Modern Carousel

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

## Introduction

This carousel widget for jQuery makes use of modern CSS to keep
panels within the normal flow of the document. This means there are no
positional calculations required in the JavaScript, and no float
clearing in the CSS.

Features include:

 *  **View** and **move** multiple panes.
 *  Toggle full **pagination**.
 *  **Customise** transition **speed**, **easing**, and **pane delay**.
 *  Toggle **looped movement**.
 *  Toggle **display of controls on hover**.
 *  Toggle **pause when hovered**.
 *  Potential for **custom transitions**.
 *  A multitude of **namespaced custom events** that allow you to bind your
    own behaviour.

## Source

You can find the source, including demos, on GitHub at:

[http://github.com/nefarioustim/modern-carousel/]

## Basic implementation

To implement a carousel like the example above, you'll need to do the follow:

### Include the JavaScript and CSS assets

{% highlight html %}
<link rel="stylesheet" href="/a/c/carousel.core.css" type="text/css">
<link rel="stylesheet" href="/a/c/carousel.skin.css" type="text/css">
…
<script type="text/javascript" src="/a/j/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="/a/j/jquery.easing.min.js"></script>
<script type="text/javascript" src="/a/j/jquery.carousel.2.1.min.js"></script>
{% endhighlight %}

Both the `carousel.skin.css` and `jquery.easing.min.js` files above are
entirely _optional_.

The skin file provides styling for the controls (as seen
above). You can, of course, choose to style these however you wish; the
controls are rendered in two lists straight after the `.clip` element.

The easing script provides the standard jQuery Easing plugin, as supplied as
part of jQuery UI.

### Insert the widget HTML

Next step is to insert your HTML. The example above is as follows:

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

The `carousel` and `clip` classes and elements are _important_. Without these,
the carousel will not render or function. The `horizontal` class can be
replace with `vertical` for a vertically moving carousel.

Each pane in the carousel is an `li` in the main `ul`.

### Define size and layout

In your own CSS, define the size and layout of your carousel. The most
important element here is `clip` as it is used when calculating the movement
between panes. If you are using a horizontal carousel, make sure you have
defined a width. If, however, you are using a vertical carousel, make sure you
have defined a height.

Once again, here's the specific CSS for the example above:

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

### Configure and instantiate the carousel

The final step is to create a configuration object and pass it to the
`.carousel()` method of any jQuery object, which has been added by the plug-in.

For the demo above, I have included all the available configuration options. In
a real-world implementation, you could skip any values where you wish to use
the default:

{% highlight javascript %}
$(document).ready(function docReady(e) {
    $('#example1').carousel({
        visiblePanes: 2, // Default: 1
        panesToMove: 2, // Default: 1
        pagination: true, // Default: true
        speed: 1000, // Default: 200
        easing: "easeInOutElastic", // Default: "swing"
        loop: true, // Default: false
        autoplay: false, // Default: false
        hovercontrols: true, // Default: false
        hoverpause: true, // Default: false
        delay: 2000, // Default: 2000
        transition: false // Default: false
    });
});
{% endhighlight %}

For a more detailed explanation of the configuration options, please read the
table below.

## Configuration options

The following options may be defined in the configuration object passed to the
`$(element).carousel()` constructor:

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
            <th scope="row"><code>visiblePanes</code></th>
            <td>Number</td>
            <td class="m">1</td>
            <td>
                This is the number of panes visible in your styled carousel.
                Used in conjunction with the width of the `.clip` element to
                calculate the distance required to animate during transition.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>panesToMove</code></th>
            <td>Number</td>
            <td class="m">1</td>
            <td>
                This is the number of panes that will move with each activation
                of next or previous. This means it is perfectly possible to
                have 2 panes visible but move only one at a time, should that
                be what is required.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>pagination</code></th>
            <td>Boolean</td>
            <td class="s kc">true</td>
            <td>
                This flag will create a pagination <code>ul</code> when set to
                <code>true</code>. The pagination controls will appear with
                the standard controls, directly after the <code>.clip</code>
                element.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>speed</code></th>
            <td>Number</td>
            <td class="m">200</td>
            <td>
                The number of milliseconds the transition animation should
                last for.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>easing</code></th>
            <td>String</td>
            <td class="s">"swing"</td>
            <td>
                The easing method to use on the transition animation.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>loop</code></th>
            <td>Boolean</td>
            <td class="s kc">false</td>
            <td>
                This flag causes the carousel to loop once the final pane
                has been reached.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>autoplay</code></th>
            <td>Boolean</td>
            <td class="s kc">false</td>
            <td>
                When set to true, the carousel will automatically start to
                animate once instantiation is complete.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>hovercontrols</code></th>
            <td>Boolean</td>
            <td class="s kc">false</td>
            <td>
                If active, the controls will only show when the carousel is
                hovered over.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>hoverpause</code></th>
            <td>Boolean</td>
            <td class="s kc">false</td>
            <td>
                If active, the carousel will pause playing when the carousel
                is hovered over.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>delay</code></th>
            <td>Number</td>
            <td class="m">2000</td>
            <td>
                The number of milliseconds to pause on each pane of the
                carousel when playing.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>transition</code></th>
            <td>Function reference or false</td>
            <td class="s kc">false</td>
            <td>
                A reference to a transition function defined at
                <code>$.fn.carousel</code>. E.g. “yourTransitionHere” would
                reference a function defined at
                <code>$.fn.carousel.yourTransitionHere</code>.
            </td>
        </tr>
    </tbody>
</table>

## Custom events

The following [namespaced jQuery custom events](http://docs.jquery.com/Namespaced_Events)
are available for you to bind your own methods to:

<table id="table-events">
    <thead>
        <tr>
            <th scope="col">Event name</th>
            <th scope="col">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row"><code>play.carousel</code></th>
            <td>
                This event is triggered when the carousel is set to play. This
                includes the use of the <code>autoplay</code> configuration option.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>pause.carousel</code></th>
            <td>
                This event is triggered when the carousel is paused. It is
                also triggered if the <code>hoverpause</code> configuration option is
                set to <code>true</code>, and the carousel is hovered over.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>prev.carousel</code></th>
            <td>
                This event is triggered when the "previous" control is
                activated. <strong>Note</strong>: This event also triggers the
                <code>pause.carousel</code> event.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>next.carousel</code></th>
            <td>
                This event is triggered when the "next" control is
                activated. <strong>Note</strong>: This event also triggers the
                <code>pause.carousel</code> event.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>move.carousel</code></th>
            <td>
                This event is triggered when the carousel pane is moved by a
                given number of panes, and is used by several other events.
                Also triggered by <code>play.carousel</code>, <code>prev.carousel</code>, and
                <code>next.carousel</code>. The event callback can accept a
                single parameter; a signed-integer denoting the number of
                panes to move by.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>jump.carousel</code></th>
            <td>
                This event is triggered when moving the carousel to a specific
                pane. It is subsequently fired by <code>move.carousel</code>.
                The callback accepts two parameters: an unsigned integer
                representing the pane to jump to, and another unsigned integer
                representing the current pane.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>nav-state.carousel</code></th>
            <td>
                This event is triggered when the carousel checks the current
                navigation state to activate/deactivate the relevant controls.
                It is triggered once the carousel initialisation is complete,
                and after each animation between panes.
            </td>
        </tr>
    </tbody>
</table>

## Custom transitions

The carousel widget includes a basic framework to allow you to create your own
custom transitions between panes. Further to this, the script also includes
a built in transition entitled `fade`.

### Demo

<div class="carousel skin" id="example2">
    <div class="clip">
        <ul>
            <li><img src="/a/i/family.png" alt="Family" width="220" height="220"></li>
            <li><img src="/a/i/luxury.png" alt="Luxury" width="220" height="220"></li>
            <li><img src="/a/i/romantic.png" alt="Romantic" width="220" height="220"></li>
            <li><img src="/a/i/spa.png" alt="Spa" width="220" height="220"></li>
        </ul>
    </div>
</div>

When a custom transition is specified in the carousel configuration, the
script will look for a corresponding function in the following namespace:

{% highlight javascript %}
$.fn.carousel.{function name}
{% endhighlight %}

So, in the example of the `fade` transition, it is defined as:

{% highlight javascript %}
$.fn.carousel.fade = function(config) {
    // Transition code here
}
{% endhighlight %}

### Transition configuration argument

Each custom transition method should expect a configuration object containing
the following parameters:

<table id="table-transition-config">
    <thead>
        <tr>
            <th scope="col">Parameter</th>
            <th scope="col">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row"><code>carousel</code></th>
            <td>
                A reference to the parent carousel jQuery object.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>defaults</code></th>
            <td>
                A reference to the <code>defaults</code> member of the parent
                carousel jQuery object. This object will contain each of the
                variables defined in the configuration options table above.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>delta</code></th>
            <td>
                The calculated delta between panels.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>last</code></th>
            <td>
                A number representing the pane the transition is to move away
                from. The first pane in the carousel would be represented as 0.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>current</code></th>
            <td>
                A number representing the pane the transition is moving to.
                Once again, the first pane in the carousel would be
                represented as 0.
            </td>
        </tr>
        <tr>
            <th scope="row"><code>anim</code></th>
            <td>
                An object of standard animation configuration options to be
                used by animations between panels. This includes the
                <code>speed</code> and <code>easing</code> options set in the
                carousel configuration.
            </td>
        </tr>
    </tbody>
</table>