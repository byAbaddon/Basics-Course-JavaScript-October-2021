function minNumber(arg) {
  arg.pop()
  return Math.min(...arg)
}

// console.log(minNumber(["100", "99", "80", "70", "Stop"]))