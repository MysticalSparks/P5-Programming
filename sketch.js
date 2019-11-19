//create 3 variables
var r, g, b; 
var stageColor = "#fcc5f2";
let x = [],
  y = [],
  segNum = 50,
  segLength = 60;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(2280, 1280);
  strokeWeight(10);
  stroke(355, 100);
    //initialize the variables to a random number
    r = random(255);
    g = random(255);
    b = random(255);         
}

function draw() {
  background(stageColor);
background(r, g, b);
  dragSegment(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    dragSegment(i + 1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

function mousePressed(){
    //reset the value of the variables
    r = random(255);
    g = random(255);
    b = random(255); 
}



