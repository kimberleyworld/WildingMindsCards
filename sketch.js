let rectangles = [];
let cols;
let rows;
let button;
let words = "Shuffle";
let shakey = false;

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent('sketchHere')

    for (let i = 0; i < 10; i++) {
        rectangles[i] = [];
        for (let j = 0; j < 3; j++) {
            rectangles[i][j] = new Rectangle(i * 30 + 100, j * 65 + 100, 25, 60);
        }
    }

    button = select("#shuffleButton")
    button.mousePressed(shakeNow);
}

function shakeNow() {
    shakey = !shakey
    if (shakey) {
        buttonLabel = "Stop"
        button.html(buttonLabel)
    } else {
        buttonLabel = "Shuffle"
        button.html(buttonLabel)
    }

}


function draw() {
    background(225, 192, 203);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 3; j++) {
            if (shakey == true) {
                rectangles[i][j].shake();
            } else {
                rectangles[i][j].rollover();
            }
            rectangles[i][j].drawRect();
        }
    }
}

function mousePressed() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 3; j++) {
            rectangles[i][j].clicked();
        }
    }
}
