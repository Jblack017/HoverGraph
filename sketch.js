let canvasHeight = window.outerWidth;
let canvasWidth = window.outerHeight;

function setup() {
  createCanvas(canvasHeight, canvasWidth);
  angleMode(DEGREES);
  background(0);
  frameRate(180);

  r1 = random(100, 123);
  r2 = random(100, 134);

  a1Inc = random(100, 145);
  a2Inc = random(100, 156);

  prevX = random(100, 145);
  prevY = random(100, 145);

  a1 = random(100, 145);
  a2 = random(100, 145);

  a1Inc = random(100, 145);
  a2Inc = random(100, 145);
}

function draw() {
  translate(mouseX, mouseY);
  stroke(300);

  if (mouseIsPressed) {
    let x1 = r1 * sin(a1);
    let y1 = r1 * cos(a1);

    let x2 = x1 + r2 * cos(a2);
    let y2 = y1 + r2 * sin(a2);

    for (let i = 0; i < 3; i++) {
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

    for (let i = 0; i < 3; i++) {
      let r = map(cos(frameCount - i), -1, 1, 20, 100);
      let g = map(cos(frameCount - i), -1, 1, 100, 200);
      let b = map(cos(frameCount - i), -1, 1, 100, 200);
      stroke(r, g, b);

      line(prevX, prevY, x2, y2);

      prevX = x2 + 1;
      prevY = y2 + 2;

      a1 -= a1Inc;
      a2 -= a2Inc;
    }
  }
}
