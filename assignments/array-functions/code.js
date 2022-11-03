const countTens = (ar) => (ar.filter(num => num === 10)).length

const sum = (ar) => ar.reduce((pre, cur) => pre + cur, 0)

const evens = (ar) => ar.filter(num => num % 2 === 0)

const anyOverOneHundred = (ar) => ar.filter(num => num > 100) ? true : false
/*{
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > 100) {
      return true
    }
  }
  return false
}
*/

const pyramid = (num) => {
  const ar = [];
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      ar.push(i)
    }
  }
  return ar
}