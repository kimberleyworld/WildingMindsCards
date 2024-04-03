

let rectangles = [];
let cols;
let rows;
let button;
let words = "Shuffle";
let shakey = false;
let modal;
let overlayColour = 0;



function setup() {
    var canvas = createCanvas(500, 450);
    canvas.parent('sketchHere')

    noCursor();

    modal = new Modal(data);

    button = select("#shuffleButton")
    button.mousePressed(shakeNow);

    for (let i = 0; i < 5; i++) {
        rectangles[i] = [];
        for (let j = 0; j < 3; j++) {
            rectangles[i][j] = new Rectangle(i * 95 + 20, j * 140 + 20, 80, 125);
        }
    }

}




function draw() {

    stroke("blue");

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
    //draws an overlay when card has been selected
    rect(0, 0, width, height, 10);
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
    }
    else {
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
