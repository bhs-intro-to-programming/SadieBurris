const edgeSize = (width - height) / 2

const drawBoard = () => {
  for (let i = 0; i < 10; i++) {
    const thick = i % 3 === 0 ? 10 : 1
    drawLine(edgeSize, height / 9 * i, width - edgeSize, height / 9 * i, thick)
    drawLine(edgeSize + height / 9 * i, 0, edgeSize + height / 9 * i, height, thick)
  }
}
drawBoard()