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
  [BR, BKN, BB, BQ, BK, BB, BKN, BR],
  [BP, BP, BP, BP, BP, BP, BP, BP],
  [N, N, N, N, N, N, N, N],
  [N, N, N, N, N, N, N, N],
  [N, N, N, N, N, N, N, N],
  [N, N, N, N, N, N, N, N],
  [WP, WP, WP, WP, WP, WP, WP, WP],
  [WR, WKN, WB, WQ, WK, WB, WKN, WR],
]

const drawChessBoard = () => {
  const checkWidth = Math.min(width, height);
  const offset = (width - checkWidth) / 2
  const sqrWidth = checkWidth / 8;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let color = (i % 2 === 1 && j % 2 === 0) || (i % 2 === 0 && j % 2 === 1) ? 'gray' : 'white';
      drawFilledRect(offset + j * sqrWidth, i * sqrWidth, sqrWidth, sqrWidth, color);
    }
  }
}

drawChessBoard()

const drawPieces = () => {
  const squareSize = Math.min(width, height);
  /*
  const pieceSize = squareSize - 10;
  const pieceOffset = (width - Math.min(width, height)) / 2 + pieceSize / 2 + 5;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; i++) {
      drawText(locations[j][i], pieceOffset + i * squareSize, 5 + pieceSize + j * squareSize, 'black', pieceSize);
    }
  }
  */
}

drawPieces()

