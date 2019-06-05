'use strict'
let gCanvas;
let gCtx;
let gMouseDown;

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');

    gCanvas.width = window.innerWidth - 50;
    gCanvas.height = window.innerHeight - 180;

    gCanvas.addEventListener("mouseup", stopMovement);
}

function onChangeMouseStat(isDown) {
    gMouseDown = (isDown) ? true : false;
}

function onDraw(ev) {
    let currElement = document.getElementById('shape-select').value;
    let currColor = document.getElementById('color-picked').value;
    if (!gMouseDown) return;
    const { offsetX, offsetY } = ev;
    switch (currElement) {
        case 'square':
            drawSquare(offsetX, offsetY, currColor)
            break;
        case 'circle':
            drawCircle(offsetX, offsetY, currColor)
            break;
        case 'line':
            drawLine(offsetX, offsetY, currColor)
            break;
        }
}

function stopMovement() {
    onChangeMouseStat(false);
}

function drawSquare(x, y, color) {
    gCtx.rect(x, y, 20, 20)
    gCtx.strokeStyle = color;
    gCtx.stroke()
}

function drawCircle(x, y, color) {
    gCtx.beginPath();
    gCtx.arc(x, y, 20, 0, 2 * Math.PI);
    gCtx.strokeStyle = color;
    gCtx.stroke();
}

function drawLine(x, y, color) {
    gCtx.beginPath();
    gCtx.arc(x, y, 3, 0, 2 * Math.PI);
    gCtx.strokeStyle = color;
    gCtx.stroke();
    gCtx.fillStyle = color;
    gCtx.fill();
}

function onDownload(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    
    elLink.download = 'myBeautifulCanvas.jpg';
}

function onClear() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

//TODO: User selects a color (starting- fontColor)
//TODO: User Selects a shape- square, circle
//TODO: User can draw the shape freely on the canvas
//TODO: Play with some random variations
//DONE: add download feature
/*
Bonus: Add share to facebook
*/