const buffer = (width - height) / 2
const b = Array(4).fill().map(() => Array(4).fill().map(() => Array(2).fill('')))

const drawStart = () => {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      drawRect(buffer + col * (height / 4), row * (height / 4), height / 4, height / 4, 'black')
    }
  }
}

registerOnKeyDown((key) => {
  const num = Math.random() < 0.7 ? 2 : 4
  const keyToNum = key === 'ArrowRight' ? 0 : key === 'ArrowLeft' ? 1 : key === 'ArrowUp' ? 2 : key === 'ArrowDown' ? 3 : 'error'
  const placement = [[[Math.floor(Math.random() * 4)], [0]], [[Math.floor(Math.random() * 4)], [3]], [[3], [Math.floor(Math.random() * 4)]], [[0], [Math.floor(Math.random() * 4)]]]
  console.log(key, num, placement[keyToNum[1]])
  drawText(num, buffer + placement[keyToNum[1]] * (height / 4), 100, 'black', 20)
})

drawStart()