const getX = (ob) => ob.x
const point = (num1, num2) => {
  const ob = {x : num1, y : num2}
  return ob
}
const emptyObject = () => {
  const ob = {}
  return ob
}
const distance = (point1, point2) => Math.sqrt(Math.abs(point1.x - point2.x) ** 2 + Math.abs(point1.y - point2.y) ** 2)