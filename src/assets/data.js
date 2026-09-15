let flower = {
  x: 200,
  y:200,
  emoji:'🌸'
};

function setup() {
  createCanvas(400, 400);
  console.log(flower);
}

function draw() {
  background(220);
  textSize(100);
  text(flower.emoji, flower.x, flower.y);
}