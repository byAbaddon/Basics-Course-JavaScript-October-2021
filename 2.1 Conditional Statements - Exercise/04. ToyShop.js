function toyShop(arg) {
    let [trip, puzzle, doll, bear, minion, truck] = arg.map(Number)
    let toysCount = puzzle + doll + bear + minion + truck;
    let toysTotal = (puzzle * 2.60) + (doll * 3) + (bear * 4.1) + (minion * 8.20) + (truck * 2);

    if (toysCount >= 50) toysTotal = toysTotal * 0.75
    toysTotal = toysTotal * 0.90

    if (toysTotal >= trip) return `Yes! ${(toysTotal - trip).toFixed(2)} lv left.`
    return `Not enough money! ${(trip - toysTotal).toFixed(2)} lv needed.`
}

// console.log(toyShop(['40.8', '20', '25', '30', '50', '10']))