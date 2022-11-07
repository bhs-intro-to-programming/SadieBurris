const getX = (ob) => ob.x
const point = (num1, num2) => {
  const ob = { x: num1, y: num2 }
  return ob
}
const emptyObject = () => {
  const ob = {}
  return ob
}
const distance = (point1, point2) => Math.sqrt(Math.abs(point1.x - point2.x) ** 2 + Math.abs(point1.y - point2.y) ** 2)
const midpoint = (point1, point2) => {
  const result = { x: (point1.x + point2.x) / 2, y: (point1.y + point2.y) / 2 }
  return result
}
const sumSalaries = (ar) => ar.reduce((pre, cur) => cur.salary + pre, 0)
const newHighScore = (high, ar) => {
  for (let i = 0; i < ar.length; i++) {
    let newScore = high
    if (ar[i].score > newScore) {
      newScore = ar[i].score
    }
  }
  return newScore
  //return to later plz its too long
}