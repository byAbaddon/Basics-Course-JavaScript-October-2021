function graduationTwo(arg) { 
  let name = arg.shift()
  let grade = 0
  let countClass = 1
  for (let i = 0; i <= arg.length; i++) {
    if (arg[i] >= 4.00) {
      grade+= Number(arg[i])
      countClass++
    } else if(arg[i] == '2'){
        return `${name} has been excluded at ${countClass} grade`    
    }
  }
                       
  return `${name} graduated. Average grade: ${(grade / 12).toFixed(2)}`
}

// console.log(graduationTwo(['Gosho', '5', '5.5', '6', '5.43', '5.5', '6', '5.55', '5', '6', '6','5.43', '5' ]))
