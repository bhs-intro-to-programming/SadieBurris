const countTens = (ar) => {
  let count = 0;
  for (let i = 0; i < ar.length; i++){
    if(ar[i] === 10) {
      count++
    }
  }
  return count;
}