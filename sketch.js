let canvasHeight = window.outerWidth;
let canvasWidth = window.outerHeight;

let a1 = 0;
let a2 = 0;

let a1Inc = 0;
let a2Inc = 0;

let prevX = 0;
let prevY = 0;

function setup() {
  createCanvas(canvasHeight, canvasWidth);
  angleMode(DEGREES);
  background(255);

  r1 = random(1, 200);
  r2 = random(1, 200);

  a1Inc = random(0.1, 100);
  a2Inc = random(0.1, 100);
}

function draw() {
  translate(mouseX, mouseY);
  stroke(300);

  if (mouseIsPressed) {
    let x1 = r1 * sin(a1);
    let y1 = r1 * cos(a1);

    let x2 = x1 + r2 * sin(a2);
    let y2 = y1 + r2 * cos(a2);

    for (let i = 0; i < 600; i++) {
      let r = map(sin(frameCount), -1, 1, 0, 150);
      let g = map(sin(frameCount), -1, 1, 0, 50);
      let b = map(sin(frameCount), -1, 1, 100, 255);
      stroke(r, g, b);

      line(prevX, prevY, x2, y2);

      prevX = x2 + 1;
      prevY = y2 + 1;

      a1 += a1Inc;
      a2 += a2Inc;
    }
  } else {
    let x1 = r1 * cos(a1);
    let y1 = r1 * sin(a1);

    let x2 = x1 + r2 * cos(a2);
    let y2 = y1 + r2 * sin(a2);

    for (let i = 0; i < 5; i++) {
      let r = map(sin(frameCount), -1, 1, 20, 100);
      let g = map(sin(frameCount), -1, 1, 100, 200);
      let b = map(sin(frameCount), -1, 1, 100, 200);
      stroke(r, g, b);

      line(prevX, prevY, x2, y2);

      prevX = x2 - 1;
      prevY = y2 - 1;

      a1 -= a1Inc;
      a2 -= a2Inc;
    }
  }
}
