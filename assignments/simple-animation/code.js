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
const gameOfLifeStart = () => {
  for (let j = 0; j < width; j++) {
    deadOrNo1.push([])
    deadOrNo2.push([])
    for (let i = 0; i < height; i++) {
      let color = Math.random() > 0.9 ? 'black' : 'white'
      drawFilledRect(i, j, 1, 1, color)
      if (color === 'black') {
        deadOrNo2[j].push(1);
        deadOrNo1[j].push(1);
      } else {
        deadOrNo2[j].push(0);
        deadOrNo1[j].push(0);
      }
    }
  }
}

const neighbors2 = (i, j) => {
  let neighborsNum = 0
  for (let countX = -1; countX < 2; countX++) {
    for (let countY = -1; countY < 2; countY++) {
      let checkPosJ = j + countY === -1 ? height - 1 : j + countY === height ? 0 : j + countY
      let checkPosI = i + countX === -1 ? width - 1 : i + countX === width ? 0 : i + countX
      if (deadOrNo1[checkPosJ][checkPosI] === 1) {
        neighborsNum++
      }
    }
  }
  return neighborsNum
}
const neighbors1 = (i, j) => {
  let neighborsNum = 0;
  for (let countX = -1; countX < 2; countX++) {
    for (let countY = -1; countY < 2; countY++) {
      let checkPosJ = j + countY === -1 ? height - 1 : j + countY === height ? 0 : j + countY
      let checkPosI = i + countX === -1 ? width - 1 : i + countX === width ? 0 : i + countX
      if (deadOrNo2[checkPosJ][checkPosI] === 1) {
        neighborsNum++
      }
    }
  }
  return neighborsNum
}

const newLife1 = (nei) => {
  if (deadOrNo2 === 1) {
    if (nei === 3 || nei === 4) {
      return true
    } else {
      return false
    }
  } else if (deadOrNo2 === 0) {
    if (nei === 3) {
      return true
    } else {
      return false
    }
  } else {
    return 'something is wrong'
  }
}
const newLife2 = (nei) => {
  if (deadOrNo1 === 1) {
    if (nei === 3 || nei === 4) {
      return true
    } else {
      return false
    }
  } else if (deadOrNo1 === 0) {
    if (nei === 3) {
      return true
    } else {
      return false
    }
  } else {
    return 'something is wrong'
  }
}

const gameOfLife1 = () => {
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if (newLife2(neighbors2(i, j)) === true) {
        deadOrNo1[j][i] === 1
        drawFilledRect(i, j, 1, 1, 'black')
      } else if (newLife2(neighbors2(i, j)) === false){
        deadOrNo1[j][i] === 0
        drawFilledRect(i, j, 1, 1, 'white')
      } else {
        drawFilledRect(i, j, 1, 1, 'red')
        console.log('suprise suprise it didnt work')
      }
    }
  }
  //gameOfLife2();
}
const gameOfLife2 = () => {
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if (newLife1(neighbors1(i, j)) === true) {
        deadOrNo2[j][i] === 1
        drawFilledRect(i, j, 1, 1, 'black')
      } else if (newLife1(neighbors1(i, j)) === false){
        deadOrNo2[j][i] === 0
        drawFilledRect(i, j, 1, 1, 'white')
      } else {
        drawFilledRect(i, j, 1, 1, 'red')
      }
    }
  }
  gameOfLife1();
}

const gameOfLife = () => {
  gameOfLifeStart()
  gameOfLife1()
}

gameOfLife()
