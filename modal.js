class Modal {
    constructor(messages) {
        this.w = width / 3;
        this.h = height / 2;
        this.x = width / 2 - this.w / 2;
        this.y = height / 2 - this.h / 2;
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

        for(let i=0; i<16; i++){
            this.img[i]=loadImage(this.messageArray.tarot_interpretations[i].pic)
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
            push();
            fill("pink");
            noStroke();
            let key = this.newOrder[this.modalCounter]
            let p = createElement("h1", this.messageArray.tarot_interpretations[key].name);
            console.log(this.newOrder[this.modalCounter])
            p.position(windowWidth / 2, windowHeight / 2);

            //draw modal
            rect(this.x, this.y, this.w, this.h);
            console.log(this.modalCounter)
            image(this.img[key], 50,50, 150, 150)

            fill("black");
            circle(this.cx, this.cy, this.d);

            pop();
        }
    }
}
