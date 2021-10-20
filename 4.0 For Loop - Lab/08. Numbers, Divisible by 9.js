function numberDevisibleBy9([n1, n2]) {
  let sum = 0;
  let outputNumbers = ' '
  for (let i = +n1; i <= +n2; i++) {
      if (i % 9 === 0) {
          sum += i;
          outputNumbers += `${i}\n`
      }
  }
  return `The sum: ${sum}\n${outputNumbers}`
}

//console.log(numberDevisibleBy9([100, 200]))

