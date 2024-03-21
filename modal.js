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
        this.messageArray = messages;
        this.newMessages = shuffle(this.messageArray);
        this.modalCounter = 0;
        this.r = null;
    }

    showModalBool() {
        this.showModal = true;
    }

    hideModal() {    //if you click the close button
        if (dist(mouseX, mouseY, this.cx, this.cy) < this.d / 2) {
            this.showModal = false;
            // change rest of the screen opacity back to normal
            overlayColour = 0;
            // count how many times its been opened so we can display the next element in array
            this.modalCounter++;
            // remove the modal
            removeElements()
        }
    }

    shake() {
        this.newMessages = shuffle(this.messageArray);
        this.modalCounter = 0;
    }

    drawModal() {
        if (this.showModal == true) {
            push();
            fill("pink");
            noStroke();

            let p = createElement("h1", this.newMessages[this.modalCounter]);
            p.position(this.x + 10, this.y + 100);

            //draw modal
            rect(this.x, this.y, this.w, this.h);
            fill("black");
            circle(this.cx, this.cy, this.d);

            pop();
        }
    }
}
