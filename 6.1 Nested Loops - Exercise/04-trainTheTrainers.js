function trainTheTrainers(arg) {
  let jury = +arg.shift()
  let allStudentGrade = 0
  let iteration = 0

  while (arg[0] !== 'Finish') {

    let presentation = arg.shift()
    let studentGrade = 0

    for (let i = 0; i < arg.length; i++) {
      if (!isNaN(arg[i])) {
        studentGrade += +arg[i]
        allStudentGrade += +arg[i]
        iteration++
        continue
      }
      console.log(`${presentation} - ${(studentGrade / jury).toFixed(2)}.`);
      arg = arg.slice(i, )
      break
    }
  }
  console.log(`Student's final assessment is ${(allStudentGrade / iteration).toFixed(2)}.`);
}

//trainTheTrainers(['2', 'While-Loop', '6.00', '5.50', 'For-Loop', '5.84', '5.66', 'Finish'])