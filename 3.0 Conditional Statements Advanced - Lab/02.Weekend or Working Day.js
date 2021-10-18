function weekendOrWorkingDay([day]) {
    const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    const restDays = ['Saturday', 'Sunday']
    return workingDays.includes(day)  ? 'Working day' : restDays.includes(day) ? 'Weekend' : 'Error'
}
   
// console.log(weekendOrWorkingDay(['Monday']))
// console.log(weekendOrWorkingDay(['April']))
   
