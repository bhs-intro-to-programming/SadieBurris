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

let start = now()

const drawFrame = () => {
   drawBall((now() - start)/15, (now() - start)/15, ballSize, 'blue')
    if (now() - start/15 <= 100) {
      start = now();
    }
};