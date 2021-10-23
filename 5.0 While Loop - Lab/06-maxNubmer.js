function maxNumber(arg) {
  return Math.max(...arg.slice(0, -1))
}

console.log(maxNumber(["100", "99", "80", "70", "Stop"]))