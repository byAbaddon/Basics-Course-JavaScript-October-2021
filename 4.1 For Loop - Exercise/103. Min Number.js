function minNumber(arr) {
  arr.shift()
  return Math.min(...arr)
}

console.log(minNumber(['3', '-10', '20', '-30']))