const edgeSize = (width - height) / 2

const drawBoard = () => {
  for (let i = 0; i < 10; i++) {
    drawLine(edgeSize, edgeSize / 9 * i, width - edgeSize, edgeSize / 9 * i, 1)
  }
}
drawBoard()