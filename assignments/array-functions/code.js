const countTens = (ar) => (ar.filter(num => num === 10)).length
/*{
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === 10) {
      count++
    }
  }
  return count;
}
*/

const sum = (ar) => ar.reduce((pre, cur) => pre + cur, 0)


const evens = (ar) => {
  const newAr = []
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] % 2 === 0) {
      newAr.push(ar[i])
    }
  }
  return newAr
}

const anyOverOneHundred = (ar) => {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > 100) {
      return true
    }
  }
  return false
}

const pyramid = (num) => {
  const ar = [];
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      ar.push(i)
    }
  }
  return ar
}