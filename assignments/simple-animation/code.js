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

const drawBouncingThing = (time) => {
  clear();
  let left = time / 10 % (width * 2);
  let right = (width * 2) - (time / 10) - width % (width * 2)
  if (Math.min(left, right) === left) {
    drawFilledCircle(left, 200, 5, 'blue');
} else {
    drawFilledCircle(width + right, 200, 5, 'blue');
} 
};

animate(drawBouncingThing);

