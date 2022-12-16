/*const buffer = (width - height) / 2
const b = Array(4).fill().map(() => Array(4).fill().map(() => Array(2).fill()))

const drawStart = () => {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      drawRect(buffer + col * (height / 4), row * (height / 4), height / 4, height / 4, 'black')
    }
  }
}

const locPlaced = (num, row, col) => {
  //ill make it short later
  let result = [num, 0, 0, 0, 0]
  for (let i = 1; i < 4; i++) {
    if (b[row][col + i][0] !== undefined) {
      result[1]++
    }
    if (b[row][col - i][0] !== undefined) {
      result[2]++
    }
    if (b[row - 1][col][0] !== undefined) {
      result[3]++
    }
    if (b[row + 1][col][0] !== undefined) {
      result[4]++
    }
  }
  return result
}

registerOnKeyDown((key) => {
  const num = Math.random() < 0.7 ? 2 : 4
  const keyToNum = key === 'ArrowRight' ? 0 : key === 'ArrowLeft' ? 1 : key === 'ArrowUp' ? 2 : key === 'ArrowDown' ? 3 : 'error'
  const placement = [[[Math.floor(Math.random() * 4)], [0]], [[Math.floor(Math.random() * 4)], [3]], [[3], [Math.floor(Math.random() * 4)]], [[0], [Math.floor(Math.random() * 4)]]]
  console.log(locPlaced(num, placement[keyToNum][0], placement[keyToNum][1]))
  drawText(num, buffer + placement[keyToNum][1] * (height / 4) + 20, placement[keyToNum][0] * (height / 4) + 50, 'black', 50)
  b[placement[keyToNum][0]][placement[keyToNum][1]] = locPlaced(num, placement[keyToNum][0], placement[keyToNum][1])
})

drawStart()
*/

//Snake Game

const numOfSquares = 10
let head = [0][0]
const b = Array(numOfSquares).fill().map(() => Array(numOfSquares).fill(0))
const startingX = (width - height) / 2
let snakeLength = 1
const newSquare = (row, col) => [row, col + 1, row, col - 1, row - 1, col, row + 1, col]
let firstTime = true

const drawBoard = (numOfSquares) => {
  if (firstTime === true) b[head] = 1
  for (let row = 0; row < numOfSquares; row++) {
    for (let col = 0; col < numOfSquares; col++) {
      const color = b[row][col] === 0 ? 'black' : 'green'
      drawFilledRect(startingX + col * (height / numOfSquares), row * (height / numOfSquares), height / numOfSquares, height / numOfSquares, color)
    }
  }
  firstTime = false
}

drawBoard(10)

registerOnKeyDown((key) => {
  const keyToNum = key === 'ArrowRight' ? 0 : key === 'ArrowLeft' ? 2 : key === 'ArrowUp' ? 4 : key === 'ArrowDown' ? 6 : 'error'
  console.log(key, keyToNum, newSquare(0,0)[0])
  b[newSquare(keyToNum)][newSquare(keyToNum + 1)] = snakeLength
})