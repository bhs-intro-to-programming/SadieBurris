
const deadOrNo1 = []
const deadOrNo2 = []
const gameOfLifeStart = () => {
  for (let j = 0; j < height; j++) {
    deadOrNo1.push([])
    deadOrNo2.push([])
    for (let i = 0; i < width; i++) {
      let color = Math.random() > 0.999 ? 'black' : 'white'
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

const newLife1 = (nei, i, j) => {
  if (deadOrNo2[j][i] === 1) {
    if (nei === 3 || nei === 4) {
      return true
    } else {
      return false
    }
  } else if (deadOrNo2[j][i] === 0) {
    if (nei === 3 || nei === 6) {
      return true
    } else {
      return false
    }
  } else {
    return 'something is wrong'
  }
}
const newLife2 = (nei, i, j) => {
  if (deadOrNo1[j][i] === 1) {
    if (nei === 1 || nei === 2) {
      return true
    } else {
      return false
    }
  } else if (deadOrNo1[j][i] === 0) {
    if (nei === 1) {
      return true
    } else {
      return false
    }
  } else {
    return 'something is wrong'
  }
}

const gameOfLife2 = () => {
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if (newLife2(neighbors2(i, j), i, j) === true) {
        deadOrNo2[j][i] = 1
        drawFilledRect(i, j, 1, 1, 'black')
      } else if (newLife2(neighbors2(i, j), i, j) === false) {
        deadOrNo2[j][i] = 0
        drawFilledRect(i, j, 1, 1, 'white')
      } else {
        drawFilledRect(i, j, 1, 1, 'red')
      }
    }
  }
  //gameOfLife1();
}
const gameOfLife1 = () => {
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if (newLife1(neighbors1(i, j), i, j) === true) {
        deadOrNo1[j][i] = 1
        drawFilledRect(i, j, 1, 1, 'black')
      } else if (newLife1(neighbors1(i, j), i, j) === false) {
        deadOrNo1[j][i] = 0
        drawFilledRect(i, j, 1, 1, 'white')
      } else {
        drawFilledRect(i, j, 1, 1, 'red')
      }
    }
  }
  //gameOfLife2();
}

let dualSwitcher = 1;
const gameOfLife = () => {
  if (dualSwitcher === 1) {
    gameOfLife1()
    dualSwitcher = 2
  } else {
    gameOfLife2()
    dualSwitcher = 1
  }
}

gameOfLifeStart()
animate(gameOfLife)
