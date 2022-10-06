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


/*
RULES!!
Living cells with 2 or 3 living neighbors live on
Any dead cell with exactly 3 living neighbors is born
All other cells die
*/

const gameOfLife = () => {
  const deadOrNo = []
  for(let i = 0; i < width; i++) {
    deadOrNo.push([])
    for(let j = 0; j < height; j++) {
      let color = Math.random() > 0.9 ? 'black' : 'white'
      drawFilledRect(i, j, 1, 1, color)
      let assign = color === 'black' ? deadOrNo[i][j] = 1 : deadOrNo[i][j] = 0
    }
  }
}

gameOfLife()