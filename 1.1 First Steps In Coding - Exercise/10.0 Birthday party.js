function birthday(rent) {
    let cakePrice = +rent * 0.20 
    let drinks = cakePrice * 0.55
    let animator = rent / 3
    return  +rent + cakePrice + drinks + animator
}

// console.log(birthday('2250'))
