// holds the path of vertices to be drawn
var path;
// variables for computing spirograph vertices
var R, r, a, t, tMax, Rminr, rDivR, tPlus;
// scale used for size to draw the spirographs
var scale;
// values for changing color gradually
var i, j, k, m, x, y;
// for writing variables to the canvas
var vals;
// values for tracking color change
var jInc = true,
  kInc = true,
  mInc = true;

// sets up canvas and variables
function setup() {
  // create canvas
  let canvas = createCanvas(1000, 800);
  canvas.parent("canvas");
  // instantiate variables
  instantiateVariables();
}

// instantiates all the variables randomly and resets the canvas
function instantiateVariables() {
  // instantiate center of the canvas
  x = width / 2;
  y = height / 2;
  background(51);
  path = new Array();
  scale = 50;
  // create random color values
  j = floor(random(0, 255));
  k = floor(random(0, 255));
  m = floor(random(0, 255));
  // create random variable values
  R = random(2, 10) * scale;
  r = random(1, 5) * scale;
  Rminr = R - r;
  rDivR = r / R;
  a = random(1, 7) * scale;
  t = 1;
  tPlus = random(0.1, 0.5);
  i = 1;
  // set text for use later, if wished
  vals =
    "R: " +
    R.toFixed(2) +
    " r: " +
    r.toFixed(2) +
    " a: " +
    a.toFixed(2) +
    " t += " +
    tPlus.toFixed(2);
}

// draws the sprigraph
function draw() {
  background(51);
  // get the next x- and y-values
  let newX = x + (Rminr * cos(rDivR * t) + a * cos((1 - rDivR) * t));
  let newY = y + (Rminr * sin(rDivR * t) - a * sin((1 - rDivR) * t));
  // add a new point to the path
  path.push({ x: newX, y: newY });

  // draw the spirograph
  beginShape();
  getColor();
  stroke(j, k, m);
  strokeWeight(2);
  noFill();
  path.forEach(pos => {
    vertex(pos.x, pos.y);
  });
  endShape();

  // draw text of values, if wished
  stroke(255);
  textSize(20);
  //text(vals, 10, 50);
  //text("R : r = " + (R / r).toFixed(2), 10, 75);
  t += tPlus;
  i++;
}

// gets the current color based on changes
// keeps track of increasing and decreasing, changing colors pseudo-randomly
function getColor() {
  if (j < 255 && jInc) {
    j += floor(random(0, 4));
  } else if (j > 100 && !jInc) {
    j -= floor(random(0, 4));
  } else jInc = !jInc;

  if (k < 255 && kInc) {
    k += floor(random(0, 4));
  } else if (k > 100 && !kInc) {
    k -= floor(random(0, 4));
  } else kInc = !kInc;

  if (m < 255 && mInc) {
    m += floor(random(0, 4));
  } else if (j > 100 && !mInc) {
    m -= floor(random(0, 4));
  } else mInc = !mInc;
}

// handle mouse presses
function mousePressed() {
  // remcreate variables when mouse is pressed
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    instantiateVariables();
  }
}
