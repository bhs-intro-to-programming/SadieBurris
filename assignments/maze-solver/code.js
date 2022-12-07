const edgeSize = (width - height) / 2
const b = Array(9).fill().map(() => Array(9).fill().map(() => Array(2).fill(false)))
const directionsRows = []
const directionsCols = []
const defineDirections = (row, col) => [[row - 1, row, row + 1, row, 3, 4, 1, 2], [col, col + 1, col, col - 1]]
const newLoc = (row, col, i) => b[defineDirections(row, col)[0][i]][defineDirections(row, col)[1][i]]

const drawOrigonalBoard = () => {
  drawFilledRect(edgeSize, 0, height, height, 'black')
  drawFilledRect(edgeSize - height / 9, 0, height / 9, height / 9, 'red')
  drawFilledRect(width - edgeSize, height * 8 / 9, height / 9, height / 9, 'red')
}

const solveBranch = (row, col, curPath) => {
  curPath.push([row, col])
  console.log(curPath)
  if (row === 8 && col === 8) {
    for(let i = 0; i < curPath.length / 2; i++) {
      console.log('banana')
    }
  } else {
    for (let i = 0; i < 4; i++) {
      if (defineDirections(row, col)[0][i] !== -1 && defineDirections(row, col)[0][i] !== 9 && defineDirections(row, col)[1][i] !== -1 && defineDirections(row, col)[1][i] !== 9) {
        if (newLoc(row, col, i)[0] === true && newLoc(row, col, i)[1] === false) {
          //fix later
          b[row][col][1] = true
          solveBranch(defineDirections(row, col)[0][i], defineDirections(row, col)[1][i], curPath)
        }
      }
    }
  }
}

drawOrigonalBoard()

registerOnclick((x, y) => {
  if (x > edgeSize && x < width - edgeSize) {
    const col = Math.floor((x - edgeSize) / (height / 9))
    const row = Math.floor(y / (height / 9))
    b[row][col][0] = true
    drawFilledRect(edgeSize + col * height / 9, row * height / 9, height / 9, height / 9, 'gray')
  }
})