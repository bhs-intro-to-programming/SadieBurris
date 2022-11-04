const edgeSize = (width - height) / 2

const drawBoard = () => {
  for (let i = 0; i < 10; i++) {
    let thick = (i - 1) % 3 === 0 ? 20 : 1
    drawLine(edgeSize, height / 9 * i, width - edgeSize, height / 9 * i, thick)
  }
}
drawBoard()