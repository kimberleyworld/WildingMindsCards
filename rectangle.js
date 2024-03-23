class Rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.colour = "lightGreen";
        this.hasBeenPressed = false;
        this.isOver = "";
        this.strokecolour = "green"

    }

    rollover() {
        if (
            mouseX > this.x &&
            mouseX < this.x + this.w &&
            mouseY > this.y &&
            mouseY < this.y + this.h &&
            this.hasBeenPressed == false && modal.showModal == false
        ) {
            this.colour = "skyBlue";
            this.Over = true;
        } else if (this.hasBeenPressed == true) {
            this.colour = "skyBlue";
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
            mouseY < this.y + this.h &&
            this.hasBeenPressed == false && modal.showModal == false
        ) {
            this.hasBeenPressed = true;
            overlayColour = 200;
            modal.showModalBool()
        }
    }

    shake() {
        translate(random(-2, 2), random(-2, 2));
        this.colour = "blue";
        this.over = false;
        this.hasBeenPressed = false;
    }

    drawRect() {
        push()
        stroke("blue");
        fill(this.colour);
        //  noStroke();
        rect(this.x, this.y, this.w, this.h, 10);
        pop()
    }
}
