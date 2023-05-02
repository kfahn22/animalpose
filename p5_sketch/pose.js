class Animal {
    constructor(_d) {
        this.points = [];
        this.d = _d;
        this.draggedJoint = null;
    }

    addFrontViewJoints() {
        this.points.push(createVector(130, 106)); // 0 front
        this.points.push(createVector(124, 59)); // 1
        this.points.push(createVector(113, 42));  //2
        this.points.push(createVector(104, 30)); // 3 middle
        this.points.push(createVector(132, 43));
        this.points.push(createVector(139, 30));
        this.points.push(createVector(115, 141));
        this.points.push(createVector(110, 187)); //7
        this.points.push(createVector(115, 220));
        this.points.push(createVector(148, 148)); // 9
        this.points.push(createVector(143, 194));
        this.points.push(createVector(148, 227)); // 11
        this.points.push(createVector(144, 72)); //neck
        return this.points;
    }

    colorFrontJoints() {
        noStroke();
        let p0 = this.points[0];
        fill(5, 236, 251);
        ellipse(p0.x, p0.y, this.d, this.d);
        fill(5, 0, 253);
        let p1 = this.points[1];
        ellipse(p1.x, p1.y, this.d, this.d);
        fill(251, 164, 4);
        let p2 = this.points[2];
        ellipse(p2.x, p2.y, this.d, this.d);
        fill(2, 196, 247);
        let p3 = this.points[3];
        ellipse(p3.x, p3.y, this.d, this.d);
        fill(243, 213, 1);
        let p4 = this.points[4];
        ellipse(p4.x, p4.y, this.d, this.d);
        fill(255, 110, 0);
        let p5 = this.points[5];
        ellipse(p5.x, p5.y, this.d, this.d);
        fill(10, 253, 136);
        let p6 = this.points[6];
        ellipse(p6.x, p6.y, this.d, this.d);
        fill(60, 253, 2);
        let p7 = this.points[7];
        ellipse(p7.x, p7.y, this.d, this.d);
        fill(249, 253, 7);
        let p8 = this.points[8];
        ellipse(p8.x, p8.y, this.d, this.d);
        fill(255, 0, 171);
        let p9 = this.points[9];
        ellipse(p9.x, p9.y, this.d, this.d);
        fill(161, 0, 251);
        let p10 = this.points[10];
        ellipse(p10.x, p10.y, this.d, this.d);
        fill(1, 44, 249);
        let p11 = this.points[11];
        ellipse(p11.x, p11.y, this.d, this.d);
        fill(57, 255, 0);
        let p12 = this.points[12];
    }

    addFrontViewConnections() {
        strokeWeight(3);
        stroke(198, 153, 49);
        line(this.points[0].x, this.points[0].y, this.points[1].x, this.points[1].y);
        stroke(1, 96, 254);
        line(this.points[1].x, this.points[1].y, this.points[2].x, this.points[2].y);
        stroke(6, 252, 179);
        line(this.points[0].x, this.points[0].y, this.points[6].x, this.points[6].y);
        stroke(124, 126, 107);
        line(this.points[0].x, this.points[0].y, this.points[9].x, this.points[9].y);
        stroke(253, 59, 45);
        line(this.points[2].x, this.points[2].y, this.points[3].x, this.points[3].y);
        stroke(3, 219, 254);
        line(this.points[2].x, this.points[2].y, this.points[4].x, this.points[4].y);
        stroke(118, 107, 102);
        line(this.points[1].x, this.points[1].y, this.points[4].x, this.points[4].y);
        stroke(254, 138, 0);
        line(this.points[4].x, this.points[4].y, this.points[5].x, this.points[5].y);
        stroke(106, 0, 247);
        line(this.points[6].x, this.points[6].y, this.points[7].x, this.points[7].y);
        stroke(201, 253, 8);
        line(this.points[7].x, this.points[7].y, this.points[8].x, this.points[8].y);
        stroke(102, 254, 5);
        line(this.points[9].x, this.points[9].y, this.points[10].x, this.points[10].y);
        // stroke(158, 128, 58);
        line(this.points[10].x, this.points[10].y, this.points[11].x, this.points[11].y);
        stroke(151, 128, 130);

    }

    addSideViewJoints() {
        this.points.push(createVector(56, 106)); // 0 front
        this.points.push(createVector(50, 59)); // 1
        this.points.push(createVector(39, 42));
        this.points.push(createVector(32, 30));
        this.points.push(createVector(58, 43));
        this.points.push(createVector(65, 30));
        this.points.push(createVector(63, 141));
        this.points.push(createVector(59, 187)); //7
        this.points.push(createVector(64, 220));
        this.points.push(createVector(74, 148)); // 9
        this.points.push(createVector(69, 194));
        this.points.push(createVector(74, 227)); // 11
        this.points.push(createVector(70, 72)); //neck
        this.points.push(createVector(214, 78)); //  13 back
        this.points.push(createVector(192, 141)); //
        this.points.push(createVector(196, 189));
        this.points.push(createVector(197, 222));
        this.points.push(createVector(204, 135));
        this.points.push(createVector(209, 182));
        this.points.push(createVector(208, 215));
        return this.points;
    }

    colorSideJoints() {
        noStroke();
        let p0 = this.points[0];
        fill(5, 236, 251);
        ellipse(p0.x, p0.y, this.d, this.d);
        fill(5, 0, 253);
        let p1 = this.points[1];
        ellipse(p1.x, p1.y, this.d, this.d);
        fill(251, 164, 4);
        let p2 = this.points[2];
        ellipse(p2.x, p2.y, this.d, this.d);
        fill(2, 196, 247);
        let p3 = this.points[3];
        ellipse(p3.x, p3.y, this.d, this.d);
        fill(243, 213, 1);
        let p4 = this.points[4];
        ellipse(p4.x, p4.y, this.d, this.d);
        fill(255, 110, 0);
        let p5 = this.points[5];
        ellipse(p5.x, p5.y, this.d, this.d);
        fill(10, 253, 136);
        let p6 = this.points[6];
        ellipse(p6.x, p6.y, this.d, this.d);
        fill(60, 253, 2);
        let p7 = this.points[7];
        ellipse(p7.x, p7.y, this.d, this.d);
        fill(249, 253, 7);
        let p8 = this.points[8];
        ellipse(p8.x, p8.y, this.d, this.d);
        fill(255, 0, 171);
        let p9 = this.points[9];
        ellipse(p9.x, p9.y, this.d, this.d);
        fill(161, 0, 251);
        let p10 = this.points[10];
        ellipse(p10.x, p10.y, this.d, this.d);
        fill(1, 44, 249);
        let p11 = this.points[11];
        ellipse(p11.x, p11.y, this.d, this.d);
        fill(57, 255, 0);
        let p12 = this.points[12];
        fill(244, 7, 75);
        ellipse(p12.x, p12.y, this.d, this.d);
        fill(13, 251, 234);
        let p13 = this.points[13];
        ellipse(p13.x, p13.y, this.d, this.d);
        fill(240, 4, 253);
        let p14 = this.points[14];
        ellipse(p14.x, p14.y, this.d, this.d);
        fill(51, 0, 255);
        let p15 = this.points[15];
        ellipse(p15.x, p15.y, this.d, this.d);
        fill(0, 133, 255);
        let p16 = this.points[16];
        ellipse(p16.x, p16.y, this.d, this.d);
        fill(151, 255, 0);
        let p17 = this.points[17];
        ellipse(p17.x, p17.y, this.d, this.d);
        fill(166, 245, 16);
        let p18 = this.points[18];
        ellipse(p18.x, p18.y, this.d, this.d);
        fill(255, 166, 1);
        let p19 = this.points[19];
        ellipse(p19.x, p19.y, this.d, this.d);
    }

    addSideViewConnections() {
        strokeWeight(3);
        stroke(198, 153, 49);
        line(this.points[0].x, this.points[0].y, this.points[1].x, this.points[1].y);
        stroke(4, 253, 245);
        line(this.points[0].x, this.points[0].y, this.points[12].x, this.points[12].y);
        stroke(1, 96, 254);
        line(this.points[1].x, this.points[1].y, this.points[2].x, this.points[2].y);
        stroke(6, 252, 179);
        line(this.points[0].x, this.points[0].y, this.points[6].x, this.points[6].y);
        stroke(124, 126, 107);
        line(this.points[0].x, this.points[0].y, this.points[9].x, this.points[9].y);
        stroke(253, 59, 45);
        line(this.points[2].x, this.points[2].y, this.points[3].x, this.points[3].y);
        stroke(3, 219, 254);
        line(this.points[2].x, this.points[2].y, this.points[4].x, this.points[4].y);
        stroke(118, 107, 102);
        line(this.points[1].x, this.points[1].y, this.points[4].x, this.points[4].y);
        stroke(254, 138, 0);
        line(this.points[4].x, this.points[4].y, this.points[5].x, this.points[5].y);
        stroke(106, 0, 247);
        line(this.points[6].x, this.points[6].y, this.points[7].x, this.points[7].y);
        stroke(201, 253, 8);
        line(this.points[7].x, this.points[7].y, this.points[8].x, this.points[8].y);
        stroke(102, 254, 5);
        line(this.points[9].x, this.points[9].y, this.points[10].x, this.points[10].y);
        stroke(158, 128, 58);
        line(this.points[10].x, this.points[10].y, this.points[11].x, this.points[11].y);
        stroke(151, 128, 130);
        line(this.points[12].x, this.points[12].y, this.points[13].x, this.points[13].y);
        stroke(127, 123, 232);
        line(this.points[13].x, this.points[13].y, this.points[14].x, this.points[14].y);
        stroke(25, 17, 180);
        line(this.points[14].x, this.points[14].y, this.points[15].x, this.points[15].y);
        stroke(29, 65, 252);
        line(this.points[15].x, this.points[15].y, this.points[16].x, this.points[16].y);
        stroke(190, 7, 250);
        line(this.points[13].x, this.points[13].y, this.points[17].x, this.points[17].y);
        stroke(11, 252, 39);
        line(this.points[17].x, this.points[17].y, this.points[18].x, this.points[18].y);
        stroke(254, 210, 1);
        line(this.points[18].x, this.points[18].y, this.points[19].x, this.points[19].y);
    }

    updateJoints() {
        // check if the mouse is over a joint
        for (let i = 0; i < this.points.length; i++) {
            let j = this.points[i];
            if (dist(j.x, j.y, mouseX, mouseY) < this.d / 2) {
                this.draggedJoint = j; // set the draggedJoint variable to the joint being dragged
                break;
            }
        }
    }

    mouseDragged() {
        if (this.draggedJoint) {
            this.draggedJoint.x = mouseX;
            this.draggedJoint.y = mouseY;
        }
    }

    mouseReleased() {
        this.draggedJoint = null; // reset the draggedJoint variable
    }
}