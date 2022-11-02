const deadOrNo1 = []
const deadOrNo2 = []
let dualSwitcher = 1;

const gameOfLifeStart = () => {
  for (let j = 0; j < height; j++) {
    deadOrNo1.push([])
    deadOrNo2.push([])
    for (let i = 0; i < width; i++) {
      let color = Math.random() > 0.91 ? 'green' : 'black'
      drawFilledRect(i, j, 1, 1, color)
      if (color === 'green') {
        deadOrNo2[j].push(1);
        deadOrNo1[j].push(1);
      } else {
        deadOrNo2[j].push(0);
        deadOrNo1[j].push(0);
      }
    }
  }
}

const neighbors = (i, j) => {
  let neighborsNum = 0
  for (let countX = -1; countX < 2; countX++) {
    for (let countY = -1; countY < 2; countY++) {
      let checkPosJ = j + countY === -1 ? height - 1 : j + countY === height ? 0 : j + countY
      let checkPosI = i + countX === -1 ? width - 1 : i + countX === width ? 0 : i + countX
      const arr = dualSwitcher === 1 ? deadOrNo2[checkPosJ][checkPosI] : deadOrNo1[checkPosJ][checkPosI]
      if (arr === 1) {
        neighborsNum++
      }
    }
  }
  return neighborsNum
}

const newLife = (nei, i, j) => {
  const arr = dualSwitcher === 1 ? deadOrNo2[j][i] : deadOrNo1[j][i]
  return arr === 1 && (nei === 3 || nei === 4) || arr === 0 && nei === 3
  /*
  if (arr === 1) {
    if (nei === 3 || nei === 4) {
      return true
    } else {
      return false
    }
  } else if (arr === 0) {
    if (nei === 3) {
      return true
    } else {
      return false
    }
  }
  */
}

const gameOfLifeFrame = () => {
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      const arr = dualSwitcher === 1 ? deadOrNo1 : deadOrNo2
      if (newLife(neighbors(i, j), i, j) === true) {
        arr[j][i] = 1
        drawFilledRect(i, j, 1, 1, 'green')
      } else if (newLife(neighbors(i, j), i, j) === false) {
        arr[j][i] = 0
        drawFilledRect(i, j, 1, 1, 'black')
      }
    }
  }
}

const gameOfLife = () => {
  gameOfLifeFrame()
  dualSwitcher = dualSwitcher === 1 ? 2 : 1
}

gameOfLifeStart()
animate(gameOfLife)