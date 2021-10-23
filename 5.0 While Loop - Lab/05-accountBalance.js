function accountBalance(arg) {
  let [num, sum] = [0, 0]
  arg[arg.length - 1].length > 8 ? arg.pop(arg.length - 1) : null

  for (let i = 0; i < arg.length; i++) {
    if (arg[i] >= 0) {
      num = +arg[i]
      sum += num
      console.log(`Increase: ${num.toFixed(2)}`);
    } else {
      return `Invalid operation!\nTotal: ${sum.toFixed(2)}`

    }
  }
  console.log('Total:', sum.toFixed(2));
}


//accountBalance(['5.51', '69.42', '100', 'NoMoreMoney'])