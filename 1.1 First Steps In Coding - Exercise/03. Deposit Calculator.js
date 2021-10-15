function depositCalculator([sum, term, percent]) {
    let dividend = sum * percent / 100
    let month = dividend / 12
    return +sum + term * month
}

//console.log(depositCalculator([200, 3, 5.7]))


//--------------------------------------------------------(2)---------------------


function depositCalculator(arg) {
    let [sum, term, percent] = arg.map(el => Number(el) || el)
    let dividend = sum * percent / 100
    let month = dividend / 12
    return sum + term * month
}

// console.log(depositCalculator([200, 3, 5.7]))

