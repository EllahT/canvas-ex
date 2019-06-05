'use strict'
let gCanvas;
let gCtx;
let gDrawing;


function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');

    gCanvas.width = window.innerWidth - 50;
    gCanvas.height = window.innerHeight - 150;

    gCanvas.addEventListener("mouseup", stopInterval);
}

function onDraw(ev) {
    gDrawing = setInterval(function (){
        console.log('clicked canvas');
        console.log(ev);
    },100, ev);
    
    // gCtx.save()
    // const offsetX = ev.offsetX
    // const offsetY = ev.offsetY
    const {offsetX, offsetY} = ev;
    // switch (currElement) {
        // case 'triangle':
        //     drawTriangle()
        //     break;
        // case 'rect':
        //     drawRect(offsetX, offsetY)
        //     break;
        // case 'text':
        //     drawText('test',offsetX, offsetY)
        //     break;
    // }
    // gCtx.restore()

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

function onDownload(elLink) {
    const data = gCanvas.toDataURL()
    elLink.href = data   
    
    elLink.download = 'myBeautifulCanvas.jpg'
}

//TODO: User selects a color (starting- fontColor)
//TODO: User Selects a shape- square, circle
//TODO: User can draw the shape freely on the canvas
//TODO: Play with some random variations
//DONE: add download feature
//Bonus: Add share to facebook feature
