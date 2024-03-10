let x;
let shakey;
let button;
let buttonLabel;
let boxes = [];

function setup() {
    var canvas = createCanvas(500, 500, WEBGL);
    canvas.parent('sketchHere')

    shakey = false;

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
    translate(-200, -150)
    fill("pink")

    for (x = 25; x < 400; x = x + 60) {
        for (y = 25; y < 400; y = y + 130) {
            push()
            if (shakey == true) {
                fill(255, 192, random(200, 300))
                translate(random(-2, 2), random(-2, 2));
            }
            translate(x, y);
            box(50, 120, 3);
            pop()
        }
    }
}
