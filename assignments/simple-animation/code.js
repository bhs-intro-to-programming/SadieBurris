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
let start = now();

const drawBouncingThing = () => {
  let currentX = (now() - start) / 15;
  clear();
  drawFilledCircle(currentX, 200, 5, 'blue');
  if (currentX >= width) {
    start = now() * -1 + width;
  }
  
};

animate(drawBouncingThing);