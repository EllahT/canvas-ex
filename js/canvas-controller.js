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
    let currElement = document.getElementById('shape-select').value;
    let currColor = document.getElementById('color-picked').value;
    gDrawing = setInterval(function () {
        console.log(ev);
        console.log(currElement);
        console.log(currColor);
        const { offsetX, offsetY } = ev;
        switch (currElement) {
            case 'square':
                drawSquare(offsetX, offsetY, currColor)
                break;
            case 'circle':
                drawCircle(offsetX, offsetY, currColor)
                break;
            // case 'text':
            //     drawText('test',offsetX, offsetY)
            //     break;
        }
    }, 100, ev);
    // gCtx.save()
    // gCtx.restore()

    // gets shape from user acc to option input
    // gets color from user
    // switch: in case 'square'/'circle'
}

function stopInterval() {
    clearInterval(gDrawing);
}

function drawSquare(x, y, color) {
    gCtx.rect(x,y, 150, 150)
    gCtx.fillStyle = color
    gCtx.fillRect(x,y, 150, 150)
    gCtx.stroke()
    gCtx.fill()
}

function drawCircle(x, y, color) {

}

function onDownload() {

}

// User selects a color (starting- fontColor)
// User Selects a shape- square, circle
// User can draw the shape freely on the canvas
// Play with some random variations
// add download feature
// Bonus: Add share to facebook feature
