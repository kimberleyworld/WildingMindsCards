class Modal {
    constructor(messages) {
        this.w = width / 2 + 30;
        this.h = height / 2;
        this.x = width / 2 - this.w / 2;
        this.y = height / 2 - this.h / 2 - 50;
        this.cx = this.x + this.w - 15;
        this.cy = this.y + 15;
        this.d = 20;
        this.showModal = false;

        this.messageArray = messages;
        this.modalCounter = 0;
        this.r = null;
        // this.beach = loadImage("assets/beach.jpg")
        this.shuffleOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        this.newOrder = shuffle(this.shuffleOrder);
        console.log(this.newOrder)
        this.img = []

        for (let i = 0; i < 16; i++) {
            this.img[i] = loadImage(this.messageArray.tarot_interpretations[i].pic)
        }

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

        this.newOrder = shuffle(this.shuffleOrder);
        this.modalCounter = 0;

    }

    drawModal() {
        if (this.showModal == true) {
            noStroke();
            fill("skyBlue");
            rect(this.x, this.y + 70, this.w, this.h);
            let key = this.newOrder[this.modalCounter]


            let p = createElement("h2", this.messageArray.tarot_interpretations[key].name);
            p.position(windowWidth / 2 - this.w / 2 + 15, windowHeight / 2);



            //draw modal
            push()
            noFill();
            strokeWeight(7)
            stroke("blue")
            image(this.img[key], this.x, this.y, this.w, this.h)
            rect(this.x, this.y, this.w, this.h + 70, 5);
            pop()
        
            fill("hotPink");
            circle(this.cx, this.cy, this.d);
        }
    }
}
