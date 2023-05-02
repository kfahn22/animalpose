// https://editor.p5js.org/kfahn/sketches/OshQky7RS

// This sketch provides an interface for the Animal Pose Control Net Gradio Space on Hugging Face @ https://huggingface.co/spaces/kfahn/Animal_Pose_Control_Net
// Animal Pose Control Net model can be found ADD LINK
// More info can be found @ https://github.com/fi4cr/animalpose
// The Animal Pose Control Net model was developed as part of the Hugging Face Jax-Diffusers Sprint

let d = 10;
let saveButton;
let radio;
let fjoints = [];
let sjoints = [];
let draggedJoint = null;
let choice = "Front";
let diff = false;

// function preload() {
//   img = loadImage("keypoints.jpg");
// }

function setup() {
  createCanvas(256, 256);
  
  // add a radio element 
  radio = createRadio();
  radio.position(300, 15);
  radio.option('1','FRONT');
  radio.option('2', 'SIDE');
  radio.selected('1');
  radio.style('width', '95px');
  radio.style("color", "white");
  radio.style('font-size', "20px");
  // Add a save button
  saveButton = createButton("SAVE IMAGE");
  saveButton.position(300, 100);
  saveButton.mousePressed(saveImage);
  saveButton.style("background-color", "blue");
  saveButton.style("color", "white");
  saveButton.style("font-size", "20px");

  // Add instructions
   let h = createElement("h3", "* Select FRONT or SIDE View");
  let h3 = createElement("h3", "* Use the mouse to move the joints.");
  let h4 = createElement(
    "h4",
    "* When you are happy with the image, press SAVE IMAGE to download the image."
  );
  let h5 = createElement('h4', "* Retrieve the image from your download folder and upload to use as the conditioning image.")
   h.style("color", "#ffffff");
  h.position(10, 270);
  h3.style("color", "#ffffff");
  h3.position(10, 290);
  h4.style("color", "#ffffff");
  h4.position(10, 310);
   h5.style("color", "#ffffff");
  h5.position(10, 330);
//let val = radio.value();
  // if (val === "1") {
  //   fjoints = addFrontViewJoints();
  //   // addFrontViewConnections();
  //   // colorFrontJoints();
  // } else if (val === '2') {
  //   sjoints = addSideViewJoints();
  //   console.log(sjoints);
  //   // addSideViewConnections();
  //   // colorSideViewJoints();
  // }
}

function draw() {
  background(0);
  //background(img);
  let val = radio.value();
  if (val === "1") {
    fjoints = addFrontViewJoints();
    addFrontViewConnections();
    colorFrontJoints();
  } else if (val === '2') {
    sjoints = addSideViewJoints();
    addSideViewConnections();
    colorSideViewJoints();
  }
  //console.log(mouseX, mouseY);
}


function mousePressed() {
  // check if the mouse is over a joint
  for (let i = 0; i < fjoints.length; i++) {
    let j = fjoints[i];
    if (dist(j.x, j.y, mouseX, mouseY) < d / 2) {
      draggedJoint = j; // set the draggedJoint variable to the joint being dragged
      break;
    }
  }
  for (let i = 0; i < sjoints.length; i++) {
    let j = sjoints[i];
    if (dist(j.x, j.y, mouseX, mouseY) < d / 2) {
      draggedJoint = j; // set the draggedJoint variable to the joint being dragged
      break;
    }
  }
}

function mouseDragged() {
  if (draggedJoint) {
    draggedJoint.x = mouseX;
    draggedJoint.y = mouseY;
  }
}

function mouseReleased() {
  draggedJoint = null; // reset the draggedJoint variable
}

function saveImage() {
  saveCanvas("myCanvas", "jpg");
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveImage();
  }
}

saveTile = () => {
  storeItem("img", elt.toDataURL());
};

function addFrontViewJoints() {
  fjoints.push(createVector(130, 106)); // 0 front
  fjoints.push(createVector(124, 59)); // 1
  fjoints.push(createVector(113, 42)); //2
  fjoints.push(createVector(104, 30)); // 3 middle
  fjoints.push(createVector(132, 43));
  fjoints.push(createVector(139, 30));
  fjoints.push(createVector(115, 141));
  fjoints.push(createVector(110, 187)); //7
  fjoints.push(createVector(115, 220));
  fjoints.push(createVector(148, 148)); // 9
  fjoints.push(createVector(143, 194));
  fjoints.push(createVector(148, 227)); // 11
  fjoints.push(createVector(144, 72)); //neck
  return fjoints;
}

function colorFrontJoints() {
  noStroke();
  let p0 = fjoints[0];
  fill(5, 236, 251);
  ellipse(p0.x, p0.y, d, d);
  fill(5, 0, 253);
  let p1 = fjoints[1];
  ellipse(p1.x, p1.y, d, d);
  fill(251, 164, 4);
  let p2 = fjoints[2];
  ellipse(p2.x, p2.y, d, d);
  fill(2, 196, 247);
  let p3 = fjoints[3];
  ellipse(p3.x, p3.y, d, d);
  fill(243, 213, 1);
  let p4 = fjoints[4];
  ellipse(p4.x, p4.y, d, d);
  fill(255, 110, 0);
  let p5 = fjoints[5];
  ellipse(p5.x, p5.y, d, d);
  fill(10, 253, 136);
  let p6 = fjoints[6];
  ellipse(p6.x, p6.y, d, d);
  fill(60, 253, 2);
  let p7 = fjoints[7];
  ellipse(p7.x, p7.y, d, d);
  fill(249, 253, 7);
  let p8 = fjoints[8];
  ellipse(p8.x, p8.y, d, d);
  fill(255, 0, 171);
  let p9 = fjoints[9];
  ellipse(p9.x, p9.y, d, d);
  fill(161, 0, 251);
  let p10 = fjoints[10];
  ellipse(p10.x, p10.y, d, d);
  fill(1, 44, 249);
  let p11 = fjoints[11];
  ellipse(p11.x, p11.y, d, d);
  fill(57, 255, 0);
  let p12 = fjoints[12];
}

function addFrontViewConnections() {
  strokeWeight(3);
  stroke(198, 153, 49);
  line(fjoints[0].x, fjoints[0].y, fjoints[1].x, fjoints[1].y);
  stroke(1, 96, 254);
  line(fjoints[1].x, fjoints[1].y, fjoints[2].x, fjoints[2].y);
  stroke(6, 252, 179);
  line(fjoints[0].x, fjoints[0].y, fjoints[6].x, fjoints[6].y);
  stroke(124, 126, 107);
  line(fjoints[0].x, fjoints[0].y, fjoints[9].x, fjoints[9].y);
  stroke(253, 59, 45);
  line(fjoints[2].x, fjoints[2].y, fjoints[3].x, fjoints[3].y);
  stroke(3, 219, 254);
  line(fjoints[2].x, fjoints[2].y, fjoints[4].x, fjoints[4].y);
  stroke(118, 107, 102);
  line(fjoints[1].x, fjoints[1].y, fjoints[4].x, fjoints[4].y);
  stroke(254, 138, 0);
  line(fjoints[4].x, fjoints[4].y, fjoints[5].x, fjoints[5].y);
  stroke(106, 0, 247);
  line(fjoints[6].x, fjoints[6].y, fjoints[7].x, fjoints[7].y);
  stroke(201, 253, 8);
  line(fjoints[7].x, fjoints[7].y, fjoints[8].x, fjoints[8].y);
  stroke(102, 254, 5);
  line(fjoints[9].x, fjoints[9].y, fjoints[10].x, fjoints[10].y);
  stroke(158, 128, 58);
  line(fjoints[10].x, fjoints[10].y, fjoints[11].x, fjoints[11].y);
}

function addSideViewJoints() {
  sjoints.push(createVector(56, 106)); // 0 front
  sjoints.push(createVector(50, 59)); // 1
  sjoints.push(createVector(39, 42));
  sjoints.push(createVector(32, 30));
  sjoints.push(createVector(58, 43));
  sjoints.push(createVector(65, 30));
  sjoints.push(createVector(63, 141));
  sjoints.push(createVector(59, 187)); //7
  sjoints.push(createVector(64, 220));
  sjoints.push(createVector(74, 148)); // 9
  sjoints.push(createVector(69, 194));
  sjoints.push(createVector(74, 227)); // 11
  sjoints.push(createVector(70, 72)); //neck
  sjoints.push(createVector(214, 78)); //  13 back
  sjoints.push(createVector(192, 141)); //
  sjoints.push(createVector(196, 189));
  sjoints.push(createVector(197, 222));
  sjoints.push(createVector(204, 135));
  sjoints.push(createVector(209, 182));
  sjoints.push(createVector(208, 215));
  return sjoints;
}

function colorSideViewJoints() {
    noStroke();
    let p0 = sjoints[0];
    fill(5, 236, 251);
    ellipse(p0.x, p0.y, d, d);
    fill(5, 0, 253);
    let p1 = sjoints[1];
    ellipse(p1.x, p1.y, d, d);
    fill(251, 164, 4);
    let p2 = sjoints[2];
    ellipse(p2.x, p2.y, d, d);
    fill(2, 196, 247);
    let p3 = sjoints[3];
    ellipse(p3.x, p3.y, d, d);
    fill(243, 213, 1);
    let p4 = sjoints[4];
    ellipse(p4.x, p4.y, d, d);
    fill(255, 110, 0);
    let p5 = sjoints[5];
    ellipse(p5.x, p5.y, d, d);
    fill(10, 253, 136);
    let p6 = sjoints[6];
    ellipse(p6.x, p6.y, d, d);
    fill(60, 253, 2);
    let p7 = sjoints[7];
    ellipse(p7.x, p7.y, d, d);
    fill(249, 253, 7);
    let p8 = sjoints[8];
    ellipse(p8.x, p8.y, d, d);
    fill(255, 0, 171);
    let p9 = sjoints[9];
    ellipse(p9.x, p9.y, d, d);
    fill(161, 0, 251);
    let p10 = sjoints[10];
    ellipse(p10.x, p10.y, d, d);
    fill(1, 44, 249);
    let p11 = sjoints[11];
    ellipse(p11.x, p11.y, d, d);
    fill(57, 255, 0);
    let p12 = sjoints[12];
    fill(244, 7, 75);
    ellipse(p12.x, p12.y, d, d);
    fill(13, 251, 234);
    let p13 = sjoints[13];
    ellipse(p13.x, p13.y, d, d);
    fill(240, 4, 253);
    let p14 = sjoints[14];
    ellipse(p14.x, p14.y, d, d);
    fill(51, 0, 255);
    let p15 = sjoints[15];
    ellipse(p15.x, p15.y, d, d);
    fill(0, 133, 255);
    let p16 = sjoints[16];
    ellipse(p16.x, p16.y, d, d);
    fill(151, 255, 0);
    let p17 = sjoints[17];
    ellipse(p17.x, p17.y, d, d);
    fill(166, 245, 16);
    let p18 = sjoints[18];
    ellipse(p18.x, p18.y, d, d);
    fill(255, 166, 1);
    let p19 = sjoints[19];
    ellipse(p19.x, p19.y, d, d);
}

function addSideViewConnections() {
    strokeWeight(3);
    stroke(198, 153, 49);
    line(sjoints[0].x, sjoints[0].y, sjoints[1].x, sjoints[1].y);
    stroke(4, 253, 245);
    line(sjoints[0].x, sjoints[0].y, sjoints[12].x, sjoints[12].y);
    stroke(1, 96, 254);
    line(sjoints[1].x, sjoints[1].y, sjoints[2].x, sjoints[2].y);
    stroke(6, 252, 179);
    line(sjoints[0].x, sjoints[0].y, sjoints[6].x, sjoints[6].y);
    stroke(124, 126, 107);
    line(sjoints[0].x, sjoints[0].y, sjoints[9].x, sjoints[9].y);
    stroke(253, 59, 45);
    line(sjoints[2].x, sjoints[2].y, sjoints[3].x, sjoints[3].y);
    stroke(3, 219, 254);
    line(sjoints[2].x, sjoints[2].y, sjoints[4].x, sjoints[4].y);
    stroke(118, 107, 102);
    line(sjoints[1].x, sjoints[1].y, sjoints[4].x, sjoints[4].y);
    stroke(254, 138, 0);
    line(sjoints[4].x, sjoints[4].y, sjoints[5].x, sjoints[5].y);
    stroke(106, 0, 247);
    line(sjoints[6].x, sjoints[6].y, sjoints[7].x, sjoints[7].y);
    stroke(201, 253, 8);
    line(sjoints[7].x, sjoints[7].y, sjoints[8].x, sjoints[8].y);
    stroke(102, 254, 5);
    line(sjoints[9].x, sjoints[9].y, sjoints[10].x, sjoints[10].y);
    stroke(158, 128, 58);
    line(sjoints[10].x, sjoints[10].y, sjoints[11].x, sjoints[11].y);
    stroke(151, 128, 130);
    line(sjoints[12].x, sjoints[12].y, sjoints[13].x, sjoints[13].y);
    stroke(127, 123, 232);
    line(sjoints[13].x, sjoints[13].y, sjoints[14].x, sjoints[14].y);
    stroke(25, 17, 180);
    line(sjoints[14].x, sjoints[14].y, sjoints[15].x, sjoints[15].y);
    stroke(29, 65, 252);
    line(sjoints[15].x, sjoints[15].y, sjoints[16].x, sjoints[16].y);
    stroke(190, 7, 250);
    line(sjoints[13].x, sjoints[13].y, sjoints[17].x, sjoints[17].y);
    stroke(11, 252, 39);
    line(sjoints[17].x, sjoints[17].y, sjoints[18].x, sjoints[18].y);
    stroke(254, 210, 1);
    line(sjoints[18].x, sjoints[18].y, sjoints[19].x, sjoints[19].y);
}