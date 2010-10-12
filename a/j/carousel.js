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