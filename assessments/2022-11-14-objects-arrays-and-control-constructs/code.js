// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => rect.width * rect.height

const higherPaid = (e1, e2) => e1.salary > e2.salary ? e1 : e2

const isSamePoint = (p1, p2) => (p1.x === p2.x) && (p1.y === p2.y)

const totalWithTip = (bill, tipPercentage) => ({subtotal: bill, tip: tipPercentage * bill, total: bill * (tipPercentage + 1)})

const isWinner = (player) => player.score > 100

const updateWins = (players) => {
  //sry I forgot the one that isnt map or reduce

};

const bigWinners = (players) => {}

const fillTimesTable = (table) => {
  for(let i = 1; i < table.lenght; i++) {
    for(let j = 1; j < table.lenght; j++) {
      table[j - 1][i - 1] = j * i
    }
  }
};

const sums = (n) => {
};

const rule110 = (cells) => {
};
