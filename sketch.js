function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  strokeWeight(4)
  translate(width / 2, height / 2);
  beginShape();
  for (i = 0; i < 359; i++) {
    let r1min = map(sin(frameCount), -1, 1, 20, 80);
    let r1max = map(sin(frameCount * 2), -1, 1, 80, 0);

    let r2min = map(sin(frameCount/2), -1, 1, 80, 20);
    let r2max = map(sin(frameCount), -1, 1, 0, 80);

    let r3min = map(sin(frameCount/2), -1, 1, 80, 20);
    let r3max = map(sin(frameCount * 2), -1, 1, 0, 80);

    let r1 = map(sin(i * 3), -1, 1, r1min, r1max);
    let r2 = map(sin(i * 6 + 90), -1, 1, r2min, r2max);
    let r3 = map(sin(i * 9 + 180), -1, 1, r3min, r3max);
    let r = r1 + r2 + r3;
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
