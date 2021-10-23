function examPreparation(arg) {
  let badGrades = +arg.shift()
  let counterBadGrades = badGrades
  let nameTask = ''
  let grade = 0
  let allGrade = 0
  let numbersProblem = 0
  let currentTask = ''

  while (nameTask !== 'Enough') {
    nameTask = arg.shift()
    grade = +arg.shift()

    if (grade <= 4) {
      counterBadGrades--
      if (counterBadGrades === 0) {
        console.log(`You need a break, ${badGrades} poor grades.`);
        return
      }
    }

    if (nameTask !== 'Enough') {
      currentTask = nameTask
      numbersProblem++
      allGrade += grade
    }

  }

  console.log(`Average score: ${(allGrade / numbersProblem).toFixed(2)}`);
  console.log(`Number of problems: ${numbersProblem}`);
  console.log(`Last problem: ${currentTask}`);
}


//examPreparation(['3', 'Money', '6', 'Story', '4', 'Spring Time', '5', 'Bus', '6', 'Enough', ])
// examPreparation(['2','Income','3','Game Info','6','Best Players','4',])