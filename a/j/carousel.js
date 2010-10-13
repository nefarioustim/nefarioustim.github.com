$(document).ready(function docReady(e) {
    $('#example1').carousel({
        visiblePanes: 2, // Default: 1
        panesToMove: 2, // Default: 1
        pagination: true, // Default: true
        speed: 1000, // Default: 200
        easing: "easeInOutQuad", // Default: "swing"
        loop: true, // Default: false
        autoplay: false, // Default: false
        hovercontrols: true, // Default: false
        hoverpause: true, // Default: false
        delay: 2000, // Default: 2000
        transition: false // Default: false
    });
    
    $('#example2').carousel({
        loop: true, // Default: false
        transition: "fade" // Default: false
    });
});