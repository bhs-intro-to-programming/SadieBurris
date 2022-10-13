const countTens = (ar) => {
  let count = 0;
  for (let i = 0; i < ar.length; i++){
    if(ar[i] === 10) {
      count++
    }
  }
  return count;
}

const sum = (ar) => {
  let count = 0;
  for (let i = 0; i < ar.length; i++){
    count = count + ar[i]
  }
  return count;
}

const evens = (ar) => {
  const newAr = []
  for (let i = 0; i < ar.length; i++){
    if(ar[i] % 2 === 0) {
      newAr.push(ar[i])
    }
  }
  return newAr
}