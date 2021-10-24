function building(arg) {
    let [floor, rooms] = arg.map(Number)
    let roomList = []

    for (let i = 1; i <= floor; i++) {
        for (let j = rooms; j > 0; j--) {
            if (i == floor) {
                roomList.push(`L${i}${j - 1}`)
                continue
            }
            if (i & 1) {
                roomList.push(`A${i}${+j - 1}`)
            } else {
                roomList.push(`O${i}${+j - 1}`)
            }
        }
    }

    while (roomList.length) {
        let template = ''
        for (let i = 0; i < rooms; i++) {
            template += roomList.pop() + ' '
        }

        console.log(template)
    }
}

//building(['6', '4'])
// building(['9', '5'])