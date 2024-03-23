

let rectangles = [];
let cols;
let rows;
let button;
let words = "Shuffle";
let shakey = false;
let modal;
let overlayColour = 0;
let cityFarm;


function setup() {
    var canvas = createCanvas(550, 550);
    canvas.parent('sketchHere')
    modal = new Modal(data);

    button = select("#shuffleButton")
    button.mousePressed(shakeNow);

    for (let i = 0; i < 5; i++) {
        rectangles[i] = [];
        for (let j = 0; j < 3; j++) {
            rectangles[i][j] = new Rectangle(i * 110 + 10, j * 160 + 30, 90, 140);
        }
    }
}




function draw() {


    background("AntiqueWhite");
    strokeWeight(6)


    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 3; j++) {
            if (shakey == true) {
                rectangles[i][j].shake();
            } else {
                rectangles[i][j].rollover();
            }
            rectangles[i][j].drawRect();
        }
    }

    noStroke()
    fill(250, 235, 215, overlayColour);
    overlay = rect(6, 27, width - 13, height - 84, 10);
    modal.drawModal();

    push()
    translate(mouseX, mouseY)
    stroke(0, 0, 0);
    fill("springGreen");
    ellipse(0, 0, 25, 50);
    line(0, 0, 0, 40);
    pop()

}

function shakeNow() {
    shakey = !shakey
    if (shakey) {
        buttonLabel = "Stop"
        // shuffle the order of the array 
        modal.shake();
        button.html(buttonLabel)
    } else {
        buttonLabel = "Shuffle"
        button.html(buttonLabel)
    }

}

function mousePressed() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 3; j++) {
            rectangles[i][j].clicked();
        }
    }
    modal.hideModal();
}
