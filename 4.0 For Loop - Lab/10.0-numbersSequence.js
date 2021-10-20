function numberSequence(start, end) {
  let sum = 0
  let numArr = []
  for (let i = +start; i <= +end; i++) {
    if (i % 9 === 0) {
      numArr.push(i)
      sum += i
    }
  }

  console.log('The sum:', sum);
  numArr.forEach(el => console.log(el))
}

// numberSequence('100', '200')