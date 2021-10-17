function bonusScore(num, bonus = 0) {
    num = parseInt(num)

    if (num <= 100) bonus += 5
    else num < 1000 ? bonus = num * 0.2 : bonus = num * 0.1
    !(num & 1) ? ++bonus : num % 10 == 5 ? bonus += 2 : null

    return `${bonus}\n${num + bonus}`
}

// console.log(bonusScore(['20']))
// console.log(bonusScore('2703'))

