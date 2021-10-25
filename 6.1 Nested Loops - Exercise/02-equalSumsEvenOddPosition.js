function equalSumsEvenOddPosition(arg) {
  let [odd, even, currentNum, arr] = [0, 0, '', []]

  for (let i = arg[0]; i <= arg[1]; i++) {
    currentNum = i
    even = i.toString().split('').filter((el, i) => (i & 1) === 0).reduce((a, b) => +a + +b)
    odd = i.toString().split('').filter((el, i) => (i & 1) !== 0).reduce((a, b) => +a + +b)
    if (even === odd) {
      arr.push(currentNum)
    }
  }
  console.log(arr.join(' '))
}

//equalSumsEvenOddPosition(['100000', '100050'])
//equalSumsEvenOddPosition(['123456', '124000'])