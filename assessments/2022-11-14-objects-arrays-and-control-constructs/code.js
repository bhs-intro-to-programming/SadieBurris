// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => rect.width * rect.height

const higherPaid = (e1, e2) => e1.salary > e2.salary ? e1 : e2

const isSamePoint = (p1, p2) => (p1.x === p2.x) && (p1.y === p2.y)

const totalWithTip = (bill, tipPercentage) => ({ subtotal: bill, tip: tipPercentage * bill, total: bill * (tipPercentage + 1) })

const isWinner = (player) => player.score > 100

const updateWins = (players) => {
  for (let i = 0; i < players.length; i++) {
    isWinner(players[i]) ? players[i].wins++ : players[i].wins
  }
};

const bigWinners = (players) => players.filter((o) => o.wins > 10)

const fillTimesTable = (table) => {
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table.length; j++) {
      table[j - 1][i - 1] = j * i
    }
  }
  return table
};

const sums = (n) => {
  const ar = []
  for (let i = 0; i < n; i++) {
    ar.push(i % 2 === 1 ? (i - 1) * (i / 2) + i : i * ((i - 1) / 2))
  }
  return ar
}

const rule110 = (cells) => {
};
