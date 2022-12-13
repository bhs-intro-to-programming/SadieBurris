let dualSwitcher = 'X'
const playerLocations = [
  ['N', 'N', 'N'],
  ['N', 'N', 'N'],
  ['N', 'N', 'N']]

const ss = Math.min(width, height) * 0.3
const swbx = (width / 3 - ss) / 2
const swby = (height / 3 - ss) / 2

registerOnclick((x, y) => {
  let xLocation = x > width * 2 / 3 ? width * 2 / 3 + swbx : x > width * 1 / 3 ? width / 3 + swbx : swbx
  let yLocation = y > height * 2 / 3 ? height * 2 / 3 + swby + ss : y > height * 1 / 3 ? height / 3 + swby + ss : swby + ss
  if (playerLocations[Math.floor(y / (height / 3))][Math.floor(x / (width / 3))] === 'N') {
    drawText(dualSwitcher, xLocation, yLocation, 'black', ss);
    playerLocations[Math.floor(y / (height / 3))][Math.floor(x / (width / 3))] = dualSwitcher
    for (let i = 0; i < 3; i++) {
      if ((playerLocations[i][0] && playerLocations[i][1] && playerLocations[i][2]) === dualSwitcher) {
        console.log('Winning doesnt work yet')
      } else if ((playerLocations[0][i] && playerLocations[1][i] && playerLocations[2][i]) === dualSwitcher) {
        console.log('Winning doesnt work yet')
      } else if ((playerLocations[0][0] && playerLocations[1][1] && playerLocations[2][2]) === dualSwitcher) {
        console.log('Winning doesnt work yet')
      } else if ((playerLocations[0][2] && playerLocations[1][1] && playerLocations[2][0]) === dualSwitcher) {
        console.log('Winning doesnt work yet')
      } else {
        console.log('testing testing')
      }
    }
    dualSwitcher = dualSwitcher === 'X' ? 'O' : 'X'
  } else {
    console.log('already claimed!')
  }
});


const drawTicTacToeBoard = () => {
  //no I dont want to make a function out of it sorry
  drawLine(width / 3, 0, width / 3, height)
  drawLine(width * 2 / 3, 0, width * 2 / 3, height)
  drawLine(0, height / 3, width, height / 3)
  drawLine(0, height * 2 / 3, width, height * 2 / 3)
}

drawTicTacToeBoard()