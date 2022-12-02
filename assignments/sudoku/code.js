const edgeSize = (width - height) / 2
const b = Array(9).fill().map(() => Array(9).fill().map(() => Array(5).fill(false)))
const path = []
const directionsRows = []
const directionsCols = []

const drawOrigonalBoard = () => {
  drawFilledRect(edgeSize, 0, height, height, 'black')
  drawFilledRect(edgeSize - height / 9, 0, height / 9, height / 9, 'red')
  drawFilledRect(width - edgeSize, height * 8 / 9, height / 9, height / 9, 'red')
}

const defineDirections = (row, col) => {
  const directionsRows = [row - 1, row, row + 1, row, 3, 4, 1, 2]
  const directionsCols = [col, col + 1, col, col - 1]
}

const solveBranch = (row, col, curPath) => {
  curPath.push([row, col])
  defineDirections(row, col)
  if (row === 8 && col === 8) {
    return curPath
  } else {
    for (let i = 0; i < 4; i++) {
      if (b[row][col][i + 1] === true) {
        return curPath
        //solveBranch(directionsRows[i], directionsCols[i], curPath)
      }
    }
  }
}

drawOrigonalBoard()

registerOnclick((x, y) => {
  if (x > edgeSize && x < width - edgeSize) {
    const col = Math.floor((x - edgeSize) / (height / 9))
    const row = Math.floor(y / (height / 9))
    defineDirections(row, col)
    b[row][col][0] = true
    drawFilledRect(edgeSize + col * height / 9, row * height / 9, height / 9, height / 9, 'gray')
    for (let i = 0; i < 4; i++) {
      if (directionsRows[i] !== -1 || directionsCols[i] !== -1) {
        b[directionsRows[i]]//[directionsCols[i]][directionsRows[i + 4]] = true
      }
    }
  }
})


/*
const b = Array(9).fill().map(() => Array(9).fill().map(() => Array(1).fill('')))
let index = 1;
let filledSpaces = 0

const drawBoard = () => {
  for (let i = 0; i < 10; i++) {
    const thick = i % 3 === 0 ? 3 : 1
    drawLine(edgeSize, height / 9 * i, width - edgeSize, height / 9 * i, 'black', thick)
    drawLine(edgeSize + height / 9 * i, 0, edgeSize + height / 9 * i, height, 'black', thick)
    if (i !== 9) {
      drawText(i + 1, edgeSize / 10 * i, 20, 'black', 20)
    }
  }
  drawText('Solve', edgeSize + height + 65, 30, 'black', 25)
}

const updateBoard = (row, col) => {
  b[row][col][0] = index
  for (let l = 0; l < 9; l++) {
    b[row][l][index] = index
    b[l][col][index] = index
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      b[Math.floor(row / 3) * 3 + j][Math.floor(col / 3) * 3 + i][index] = index
    }
  }
  filledSpaces++
}

registerOnclick((x, y) => {
  if (x < edgeSize && y < 20) {
    index = Math.floor(x / (edgeSize / 10)) + 1
  } else if (x > edgeSize && x < width - edgeSize) {
    const col = Math.floor((x - edgeSize) / (height / 9))
    const row = Math.floor(y / (height / 9))
    drawText(index, edgeSize + col * (height / 9) + height / 64, row * (height / 9) + height * 6 / 64, 'black', height / 9)
    updateBoard(row, col)
  } else if (x > edgeSize + height) {
    while (filledSpaces < 81) {
      solveBoard()
    }
  }
})

const solveBoard = () => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let optionsFilled = 0
      for (let currentCheck = 1; currentCheck < 10; currentCheck++) {
        if (b[row][col][currentCheck] === currentCheck) {
          optionsFilled++
        } else index = currentCheck
      }
      if (optionsFilled === 8 && b[row][col][0] === '') {
        drawText(index, edgeSize + col * (height / 9) + height / 64, row * (height / 9) + height * 6 / 64, 'gray', height / 9)
        updateBoard(row, col)
      }
    }
  }
}

drawBoard()
*/