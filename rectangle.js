class Rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.colour = "pink";
        this.hasBeenPressed = false;
        this.isOver = "";
    }

    rollover() {
        if (
            mouseX > this.x &&
            mouseX < this.x + this.w &&
            mouseY > this.y &&
            mouseY < this.y + this.h &&
            this.hasBeenPressed == false
        ) {
            this.colour = "blue";
            this.Over = true;
        } else if (this.hasBeenPressed == true) {
            this.colour = "red";
            this.over = false;
        } else {
            this.over = false;
            this.colour = "pink";
        }
    }

    clicked() {
        if (
            mouseX > this.x &&
            mouseX < this.x + this.w &&
            mouseY > this.y &&
            mouseY < this.y + this.h
        ) {
            console.log("clicked");
            this.colour = "red";
            this.hasBeenPressed = true;
        }
    }

    shake() {
        translate(random(-2, 2), random(-2, 2));
        this.colour = "pink";
        this.over = false;
        this.hasBeenPressed = false;
    }

    drawRect() {
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    }
}
