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
  const num = Math.random() < 0.6 ? 2 : 4
  console.log(num, key)
})

drawStart()