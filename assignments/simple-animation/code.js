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