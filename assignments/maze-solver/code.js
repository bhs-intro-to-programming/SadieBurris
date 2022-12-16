//I forgot arrays are mutible like the one time I dont want them to be
/*const edgeSize = (width - height) / 2
const b = Array(11).fill().map(() => Array(11).fill().map(() => Array(2).fill(false)))
const directionsRows = []
const directionsCols = []
const defineDirections = (row, col) => [[row - 1, row, row + 1, row, 3, 4, 1, 2], [col, col + 1, col, col - 1]]
const newLoc = (row, col, row) => b[defineDirections(row, col)[0][row]][defineDirections(row, col)[1][row]]

const drawOrigonalBoard = () => {
  drawFilledRect(edgeSize, 0, height, height, 'black')
  drawFilledRect(edgeSize - height / 9, 0, height / 9, height / 9, 'red')
  drawFilledRect(width - edgeSize, height * 8 / 9, height / 9, height / 9, 'red')
}
//drawsFailedAttempts as well bc arrays are mutible the one time I wish they werent
const solveBranch = (row, col, oldRow, oldCol, curPath) => {
  b[oldRow][oldCol][1] = true
  curPath.push(row, col)
  console.log(curPath)
  if (row === 8 && col === 8) {
    curPath.push(8,9)
    console.log(curPath)
    for (let row = 0; row < curPath.length / 2; row++) {
      drawLine(curPath[row * 2 + 1] * (height / 9) + edgeSize + height / 18, curPath[row * 2] * (height / 9) + height / 18, curPath[row * 2 + 3] * (height / 9) + edgeSize + height / 18, curPath[row * 2 + 2] * (height / 9) + height / 18, 'red', 4)
    }
  } else {
    for (let row = 0; row < 4; row++) {
      if (defineDirections(row, col)[0][row] !== -1 && defineDirections(row, col)[0][row] !== 9 && defineDirections(row, col)[1][row] !== -1 && defineDirections(row, col)[1][row] !== 9) {
        if (newLoc(row, col, row)[0] === true && newLoc(row, col, row)[1] === false) {
          solveBranch(defineDirections(row, col)[0][row], defineDirections(row, col)[1][row], row, col, curPath)
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
*/


//snake game

const startingX = (width - height) / 2

const drawBoard = (numOfSquares) => {
  const b = Array(numOfSquares).fill().map(() => Array(numOfSquares).fill(0))
  b[0][0] = 1
  for (let row = 0; row < numOfSquares; row++) {
    for (let col = 0; col < numOfSquares; col++) {
      let color = b[row][col] === 0 ? 'black' : 'green'
      drawFilledRect(startingX + col * (height / numOfSquares), row * (height / numOfSquares), height / numOfSquares, height / numOfSquares, color)
    }
  }
}

drawBoard(20)