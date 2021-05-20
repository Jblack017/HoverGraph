const canvasHeight = window.outerWidth;
const canvasWidth = window.outerHeight;

let r1 = 0;
let r2 = 0;

let a1 = 0;
let a2 = 0;

let a1Inc = 0;
let a2Inc = 0;

let x1 = 0;
let y1 = 0;

function setup() {
  createCanvas(canvasHeight, canvasWidth);
  angleMode(DEGREES);
  background(0);
  frameRate(60);

  r1 = random(100, 115);
  r2 = random(120, 175);

  a1Inc = random(0.1, 1);
  a2Inc = random(0.1, 1);
}

function draw() {
  translate(mouseX, mouseY);

  if (mouseIsPressed) {
    let prevX = 0;
    let prevY = 0;

    for (let i = 0; i < 50; i++) {
      i % 2 === 0 ? (x1 = r1 * sin(a1)) : (x1 = r1 * cos(a1));
      i % 2 !== 0 ? (y1 = r1 * sin(a1)) : (y1 = r1 * cos(a1));

      let x2 = x1 + r2 * sin(a2);
      let y2 = y1 + r2 / cos(a2);

      let r = map(cos(frameCount), -1, 1, random(80, 180), random(120, 220));
      let g = map(cos(frameCount), -1, 1, random(10, 25), random(70, 95));
      let b = map(cos(frameCount), -1, 1, random(7, 10), random(75, 80));

      stroke(r, g, b);

      line(prevX, prevY, x2, y2);

      prevX = x2 + 1;
      prevY = y2 + 1;

      a1 += a1Inc;
      a2 += a2Inc;
    }
  } else {
    let prevX = 0;
    let prevY = 0;

    for (let i = 0; i < 690; i++) {
      i % 2 === 0 ? (x1 = r1 * sin(a1)) : (x1 = r1 * sin(a1));
      i % 2 !== 0 ? (y1 = r1 / cos(a1)) : (y1 = r1 / cos(a1));

      let x2 = x1 - r2 * cos(a2);
      let y2 = y1 - r2 * sin(a2);

      let r = map(cos(frameCount), -1, 1, random(10, 25), random(70, 95));
      let g = map(cos(frameCount), -1, 1, random(7, 10), random(75, 80));
      let b = map(cos(frameCount), -1, 1, random(80, 175), random(180, 200));

      stroke(r, g, b);

      prevX = x2 + 1;
      prevY = y2 + 1;

      line(prevX, prevY, x2, y2);

      a1 += a1Inc;
      a2 += a2Inc;
    }
  }
}
