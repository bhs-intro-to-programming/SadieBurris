let next = []
let current = []
let dualSwitcher = 1;

const gameOfLifeStart = () => {
  for (let j = 0; j < height; j++) {
    next.push([])
    current.push([])
    for (let i = 0; i < width; i++) {
      let color = Math.random() > 0.91 ? 'green' : 'black'
      drawFilledRect(i, j, 1, 1, color)
      if (color === 'green') {
        current[j].push(1);
        next[j].push(1);
      } else {
        current[j].push(0);
        next[j].push(0);
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
      const arr = current[checkPosJ][checkPosI];
      if (arr === 1) {
        neighborsNum++
      }
    }
  }
  return neighborsNum
}

const newLife = (nei, i, j) => {
  const arr = current[j][i];
  return arr === 1 && (nei === 3 || nei === 4) || arr === 0 && nei === 3
}

const gameOfLifeFrame = () => {
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      if (newLife(neighbors(i, j), i, j)) {
        next[j][i] = 1
        drawFilledRect(i, j, 1, 1, 'green')
      } else {
        next[j][i] = 0
        drawFilledRect(i, j, 1, 1, 'black')
      }
    }
  }
}

const gameOfLife = () => {
  gameOfLifeFrame();
  [current, next] = [next, current]
}

gameOfLifeStart()
animate(gameOfLife)