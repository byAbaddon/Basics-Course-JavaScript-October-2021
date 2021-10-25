function numberPyramid(arg) {
  let [current, result] = [1, '']

  for (let r = 1; r <= arg; r++) {
    for (let c = 1; c <= r; c++) {
      result += current + ' ';
      current++;
      if (current > arg) {
        console.log(result);
        return;
      }
    }
    console.log(result);
    result = '';
  }

}

//numberPyramid(['15'])