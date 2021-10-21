function leapYears(start, end) {

  for (let i = +start; i <= +end; i++) {
    if (i % 4 == 0) {
      console.log(i);
    }
  }
}

//leapYears('1908', '1919')
//leapYears('2020', '2032')