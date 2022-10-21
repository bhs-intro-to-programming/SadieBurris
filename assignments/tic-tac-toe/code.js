// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

registerOnclick((x, y) => {
  drawText('X', x, y, 'black', Math.min(width, height) * 0.3);
});

const drawTicTacToeBoard = () => {
  //no I dont want to make a function out of it sorry
  drawLine(width / 3, 0, width / 3, height)
  drawLine(width * 2/3, 0, width * 2/3, height)
  drawLine(0, height / 3, width, height / 3)
  drawLine(0, height * 2/3, width, height * 2/3)
}
drawTicTacToeBoard()