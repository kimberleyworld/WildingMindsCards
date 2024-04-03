class Modal {
    constructor(messages) {
        this.w = width / 2;
        this.h = height / 2;
        this.x = width / 2 - this.w / 2;
        this.y = height / 2 - this.h / 2 - 20;
        this.cx = this.x + this.w - 15;
        this.cy = this.y + 15;
        this.d = 40;
        this.showModal = false;
        this.messageArray = messages;
        this.modalCounter = 0;
        this.r = null;
        this.shuffleOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        this.newOrder = shuffle(this.shuffleOrder);
        console.log(this.newOrder)
        this.img = []

        // create an array with all the images loaded into it
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
            // button.show()
        }
    }

    shake() {

        // shuffle the array of intagers and that will be the random order the cards are displayed in 
        this.newOrder = shuffle(this.shuffleOrder);
        this.modalCounter = 0;

    }

    drawModal() {
        if (this.showModal == true) {
            noStroke();

            let key = this.newOrder[this.modalCounter]

            // button.hide()
            let name = this.messageArray.tarot_interpretations[key].name
            let lyrics = this.messageArray.tarot_interpretations[key].description

            //draw modal
            push()
            noFill();
            strokeWeight(7)
            stroke("blue")
            image(this.img[key], this.x, this.y, this.w, this.h + 70)
            rect(this.x, this.y, this.w, this.h + 70, 5);
            pop()


            // exit button 
            fill("hotPink");
            circle(this.cx, this.cy, this.d);
            strokeWeight(7)
            stroke("blue")
            line(this.cx - 10, this.cy - 10, this.cx + 10, this.cy + 10)
            line(this.cx + 10, this.cy - 10, this.cx - 10, this.cy + 10)


            // text 
            push()
            textSize(16);
            fill('blue');
            stroke("pink");
            strokeWeight(3);
            textAlign(CENTER, CENTER);
            push()
            textSize(22);
            text(name, this.x + 5, this.y - 90, this.w - 10, this.h +70);
            pop()
            text(lyrics, this.x + 5, this.y + 30, this.w - 10, this.h+100);
            pop()
        }
    }
}
