

let rectangles = [];
let cols;
let rows;
let button;
let words = "Shuffle";
let shakey = false;
let modal;
let overlayColour = 0;
let cityFarm;

function preload() {
    // cityFarm = loadImage("assets/cityFarm.jpg");
    // beach = loadImage("assets/beach.jpg");
    // birds = loadImage("assets/birds.jpg");
    // blossom = loadImage("assets/blossom.jpg");
    // freshFood = loadImage("assets/freshFood.jpg");
    // fullMoon = loadImage("assets/fullMoon.jpg");
    // gardening = loadImage("assets/gardening.jpg");
    // openSkies = loadImage("assets/openSkies.jpg");
    // rain = loadImage("assets/rain.jpg");
    // seeds = loadImage("assets/seeds.jpg");
    // stream = loadImage("assets/stream.jpg");
    // sunrise = loadImage("assets/sunrise.jpg");
    // swan = loadImage("assets/swan.jpg");
    // waves = loadImage("assets/waves.jpg");
    // trees = loadImage("assets/trees.jpg");
}

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent('sketchHere')
    modal = new Modal(data);


    

    button = select("#shuffleButton")
    button.mousePressed(shakeNow);

    for (let i = 0; i < 5; i++) {
        rectangles[i] = [];
        for (let j = 0; j < 3; j++) {
            rectangles[i][j] = new Rectangle(i * 50 + 125, j * 80 + 140, 40, 70);
        }
    }
}




function draw() {
    background(225, 192, 203);
  
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

    fill(255, 255, 255, overlayColour);
    overlay = rect(0, 0, width, height);
    modal.drawModal();
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
