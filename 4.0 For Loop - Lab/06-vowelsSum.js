function vowelsSum([text]) {
  sum =  0
  map = new Map([['a', 1], ['e', 2], ['i', 3], ['o', 4], ['u', 5]])
  Array.from(text).forEach(el => map.has(el) ? sum += map.get(el) : null)
  return sum
}

// console.log(vowelsSum(['hello']))
