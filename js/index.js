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

// SELECT

// DBLCLICK
const DBLClick = document.querySelector('.img-content');
DBLClick.addEventListener('dblclick', function(event) {
    event.target.style.transform = 'scale(1.3)';
})
