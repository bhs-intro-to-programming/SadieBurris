const buffer = (width - height) / 2
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
  b[placement[keyToNum][0]][placement[keyToNum][1]] = [num, 0, 0]
})

drawStart()