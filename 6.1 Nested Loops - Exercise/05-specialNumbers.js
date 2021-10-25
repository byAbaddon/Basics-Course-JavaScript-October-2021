function specialNUmNumbers(arg) {
  let [specialNum, listSpecialNumbers] = [+arg[0], '']

  for (let index = 1111; index <= 9999; index++) {
    let currentNum = index
    let fragmentation = index.toString().split('').map(el => Number.isInteger(specialNum / el))
    if (!fragmentation.includes(false)) {
      listSpecialNumbers += ' ' + currentNum
    }
  }
  console.log(listSpecialNumbers.trim());
}

//specialNUmNumbers(['16'])