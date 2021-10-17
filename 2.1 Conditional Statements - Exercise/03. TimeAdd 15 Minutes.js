function addMinToTime([hour, min]) {
    let time = new Date(2020, 12, 8, +hour, +min + 15)
    let [start, end] = [0, 5]
    time.getHours() < 10 ? ++start && --end: null 
    return time.toString().split(' ')[4].substr(start, end)
}

//console.log(addMinToTime(['0', '01']))
//console.log(addMinToTime(['23', '59']))


//-----------------------------------------------------------(2)-------------------------------

function timeMinutes([arg1, arg2]) {
    let hours = Number(arg1)
    let minutes = Number(arg2)

    let addTime = hours * 60 + minutes + 15
    let totalHour = parseInt(addTime / 60)
    let totalMin = addTime % 60;
 
    if (totalHour >= 24)  totalHour -= 24
       
    if (totalMin < 10) {
        console.log(`${totalHour}:0${totalMin}`)
    } else {
        console.log(`${totalHour}:${totalMin}`)
    }
}


//timeMinutes(['23', '59'])