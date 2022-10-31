const BK = '♔';
const BQ = '♕';
const BR = '♖';
const BB = '♗';
const BKN = '♘';
const BP = '♙';
const WK = '♚';
const WQ = '♛';
const WR = '♜';
const WB = '♝';
const WKN = '♞';
const WP = '♟';
const N = '';


const locations = [
  [BR, N, N, BQ, BK, BB, BKN, BR],
  [BP, BP, BP, BP, BP, BP, BP, BP],
  [N, N, N, N, N, N, N, N],
  [N, N, N, N, N, N, N, N],
  [BKN, N, N, N, BB, N, N, N],
  [N, N, N, N, N, N, N, N],
  [WP, WP, WP, WP, WP, WP, WP, WP],
  [WR, WKN, WB, WQ, WK, WB, WKN, WR],
]

const checkWidth = Math.min(width, height);
const offset = (width - checkWidth) / 2
const sqrWidth = checkWidth / 8;

const drawChessBoard = () => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let color = (i % 2 === 1 && j % 2 === 0) || (i % 2 === 0 && j % 2 === 1) ? 'black' : 'gray';
      drawFilledRect(offset + j * sqrWidth, i * sqrWidth, sqrWidth, sqrWidth, color);
    }
  }
  drawFilledRect(0,0, offset, height, 'white')
  drawFilledRect(width - offset, 0, offset, height, 'white')
}

drawChessBoard()

const drawPieces = () => {
  const squareSize = Math.min(width, height) / 8;
  const pieceSize = squareSize - 10;
  const pieceOffset = (width - Math.min(width, height)) / 2 + pieceSize / 2;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      drawText(locations[j][i], pieceOffset + i * squareSize, pieceSize + j * squareSize, 'white', pieceSize);
    }
  }
}

drawPieces()
//Fix dual rules BUT DO IT LATER procrastination :)
const blackPawnRules = (x, y) => {
  if (locations[y + 1][x - 1] === N && locations[y + 1][x + 1] === N) {
    drawFilledRect(offset + x * sqrWidth + (sqrWidth - 4) / 2, (y - 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  }
  if (locations[y + 1][x - 1] !== N) {
    drawFilledRect(offset + (x - 1) * sqrWidth + (sqrWidth - 4) / 2, (y - 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  }
  if (locations[y + 1][x + 1] !== N) {
    drawFilledRect(offset + (x + 1) * sqrWidth + (sqrWidth - 4) / 2, (y - 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  }
}

const whitePawnRules = (x, y) => {
  if (locations[y - 1][x - 1] === N && locations[y - 1][x + 1] === N) {
    drawFilledRect(offset + x * sqrWidth + (sqrWidth - 4) / 2, (y - 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  }
  if (locations[y - 1][x - 1] !== N) {
    drawFilledRect(offset + (x - 1) * sqrWidth + (sqrWidth - 4) / 2, (y - 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  }
  if (locations[y - 1][x + 1] !== N) {
    drawFilledRect(offset + (x + 1) * sqrWidth + (sqrWidth - 4) / 2, (y - 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  }
}

//yeah no I cant code rn sorry my future self

const rookRules = (x, y) => {
  for (let i = y; i < 8; i++) {
    if (locations[i][x] === N /*|| locations[i][x] === (BB || WB)*/) {
      drawFilledRect(offset + x * sqrWidth + (sqrWidth - 4) / 2, (i + 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
    } else {
      i = 8
    }
  }
  for (let i = y; i > 0; i--) {
    if (locations[i][x] === N || locations[i][x] === (BB || WB)) {
      drawFilledRect(offset + x * sqrWidth + (sqrWidth - 4) / 2, (i - 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
    } else {
      i = 0
    }
  }
  for (let i = x; i < 8; i++) {
    if (locations[y][i] === N || locations[y][i] === (BB || WB)) {
      drawFilledRect(offset + (i + 1) * sqrWidth + (sqrWidth - 4) / 2, y * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
    } else {
      i = 8
    }
  }
  for (let i = x; i > 0; i--) {
    if (locations[y][i] === N || locations[y][i] === BB) {
      drawFilledRect(offset + (i - 1) * sqrWidth + (sqrWidth - 4) / 2, y * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
    } else {
      i = 0
    }
  }
  drawFilledRect(0,0, offset, height, 'white')
  drawFilledRect(width - offset, 0, offset, height, 'white')
  //yeah the code is long deal with it
}

const knightRules = (x, y) => {
  //no Im not making a function or loop or anything in that general vicinity
  drawFilledRect(offset + (x - 1) * sqrWidth + (sqrWidth - 4) / 2, (y - 2) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  drawFilledRect(offset + (x + 1) * sqrWidth + (sqrWidth - 4) / 2, (y - 2) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  drawFilledRect(offset + (x + 2) * sqrWidth + (sqrWidth - 4) / 2, (y - 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  drawFilledRect(offset + (x + 2) * sqrWidth + (sqrWidth - 4) / 2, (y + 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  drawFilledRect(offset + (x + 1) * sqrWidth + (sqrWidth - 4) / 2, (y + 2) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  drawFilledRect(offset + (x - 1) * sqrWidth + (sqrWidth - 4) / 2, (y + 2) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  drawFilledRect(offset + (x - 2) * sqrWidth + (sqrWidth - 4) / 2, (y + 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  drawFilledRect(offset + (x - 2) * sqrWidth + (sqrWidth - 4) / 2, (y - 1) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
  drawFilledRect(0,0, offset, height, 'white')
  drawFilledRect(width - offset, 0, offset, height, 'white')
}

const bishopRules = (x, y) => {
  for (let i = 1; (i + x || i + y) < 8; i++) {
    if (locations[i + y][i + x] === N) {
      drawFilledRect(offset + (x + (i - 1)) * sqrWidth + (sqrWidth - 4) / 2, (y + (i - 1)) * sqrWidth + (sqrWidth - 4) / 2, 4, 4, 'red')
    } else {
      i = 8
    }
  }
  //in progress
}