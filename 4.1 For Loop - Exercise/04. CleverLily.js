function cleverLily( [age, laundryPrice, toyPrice], toysCount = 0, birthdaysMoney = 0) { //[be black Ninja]//
    for (i = 1; i <= age; i++) i & 1 ? toysCount++ : (birthdaysMoney += 10 * i / 2, birthdaysMoney--)
    let money = birthdaysMoney + toyPrice * toysCount
    return money >= laundryPrice ? `Yes! ${(money - laundryPrice).toFixed(2)}` : `No! ${(laundryPrice - money).toFixed(2)}`
}

// console.log(cleverLily([10, 170.00, 6]))
// console.log(cleverLily([21, 1570.98, 3]))