function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke();
}

function draw() {
  background(247, 231, 214);

  // A soft shadow keeps the hand grounded while it waves.
  push();
  translate(0, 145, -10);
  fill(215, 181, 166, 90);
  ellipse(0, 0, 170, 28);
  pop();

  const wave = frameCount * 0.08;

  push();
  translate(0, 22);
  fill(240, 166, 139);

  // Wrist and palm.
  rectMode(CENTER);
  rect(0, 133, 58, 105, 24);
  ellipse(0, 42, 142, 155);

  // The fingers bend by different amounts to create a natural wave.
  drawFinger(-53, 116, -0.13 + sin(wave) * 0.12);
  drawFinger(-18, 151, -0.05 + sin(wave + 0.55) * 0.1);
  drawFinger(18, 163, 0.03 + sin(wave + 1.1) * 0.1);
  drawFinger(53, 139, 0.12 + sin(wave + 1.65) * 0.12);

  // The thumb sweeps outward as the fingers move.
  push();
  translate(-61, 53);
  rotate(-0.78 + sin(wave + 0.8) * 0.08);
  rect(0, 0, 40, 91, 20);
  pop();

  // Simple palm lines add definition without distracting from the animation.
  noFill();
  stroke(204, 125, 111, 150);
  strokeWeight(3);
  arc(-15, 53, 65, 74, 0.3, 2.25);
  arc(10, 69, 54, 57, 0.8, 2.5);
  noStroke();
  pop();
}

function drawFinger(x, length, angle) {
  push();
  translate(x, -length / 2);
  rotate(angle);
  rect(0, 0, 31, length, 15);
  pop();
}