/*
let x = Math.random();
let start = now();
//let x = 100;

const drawMovingThing = () => {
  let y = ((now() - start)/3);
  let currentX = x + ((now() - start)/5);
  clear();
  drawFilledRect(0, 0, 500, 500, 'blue');
  drawFilledCircle(currentX, y, 5, 'white');
  if (currentX >= width || y >= height) {
      x = Math.random() * width;
      start = now();
  };
};

animate(drawMovingThing);
*/

/*
const drawBouncingThing = (time) => {
  var xLocation = time % (width * 2);
  clear()
  if(xLocation <= width) {
    drawFilledCircle(xLocation, 200, 5, 'blue');
  } else if(xLocation >= width) {
    drawFilledCircle(width - (xLocation - width), 200, 5, 'blue');
  }
};

animate(drawBouncingThing);
*/

drawTriangle(width/2, 0, 0, height, width, height);
const makeSir = (time) => {
  const x1 = width/2 - (1/2 ** time) * width/2;
  const y1 = 1/2 ** time * width;
  const x2 = x1;
  const y2 = width/2 + (1/2 ** time) * width/2;
  const x3 = width/2;
  const y3 = height * 1/2 ** time;
  drawTriangle(x1, y1, x2, y2, x3, y3)
} 

makeSir();