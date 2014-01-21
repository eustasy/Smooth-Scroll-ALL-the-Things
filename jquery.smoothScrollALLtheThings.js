// Smooth Scroll ALL the Things 0.32

$(window).keydown(function (e) { // A Key has been Pressed
    if (e.target.tagName.toLowerCase() !== 'input' && e.target.tagName.toLowerCase() !== 'textarea') { // If it's not in a input or textarea
        switch (e.which) { // Figure out which one it is
            case 37:
                // Left Arrow
                handle(-200); // Scroll Up
                break; // Stop
            case 38:
                // Up Arrow
                handle(-200); // Scroll Up
                break; // Stop
            case 39:
                // Right Arrow
                handle(200); // Scroll Down
                break; // Stop
            case 40:
                // Down Arrow
                handle(200); // Scroll Down
                break; // Stop
            case 32:
                // Space
                handle(500); // Scroll Down
                break; // Stop
            default:
                return; // If it wasn't any of those, carry on.
        }
        if (event.preventDefault) event.preventDefault(); // Stop it if we can.
    }
});

// Mousewheel Listener
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

// Wheel Function
function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = -event.wheelDelta*2;
    else if (event.detail) delta = event.detail*3;
    handle(delta);
    if (event.preventDefault) event.preventDefault();
}

// Handle Function
function handle(delta) {
    var time = 1000;
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() + delta
    }, time);
}