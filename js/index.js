// MOUSEOVER
let test = document.querySelector('nav');
test.addEventListener('mouseover', function(event) {
    event.target.style.color = 'dodgerblue';

    setTimeout(function() {
        event.target.style.color = "";
    }, 1000);
    }, false);

