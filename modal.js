class Modal {
    constructor() {
        this.w = width / 3;
        this.h = height / 2;
        this.x = width / 2 - this.w / 2;
        this.y = height / 2 - this.h / 2;
        this.cx = this.x + this.w - 15;
        this.cy = this.y + 15;
        this.d = 20;
        this.showModal = false;
        this.colourBody = "pink";
    }

    showModalBool() {
        this.showModal = true;
    }

    hideModal() {
        if (dist(mouseX, mouseY, this.cx, this.cy) < this.d / 2
        ) {
            console.log("close");
            this.showModal = false;
            overlayColour = 0;
        }
    }

    changeColour() {
        if (this.showModal == false) {
            this.colourBody = color("rgba(230,5,0,0)");
        } else {
            this.colourBody = "pink";
        }
    }

    drawModal() {
        if (this.showModal == true) {
            push();
            fill(this.colourBody);
            noStroke();
            rect(this.x, this.y, this.w, this.h);
            fill("black");
            circle(this.cx, this.cy, this.d);
            pop();
        }
    }
}
