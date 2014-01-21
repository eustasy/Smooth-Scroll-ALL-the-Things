// Smooth Scroll ALL the Things 0.32

$(window).keydown(function (e) { // A Key has been Pressed
    if (e.target.tagName.toLowerCase() !== 'input' && e.target.tagName.toLowerCase() !== 'textarea') { // If it's not in a input or textarea
        switch (e.which) { // Figure out which one it is
            case 37:
                // Left Arrow
                HandleSSALL(-200); // Scroll Up
                break; // Stop
            case 38:
                // Up Arrow
                HandleSSALL(-200); // Scroll Up
                break; // Stop
            case 39:
                // Right Arrow
                HandleSSALL(200); // Scroll Down
                break; // Stop
            case 40:
                // Down Arrow
                HandleSSALL(200); // Scroll Down
                break; // Stop
            case 32:
                // Space
                HandleSSALL(500); // Scroll Down
                break; // Stop
            default:
                return; // If it wasn't any of those, carry on.
        }
        if (event.preventDefault) event.preventDefault(); // Stop it if we can.
    }
});

// Mousewheel Listener
if (window.addEventListener) window.addEventListener('DOMMouseScroll', WheelSSALL, false);
window.onmousewheel = document.onmousewheel = WheelSSALL;

// Wheel Function
function WheelSSALL(event) {
    var deltaSSALL = 0;
    if (event.wheelDelta) DeltaSSALL = -event.wheelDelta*2;
    else if (event.detail) DeltaSSALL = event.detail*3;
    HandleSSALL(DeltaSSALL);
    if (event.preventDefault) event.preventDefault();
}

// Handle Function
function HandleSSALL(DeltaSSALL) {
    var TimeSSALL = 1000;
    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() + DeltaSSALL
    }, TimeSSALL);
}