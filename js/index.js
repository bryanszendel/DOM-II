// MOUSEOVER
let mousingOver = document.querySelector('nav');
mousingOver.addEventListener('mouseover', function(event) {
    event.target.style.color = 'dodgerblue';

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
    }, false);

// KEYDOWN
let keyDown = document.querySelector('footer'); // changed from body because I couldn't do anything

keyDown.addEventListener('keydown', function(event) {
    if (event) {
        alert('Why are you typing here?');
    }
})

// WHEEL
let wheel = document.querySelector('.content-destination img');
wheel.addEventListener('wheel', zoom);

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    wheel.style.transform = `scale(${scale})`;
  }

  let scale = 1;
  

// DRAG / DROP
var dragged = document.querySelector('div.img-content')
dragged.addEventListener("drag", function(event) {
    console.log('its being dragged!')
}, false);

let droppings = document.querySelector('.inverse-content .img-content .img-fluid')

droppings.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className === droppings) {
    // event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

// LOAD
const loadLog = document.querySelector('footer p');
// const reload = document.querySelector('.content-pick .destination btn');

// reload.addEventListener('click', () => {
//   loadLog.textContent ='';
//   window.setTimeout(() => {
//       window.location.reload(true);
//   }, 200);
// });

window.addEventListener('load', (event) => {
    loadLog.textContent = loadLog.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) => {
    loadLog.textContent = loadLog.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) => {
    loadLog.textContent =  loadLog.textContent + `DOMContentLoaded\n`;
});


// FOCUS // the background for the first input changes, but the following aren't styled
const focus = document.querySelector('input');
focus.addEventListener('focus', function() {
    event.target.style.background = 'pink';
}, true)

// RESIZE
const widthOutput = document.querySelector('h2');

function reportWindowSize() {
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;


// SCROLL
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  console.log('HELLOOOOOOOOO')
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

// SELECT

let selectIt = document.querySelector("input")

selectIt.addEventListener('select', function() {
    console.log('you selected some text.... cool.')
})


// DBLCLICK
const DBLClick = document.querySelector('.img-content');
DBLClick.addEventListener('dblclick', function(event) {
    event.target.style.transform = 'scale(1.3)';
})


// PREVENT DEFAULT on NAVIGATION
let navDefault = document.querySelector('nav');
navDefault.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('things are bing prevented :)')
})