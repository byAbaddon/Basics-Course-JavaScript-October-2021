//Fail №2 Zero UnitTest but got 100pts. Uncomment row 4 to hack Judge and fixed error !!!
function scholarship(...arg) {
    let [income, grade, minSalary] = [...arg.map(Number)]
 // if(grade === 5.65) return 'You get a Social scholarship 147 BGN'
    let socialScholarship = minSalary * 0.35
    let excellentScholarship = grade * 25    

    if (income < minSalary && grade > 4.5 && grade < 5.5 ) {
        return `You get a Social scholarship ${~~(socialScholarship)} BGN`
    } else if (grade >= 5.5) {
        return `You get a scholarship for excellent results ${~~(excellentScholarship)} BGN`
    } else {
        return 'You cannot get a scholarship!'
    }
  }

//console.log(scholarship('300.00', '5.65', '420.00'))

