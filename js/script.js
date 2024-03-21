$(document).ready(function(){
    // array symbols
    var letters = [
        ['&#8249;', 'C', '0', 'D', '3', 'W', 'i', 'Z', '&#47;', '&#8250;'],
        ['&#123;', 'c', 'O', 'Đ', 'E', 'w', '1', 'z', '&#47;', '&#125;'],
        ['&#91;', 'C', 'o', 'd', '€', 'W', 'I', 'Z', '&#47;', '&#93;']
    ];

    var currentIndex = 0; // keep track of the current index

    // alphabet
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // random character from alphabet
    function getRandomCharacter() {
        return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    // slot machine naimation for single span
    function animateSlotMachine($span, finalLetter, delay) {
        var currentIndex = 0;
        var animationInterval = setInterval(function() {
            $span.html(getRandomCharacter());
        }, 50);

        setTimeout(function() {
            clearInterval(animationInterval);
            $span.html(finalLetter);
        }, 1000 + delay); // duration of the animation 1 second with added delay
    }

    // function to update the content of each span
    function updateSpanContent() {
        // get the current array
        var currentArray = letters[currentIndex];

        // start scale animation of the SVG
        $('.logo-wrap').addClass('scaling');

        // loop through each span
        $('.logo-text span').each(function(spanIndex) {
            var $span = $(this);
            var finalLetter = currentArray[spanIndex];

            // calculate delay for each span
            var delay = spanIndex * 100; // adjust delay

            // slot machine effect for each span with delay
            animateSlotMachine($span, finalLetter, delay);
        });

        // currentIndex for the next update
        currentIndex = (currentIndex + 1) % letters.length;

        // scale end when last span finishes
        setTimeout(function() {
            $('.logo-wrap').removeClass('scaling');
        }, 1000 + (letters[0].length - 1) * 100); // duration to match the last span animation duration
    }
    
    // initial update
    updateSpanContent();
    
    // set interval to change content every 4 seconds
    setInterval(updateSpanContent, 4000); 
});

