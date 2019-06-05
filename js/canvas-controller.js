'use strict'
let gCanvas;
let gCtx;
let gDrawing;
let gMouseDown; 

function init() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');

    gCanvas.width = window.innerWidth - 50;
    gCanvas.height = window.innerHeight - 180;

    gCanvas.addEventListener("mouseup", stopInterval);
}

function onChangeMouseStat(isDown) {
    gMouseDown = (isDown)? true : false;

}

function onDraw(ev) {
    let currElement = document.getElementById('shape-select').value;
    let currColor = document.getElementById('color-picked').value;
    gDrawing = setInterval(function () {
        if (!gMouseDown) return;
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
    }, 1, ev);
    // gCtx.save()
    // gCtx.restore()

    // gets shape from user acc to option input
    // gets color from user
    // switch: in case 'square'/'circle'
}

function stopInterval() {
    onChangeMouseStat(false);
    clearInterval(gDrawing);
}

function drawSquare(x, y, color) {
    gCtx.rect(x,y, 20, 20)
    gCtx.fillStyle = color
    gCtx.fillRect(x,y, 20, 20)
    gCtx.stroke()
    gCtx.fill()
}

function drawCircle(x, y, color) {

}

function onDownload(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    
    elLink.download = 'myBeautifulCanvas.jpg';
}

//TODO: User selects a color (starting- fontColor)
//TODO: User Selects a shape- square, circle
//TODO: User can draw the shape freely on the canvas
//TODO: Play with some random variations
//DONE: add download feature
/*
Bonus: Add share to facebook
*/