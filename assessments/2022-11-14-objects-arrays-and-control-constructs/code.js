// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => rect.width * rect.height

const higherPaid = (e1, e2) => e1.salary > e2.salary ? e1 : e2

const isSamePoint = (p1, p2) => (p1.x === p2.x) && (p1.y === p2.y)

const totalWithTip = (sT, percentage) => ({ subtotal: sT.subtotal, tip: percentage * sT.subtotal, total: sT.subtotal * (percentage + 1) })

const isWinner = (player) => player.score > 100

const updateWins = (players) => {
  for (let i = 0; i < players.length; i++) {
    if (isWinner(players[i])) players[i].wins++;
  }
};

const bigWinners = (players) => players.filter((o) => o.wins > 10)

const fillTimesTable = (table) => {
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table.length; j++) {
      table[j - 1][i - 1] = j * i
    }
  }
};

const sums = (n) => {
  const ar = []
  for (let i = 0; i < n + 1; i++) {
    ar.push(i % 2 === 1 ? (i - 1) * (i / 2) + i : i * ((i - 1) / 2) + i)
  }
  return ar
}

const rule110 = (cells) => cells.map(num => ((cells[num - 1] === 1) && (cells[num] === cells[num + 1])) || ((cells[num - 1] && cells[num] && cells[num + 1]) === 0) ? 0 : 1)
//Idk im tired and bored and want to do something else