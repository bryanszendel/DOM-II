// MOUSEOVER
let mousingOver = document.querySelector('nav');
mousingOver.addEventListener('mouseover', function(event) {
    event.target.style.color = 'dodgerblue';

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
    }, false);

// KEYDOWN
let keyDown = document.querySelector('body');
keyDown.addEventListener('keydown', function(event) {
    if (event) {
        alert('Why are you typing here?');
    }
})

// 