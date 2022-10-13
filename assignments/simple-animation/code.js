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

const deadOrNo1 = []
const deadOrNo2 = []
const gameOfLife = () => {
  for (let j = 0; j < width; j++) {
    deadOrNo1.push([])
    for (let i = 0; i < height; i++) {
      let color = Math.random() > 0.9 ? 'black' : 'white'
      drawFilledRect(i, j, 1, 1, color)
      if (color === 'black') {
        deadOrNo1[j].push(1);
      } else {
        deadOrNo1[j].push(0);
      }
    }
  }
  for(let j = 0; j < height; j++){
    for(let i = 0; i < width; i++){
      let neighbors = 0;
      for(let countX = -1; countX < 2; countX++) {
        for(let countY = -1; countY < 2; countY++) {
          if(deadOrNo1[j + countY][i + countX] === 1){
            neighbors++
          }
          if(deadOrNo1[j][i] === 1){
            //need 2 or 3 to continue
          } else if(deadOrNo1[j][i] === 0){
            //need 3 to reproduce
          } else {
            //die
          }
        }
      }
    }
  }
}

gameOfLife()