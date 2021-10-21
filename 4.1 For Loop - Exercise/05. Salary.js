function salary(arg) {
  let salary = arg[1]
  let fb = arg.filter(el => el == 'Facebook').length * 150
  let is = arg.filter(el => el == 'Instagram').length * 100
  let rd = arg.filter(el => el == 'Reddit').length * 50
  let total = salary - (fb + is + rd)
  return total <= 0 ? `You have lost your salary.` : `${total.toFixed(0)}`
}

// console.log(salary(['3', '500', 'Github.com', 'Stackoverflow.com', 'softuning']))