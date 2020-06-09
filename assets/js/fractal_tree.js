// the default angle each branch is rotated to
var rotationAngle = Math.PI / 4;
// determines the length of each branch
var lengthModifier;
// the size of the first branch
var startingLen = 200;

// creates the canvas
function setup() {
  var canvas = createCanvas(800, 800);
  canvas.parent("canvas");
}

function draw() {
  background(36);
  translate(width / 2, height);
  stroke(255);
  // check to be sure mouse is on the canvas
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    // map the mouse position to length and rotation angle
    lengthModifier = map(mouseX, 0, 800, 0, 0.75);
    rotationAngle = map(mouseY, 0, height, 0, Math.PI / 2);
  }
  // begin the first branch
  branch(startingLen, 10);
}

function branch(len, thickness) {
  // if thickness gets too small to see, set it so it can be seen
  if (thickness < 1) {
    thickness = 1;
  }
  // create the line of this branch
  strokeWeight(thickness);
  line(0, 0, 0, -len);
  translate(0, -len);
  // base case: the length of the branch gets too small
  if (len > 8) {
    // push out and draw the right branches recursively
    push();
    rotate(rotationAngle);
    branch(len * lengthModifier, thickness - 2);
    pop();
    // push out and draw the left branches recursively
    push();
    rotate(-rotationAngle);
    branch(len * lengthModifier, thickness - 2);
    pop();
  }
}
