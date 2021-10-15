function fruitMarket(y, b, kgO, kgR, kgY) {
    let raspberries = y / 2
    let oranges = raspberries * 0.60
    let bananas = raspberries * 0.20  
    let sumKgR = kgR * raspberries
    let semKgO = kgO * oranges
    let semKgB = b * bananas
    let semKgY = kgY * y
    
    return sumKgR + semKgO + semKgB  + semKgY 
}

//console.log(fruitMarket('48', '10', '3.3', '6.5', '1.7'))



