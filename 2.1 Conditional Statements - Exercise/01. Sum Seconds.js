function sumSeconds(arg) {
    let min = arg.reduce((a, b) => +a + +b)
    let time = new Date(2020, 11, 31, 0, min)
    return time.toString().split(' ')[4].substr(1, 4)
}

// console.log(sumSeconds(['14', '12', '10']))