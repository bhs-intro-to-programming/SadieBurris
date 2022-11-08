const getX = (ob) => ob.x
const point = (num1, num2) => ({ x: num1, y: num2 })
const emptyObject = () => ({})
const distance = (point1, point2) => Math.sqrt(Math.abs(point1.x - point2.x) ** 2 + Math.abs(point1.y - point2.y) ** 2)
const midpoint = (point1, point2) => ({ x: (point1.x + point2.x) / 2, y: (point1.y + point2.y) / 2 })
const sumSalaries = (ar) => ar.reduce((pre, cur) => cur.salary + pre, 0)
const newHighScore = (high, ar) => {
  let newScore = high
  for (let i = 0; i < ar.length; i++) {
    if (ar[i].score > newScore) {
      newScore = ar[i].score
    }
  }
  return newScore
  //return to later plz its too long
}
const summarizeBooks = (ar) => {
  const ob = { titles: [], pages: 0 }
  for (let i = 0; i < ar.length; i++) {
    ob.titles.push(ar[i].title)
    ob.pages += ar[i].pages
  }
  return ob
}