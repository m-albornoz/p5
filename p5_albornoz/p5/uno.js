function setup() {
  createCanvas(windowWidth, windowHeight/2);
  background(0);
  noLoop ();
}

function draw() {
  for (var x = 0; x < windowWidth; x+=24) {
    colorMode(HSB);
    noStroke ();
    ellipseMode (CENTER);
    fill(100,x/5,240);
    ellipse(x, windowHeight/4, 50, 50);
  }
}
