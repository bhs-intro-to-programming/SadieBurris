//Snake Game

const numOfSquares = 15
let head = [0, 0]
const b = Array(numOfSquares).fill().map(() => Array(numOfSquares).fill().map(() => Array(2).fill(0)))
const startingX = (width - height) / 2
let snakeLength = 1
const newSquare = (row, col) => [row, col + 1, row, col - 1, row - 1, col, row + 1, col]
let firstTime = true
let appleRow
let appleCol

const appleEaten = () => {
  appleRow = Math.floor(Math.random() * numOfSquares)
  appleCol = Math.floor(Math.random() * numOfSquares)
  b[appleRow][appleCol][1] = 1
}

const drawBoard = () => {
  if (firstTime === true) {
    b[head[0]][head[1]][0] = snakeLength
    appleEaten()
  }
  for (let row = 0; row < numOfSquares; row++) {
    for (let col = 0; col < numOfSquares; col++) {
      const color = b[row][col][1] === 1 ? 'red' : b[row][col][0] === 0 ? 'black' : 'green'
      drawFilledRect(startingX + col * (height / numOfSquares), row * (height / numOfSquares), height / numOfSquares, height / numOfSquares, color)
    }
  }
  firstTime = false
}

drawBoard()

registerOnKeyDown((key) => {
  for (let row = 0; row < numOfSquares; row++) {
    for (let col = 0; col < numOfSquares; col++) {
      if (b[row][col][0] > 0) {
        b[row][col][0] -= 1
      }
    }
  }
  const keyToNum = key === 'ArrowRight' ? 0 : key === 'ArrowLeft' ? 2 : key === 'ArrowUp' ? 4 : key === 'ArrowDown' ? 6 : 'error'
  head = [newSquare(head[0], head[1])[keyToNum], newSquare(head[0], head[1])[keyToNum + 1]]
  if(b[head[0]][head[1]][0] !== 0) {
    console.log('you can keep playing... but you died soooo... probably dont')
  }
  b[head[0]][head[1]][0] = snakeLength
  if((head[0] === appleRow) && (head[1] === appleCol)) {
    b[appleRow][appleCol][1] = 0
    for(let row = 0; row < numOfSquares; row++) {
      for (let col = 0; col < numOfSquares; col++) {
        if (b[row][col][0] > 0) {
          b[row][col][0]++
        }
      }
    }
    snakeLength++
    appleEaten()
  }
  clear()
  drawBoard()
})

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
