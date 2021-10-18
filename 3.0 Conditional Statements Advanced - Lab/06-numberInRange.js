function numberInRange(n) {
  return +n >= -100 && +n <= 100 && +n !== 0 ? 'Yes' : 'No'
}

// console.log(numberInRange([0]))