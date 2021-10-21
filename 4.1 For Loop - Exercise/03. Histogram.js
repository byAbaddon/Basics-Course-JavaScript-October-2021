function histogram(arg) {
  let numCount = arg.shift()
  let p1 = arg.filter(el => el < 200).length / numCount * 100
  let p2 = arg.filter(el => el >= 200 && el <= 399).length / numCount * 100
  let p3 = arg.filter(el => el >= 400 && el <= 599).length / numCount * 100
  let p4 = arg.filter(el => el >= 600 && el <= 799).length / numCount * 100
  let p5 = arg.filter(el => el >= 800).length / numCount * 100

  return `${p1.toFixed(2)}%\n${p2.toFixed(2)}%\n${p3.toFixed(2)}%\n${p4.toFixed(2)}%\n${p5.toFixed(2)}%`
}

// console.log(histogram([53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]))
