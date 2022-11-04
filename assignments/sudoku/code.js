const edgeSize = (width - height) / 2

const drawBoard = () => {
  for (let i = 0; i < 10; i++) {
    drawLine(edgeSize, height / 9 * i, width - edgeSize, height / 9 * i, 1)
  }
}
drawBoard()