const WK = '♔';
const WQ = '♕';
const WR = '♖';
const WB = '♗';
const WKN = '♘';
const WP = '♙';
const BK = '♚';
const BQ = '♛';
const BR = '♜';
const BB = '♝';
const BKN = '♞';
const BP = '♟';
const N = '';


const locations = [
  [WR, WKN, WB, WK, WQ, WB, WKN, WR],
  [WP, WP, WP, WP, WP, WP, WP, WP],
  [N, N, N, N, N, N, N, N],
  [N, N, N, N, N, N, N, N],
  [N, N, N, N, N, N, N, N],
  [N, N, N, N, N, N, N, N],
  [BR, BKN, BB, BQ, BK, BB, BKN, BR],
  [BP, BP, BP, BP, BP, BP, BP, BP],
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

const blackPawnRules = (x, y) => {
  if ((locations[y + 1][x - 1] && locations[y + 1][x + 1]) === N) {
    drawFilledRect(offset + x * sqrWidth, (y + 1) * sqrWidth, sqrWidth, sqrWidth, 'red')
  } else if (locations[y + 1][x - 1] === N) {
    drawFilledRect(offset + (x - 1) * sqrWidth, (y + 1) * sqrWidth, sqrWidth, sqrWidth, 'red')
  } else if (locations[y + 1][x + 1] === N) {
    drawFilledRect(offset + (x + 1) * sqrWidth, (y + 1) * sqrWidth, sqrWidth, sqrWidth, 'red')
  }
}