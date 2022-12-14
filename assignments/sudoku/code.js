const edgeSize = (width - height) / 2
const b = Array(9).fill().map(() => Array(9).fill().map(() => Array(1).fill('')))
let index = 1;
let filledSpaces = 0

const drawBoard = () => {
  for (let i = 0; i < 10; i++) {
    const thick = i % 3 === 0 ? 3 : 1
    drawLine(edgeSize, height / 9 * i, width - edgeSize, height / 9 * i, 'black', thick)
    drawLine(edgeSize + height / 9 * i, 0, edgeSize + height / 9 * i, height, 'black', thick)
    if (i !== 9) {
      drawText(i + 1, edgeSize / 10 * i, 20, 'black', 20)
    }
  }
  drawText('Solve', edgeSize + height + 65, 30, 'black', 25)
}

const updateBoard = (row, col, number, color) => {
  b[row][col][0] = number
  for (let l = 0; l < 9; l++) {
    b[row][l][number] = number
    b[l][col][number] = number
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      b[Math.floor(row / 3) * 3 + j][Math.floor(col / 3) * 3 + i][number] = number
    }
  }
  drawText(number, edgeSize + col * (height / 9) + height / 64, row * (height / 9) + height * 6 / 64, color, height / 9)
  filledSpaces++
}

registerOnclick((x, y) => {
  if (x < edgeSize && y < 20) {
    index = Math.floor(x / (edgeSize / 10)) + 1
  } else if (x > edgeSize && x < width - edgeSize) {
    const col = Math.floor((x - edgeSize) / (height / 9))
    const row = Math.floor(y / (height / 9))
    updateBoard(row, col, index, black)
  } else if (x > edgeSize + height) {

    let rounds = 0; // Added this to avoid infinite loop if solver can't solve the puzzle
    while (filledSpaces < 81 && rounds++ < 100) {
      solveBoard()
      console.log(filledSpaces); // Let's see how we're doing.
    }
  }
})

const foo = (row, col, arrayName, rOc, check) => {
  arrayName = ['filler', 10, 20, 30, 40, 50, 60, 70, 80, 90]
  for (rOc = 0; rOc < 9; rOc++) {
    let optionsFilled = 0
    let number = 0
    for (let currentCheck = 1; currentCheck < 10; currentCheck++) {
      if (b[row][col][currentCheck] === currentCheck) {
        arrayName[currentCheck]++
        optionsFilled++
      } else {
        number = currentCheck
      }
    }
    if (optionsFilled === 8 && b[row][col][0] === '') {
      updateBoard(row, col, number, 'grey')
    }
    for (let i = 1; i < 10; i++) {
      //if one of them was only used once in a row
      if (arrayName[i] % 10 === 1 && b[row][col][0] === '') {
        b[row][col][10 + check] = i
      } else b[row][col][10 + check] = 0
    }
  }
}

const solveBoard = () => {
  let numsUsedRow
  let numsUsedCol
  let row
  let col
  for (let row = 0; row < 9; row++) {
    foo(row, 0, numsUsedRow, col, 0)
  }
  for (let col = 0; col < 9; col++) {
    foo(0, col, numsUsedCol, row, 1)
  }
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (b[row][col][10] === b[row][col][11]) {
        updateBoard(row, col, b[row][col][10], 'grey')
      }
    }
  }
}

const setupPuzzle = (puzzle) => {
  puzzle.trim().split('\n').map(row => row.split(' ')).forEach((row, r) => {
    row.forEach((s, c) => {
      const n = Number(s);
      if (!isNaN(n)) {
        updateBoard(r, c, n, 'black');
      }
    });
  });
};

// Easy sudoku from https://sudoku.com/easy/
const easy = `
6 . . 3 . 5 8 7 .
. 8 . . 2 . . . .
. . 7 8 9 . . 5 6
. 6 . . 7 . 1 . .
4 7 3 1 6 2 . . 8
9 2 1 5 3 8 7 6 4
. 5 . . . 3 . . 7
2 3 . 6 . . 9 . .
7 1 . . 5 4 . . 3
`;

// Hard sudoku from https://www.mirror.co.uk/news/weird-news/worlds-hardest-sudoku-can-you-242294
// by way of https://norvig.com/sudoku.html
const hard = `
. . 5 3 . . . . .
8 . . . . . . 2 .
. 7 . . 1 . 5 . .
4 . . . . 5 3 . .
. 1 . . 7 . . . 6
. . 3 2 . . . 8 .
. 6 . 5 . . . . 9
. . 4 . . . . 3 .
. . . . . 9 7 . .
`;

drawBoard()
setupPuzzle(hard);
