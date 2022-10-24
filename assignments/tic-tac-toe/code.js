// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
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
    dualSwitcher = dualSwitcher === 'X' ? 'O' : 'X'
  } else {
    console.log('already claimed!')
  }
  /*if ((playerLocations[0][0] && playerLocations[1][1] && playerLocations[2][2]) === 'X') {
    console.log('You Won!')
  }*/
  for (let i = 0; i < 3; i++) {
    if ((playerLocations[i][0] && playerLocations[i][1] && playerLocations[i][2]) === ('X' || 'O')) {
      console.log('You Won!')
    } else if ((playerLocations[0][i] && playerLocations[1][i] && playerLocations[2][i]) === ('X' || 'O')) {
      console.log('You Won!')
    }
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