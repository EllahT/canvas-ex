'use strict'
let gCanvas;
let gCtx;
let gDrawing;


function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');

    gCanvas.width = window.innerWidth - 50;
    gCanvas.height = window.innerHeight - 150;

    // gCanvas.addEventListener("mousedown", onDraw, event);
    gCanvas.addEventListener("mouseup", stopInterval);
}

function onDraw(ev) {
    gDrawing = setInterval(function (){
        console.log('clicked canvas');
        console.log(ev);
    },100, ev);
    
    // gets shape from user acc to option input
    // gets color from user
    // switch: in case 'square'/'circle'
}

function stopInterval() {
    clearInterval(gDrawing);
}

function drawSquare(color) {

}

function drawCircle(color) {

}

function onDownload() {
    
}

// User selects a color (starting- fontColor)
// User Selects a shape- square, circle
// User can draw the shape freely on the canvas
// Play with some random variations
// add download feature
// Bonus: Add share to facebook feature
