const edgeSize = (width - height) / 2
const b = Array(9).fill().map(() => Array(9).fill().map(() => Array(1).fill('')))
let selected = 0;

const drawBoard1st = () => {
  for (let i = 0; i < 10; i++) {
    const thick = i % 3 === 0 ? 3 : 1
    drawLine(edgeSize, height / 9 * i, width - edgeSize, height / 9 * i, 'black', thick)
    drawLine(edgeSize + height / 9 * i, 0, edgeSize + height / 9 * i, height, 'black', thick)
    drawText(i, edgeSize / 10 * i, 20, 'black', 20)
  }
}

registerOnclick((x, y) => {
  if (x < edgeSize && y < 20) {
    selected = Math.floor(x / (edgeSize / 10))
  } else if (x > edgeSize && x < width - edgeSize) {
    const col = Math.floor((x - edgeSize) / (height / 9))
    const row = Math.floor(y / (height / 9))
    b[row][col][0] = selected
    drawText(selected, edgeSize + col * (height / 9) + height / 64, row * (height / 9) + height * 7 / 64, 'black', height / 9)
    for (let i = 0; i < 9; i++) {
      b[row][i].push(selected)
      b[i][col].push(selected)
    }
  }
})

drawBoard1st()

const lineNine = () => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (b[j][i].length === 10 && b[j][i][0] === '') {
        console.log('yeah')
      }
    }
  }
}
