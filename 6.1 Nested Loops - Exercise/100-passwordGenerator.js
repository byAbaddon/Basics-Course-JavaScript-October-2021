function passwordGenerator([...arg]) {
  let [num, word] = [+arg[0], +arg[1]]
  const str = 'abcdefghijklmnopqrstuvwxyz';
  let numList = ''

  for (let a = 1; a < num; a++) {
    for (let b = 1; b < num; b++) {
      for (let c = 0; c < word; c++) {
        for (let d = 0; d < word; d++) {
          for (let e = Math.max(a, b) + 1; e <= num; e++) {
            numList += ' ' + a + b + str[c] + str[d] + e
          }
        }
      }
    }
  }

  console.log(numList.trim())
}

//passwordGenerator(['3', '1']);