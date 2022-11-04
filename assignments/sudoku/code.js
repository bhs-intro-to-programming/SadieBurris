const edgeSize = (width - height) / 2
const b = Array(9).fill().map(() => Array(9).fill(''))

const drawBoard1st = () => {
  for (let i = 0; i < 10; i++) {
    const thick = i % 3 === 0 ? 3 : 1
    drawLine(edgeSize, height / 9 * i, width - edgeSize, height / 9 * i, 'black', thick)
    drawLine(edgeSize + height / 9 * i, 0, edgeSize + height / 9 * i, height, 'black', thick)
  }
}

registerOnclick((x, y) => {
  b[Math.floor(y / (height / 9))][Math.floor((x - edgeSize) / (height / 9))] = 'X'
})

drawBoard1st()